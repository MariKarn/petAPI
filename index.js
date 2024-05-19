const express = require('express');
const routes = require('./lib');

const conn = require('./lib/database/conn');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(routes.clientrouter);
app.use(routes.patientrouter);
app.use(routes.schedelrouter);
app.use(routes.historyrouter);

app.listen( PORT, ( ) => {
    console.log( `server listening at port ${PORT}` );
    conn.connect( ( error ) => {
        if(error)
            throw error;
    } );
} );