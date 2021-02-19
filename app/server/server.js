const express = require( 'express' );
const bcrypt = require( 'bcrypt' );
const datastore = require( 'nedb' );
const cors = require( 'cors' );
const path = require( 'path' );
const { triggerAsyncId } = require( 'async_hooks' );
const { fail } = require( 'assert' );

const app = express();

const PORT = 5000;

const users = [];

const database = new datastore( './database/storage.db' );
database.loadDatabase();

//accepts JSON
app.use( express.json() );

//listeninig
app.listen( PORT, () => console.log( `listening at ${ PORT }` ) );
//exporting file
app.use( express.static( '../build' ) );


// return index every time
// app.use( '../build', express.static( path.join( '../ build', __dirname ) ) );


//users path
app.get( '/:userId', ( req, res ) => {
    const userId = req.params.userId;
    database.find( { _id: userId }, ( err, docs ) => {
        if ( err )
        {
            return res.status( 500 ).send( "Something went wrong with the server" );
        }
        if ( docs[ 0 ] )
        {
            const todos = docs[ 0 ].todos;
            return res.status( 201 ).send( {
                statusCode: 201,
                status: 'success',
                message: "Added",
                userData: { todos: todos, id: userId }
            } );
        }
        res.status( 500 ).send( "No user found" );
    } );

} );


//register path
app.post( '/register-user', cors(), async ( req, res ) => {
    try
    {
        const hashedPass = await bcrypt.hash( req.body.password, 10 );
        const user = {
            username: req.body.username,
            password: hashedPass,
            email: req.body.email,
            site: req.body.site,
            phone: req.body.phone,
            todos: []
        };
        database.find( { username: user.username }, function ( err, docs ) {
            console.log( docs );
            if ( docs[ 0 ] )
            {
                return res.status( 201 ).send( { statusCode: 201, status: 'failed', message: "Username already in use" } );;
            }
            database.insert( user );
            res.status( 201 ).send( { statusCode: 201, status: 'success' } );
        } );



    } catch ( err )
    {
        res.status( 500 ).send( "Something went wrong with the server" );
    }
} );

//login path
app.post( '/login-user', cors(), ( req, res ) => {
    database.find( { username: req.body.username }, async function ( err, docs ) {
        console.log( this );
        if ( docs[ 0 ] )
        {
            console.log( docs );
            if ( await bcrypt.compare( req.body.password, docs[ 0 ].password ) )
            {
                return res.status( 201 ).send( {
                    statusCode: 201,
                    status: 'success',
                    message: "user logged in",
                    userData: { todos: docs[ 0 ].todos, id: docs[ 0 ]._id }
                } );
            }
            return res.status( 201 ).send( { statusCode: 201, status: 'failed', message: "Incorrect password" } );
        }
        return res.status( 201 ).send( { statusCode: 201, status: 'failed', message: "Incorrect username" } );

    } );
} );

// add note

app.post( '/add-note/:userId', ( req, res ) => {
    const userId = req.params.userId;
    const newTodo = req.body.todo;
    database.find( { _id: userId }, ( err, docs ) => {
        if ( err )
        {
            res.status( 500 ).send( { status: "Failed", message: "No user found" } );
            return;
        }
        const todos = docs[ 0 ].todos;
        console.log( docs[ 0 ] );
        todos.push( newTodo );
        database.update( { _id: userId }, { $set: { todos: todos } }, {}, ( err, num ) => {
            if ( err )
            {
                return res.status( 500 ).send( { status: "Fail", message: "Something went wrong" } );
            }
            res.status( 201 ).send( {
                statusCode: 201,
                status: 'success',
                message: "Added",
                userData: { todos: todos, id: userId }
            } );
        } );
    } );


} );

app.put( '/complete/:userId', ( req, res ) => {
    const userId = req.params.userId;
    const target = req.body.target;
    database.find( { _id: userId }, ( err, docs ) => {
        if ( err )
        {
            return res.status( 500 ).send( { status: "fail", message: "No such user" } );
        }
        const todos = docs[ 0 ].todos;
        todos.forEach( todo => {
            if ( todo.id === target )
            {
                todo.isComplete = !todo.isComplete;
            }
        } );
        database.update( { _id: userId }, { $set: { todos: todos } }, {}, ( err, num ) => {
            if ( err )
            {
                return res.status( 500 ).send( { status: "fail", message: "Something went wrong" } );
            }
            res.status( 201 ).send( { todos: todos, id: userId } );
        } );
    } );


} );