const express = require("express");
const routes = require('./lib');
const conn = require('./lib/database/conn');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(routes.clientrouter);
app.use(routes.patientrouter);
app.use(routes.schedelrouter);
app.use(routes.historyrouter);

const server = app.listen( port, ( ) => {
    console.log( `server listening at port ${port}` );
    conn.connect( ( error ) => {
        if(error)
            console.error(error);
    } );
} );

