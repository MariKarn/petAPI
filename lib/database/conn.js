const mysql = require('mysql2');

/**
 * cambia los datos acorde al usuario y host que
 * maneja la BD
 */
const config = {
    host: 'localhost',
    password: 'abcd',
    database: 'vet',
    user: 'usx',
};

const connection = mysql.createConnection(config);

module.exports = connection;