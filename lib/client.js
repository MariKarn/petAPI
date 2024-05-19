/**
 * client.js
 * maneja los registros del propietario
 */
const rt = require('express').Router();
const database = require('./database/conn');

rt.get('/client/', (request, response) => {
    const queryStr = `SELECT * FROM cliente;`;

    database.query(queryStr, (error, result) => {
        if(error) 
            throw error;
        response.send(result);
    });
});

rt.get('/client/:id', (request, response) => {
    const {id} = request.query;
    const queryStr = `SELECT * FROM cliente WHERE id=${id};`;

    database.query(queryStr, (error, result) => {
        if(error) 
            throw error;
        response.send(result);
    });
});

rt.post('/client/', (request, response) => {
    const {query} = request;
    const queryStr = `INSERT INTO cliente 
                     (cedula, nombre, apellido, contacto, direccion) 
                     VALUES 
                     ('${query.cedula}', '${query.nombre}', 
                     '${query.apellido}', '${query.contacto}', 
                     '${query.direccion}' );`; 

    database.query(queryStr, (error) => {
        if(error) 
            throw error;
    });

    response.send({sended: query});
});

rt.put('/client/:id', (request, response) => {
    const {query} = request;
    const {id} = query;
    const queryStr = `UPDATE cliente 
                     SET direccion='${query.direccion}', 
                     contacto='${query.contacto}'
                     WHERE id=${id};`;

    if(!id) {
        throw new Error('invalid id designation');
    }else{
        database.query(queryStr, (error) => {
            if(error) 
                throw error;
        });
    }

    response.send({sended: query});
});

rt.delete('/client/:id', (request, response) => {
    const {id} = request.query;
    const queryStr = `DELETE FROM cliente WHERE id=${id};`;

    if(!id) {
        throw new Error('invalid id designation');
    } else {
        database.query(queryStr, (error) => {
            if(error) 
                throw error;
        });
    }

    response.send({sended: request.query});
});

module.exports = rt;