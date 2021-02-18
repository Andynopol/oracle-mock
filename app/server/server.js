const express = require( 'express' );
const bcrypt = require( 'bcrypt' );
const datastore = require( 'nedb' );
const cors = require( 'cors' );
const path = require( 'path' );

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
app.get( '/users', ( req, res ) => {
    database.find( {}, ( err, docs ) => {
        res.json( docs );
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
            todos: {}
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
        console.log( docs );
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