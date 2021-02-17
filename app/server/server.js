const express = require( 'express' );
const bcrypt = require( 'bcrypt' );
const datastore = require( 'nedb' );
var cors = require( 'cors' );

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


//login path
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
        const user = { username: req.body.username, password: hashedPass, todos: {} };
        database.find( { username: user.username }, function ( err, docs ) {
            console.log( docs );
            if ( docs[ 0 ] )
            {
                return res.status( 201 ).send( { statusCode: 201, status: 'failed', message: "Username already in use" } );;
            }
            database.insert( user );
            res.status( 201 ).send( { statusCode: 201, status: 'succes' } );
        } );



    } catch ( err )
    {
        res.status( 500 ).send( "Something went wrong with the server" );
    }
} );

app.post( '/login-user', cors(), ( req, res ) => {
    database.find( { username: req.body.username }, async function ( err, docs ) {
        console.log( docs );
        if ( docs[ 0 ] )
        {
            console.log( docs );
            if ( await bcrypt.compare( req.body.password, docs[ 0 ].password ) )
            {
                return res.status( 201 ).send( { statusCode: 201, status: 'success', message: "user logged in", userData: docs[ 0 ] } );
            }
            return res.status( 201 ).send( { statusCode: 201, status: 'failed', message: "Incorrect password" } );
        }
        return res.status( 201 ).send( { statusCode: 201, status: 'failed', message: "Incorrect username" } );

    } );
} );