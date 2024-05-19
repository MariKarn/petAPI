/**
 * patient.js
 * maneja las operaciones de registro de pacientes
 * un paciente pertenece unicamente a un propietario
 * por lo que cambiar de propietario incurre a borrar los datos del paciente en cuestion
 */
const rt = require('express').Router();
const database = require('./database/conn');

rt.get('/patient/', (request, response) => {
    const queryStr = `SELECT * FROM paciente;`;
    
    database.query(queryStr, (error, result) => {
        if(error) 
            console.error(error);
        response.send(result);
    });
});

rt.get('/patient/:id', (request, response) => {
    const {id} = request.query;
    const queryStr = `SELECT * FROM paciente WHERE id=${id};`;

    database.query(queryStr, (error, result) => {
        if(error) 
            console.error(error);
        response.send(result);
    });
});

rt.post('/patient/', (request, response) => {
    const {query} = request;
    const queryStr = `INSERT INTO paciente 
                     (nombre, especie, raza, id_cliente) 
                     VALUES 
                     ('${query.nombre}', '${query.especie}', 
                     '${query.raza}', ${query.cliente});`;
    
    database.query(queryStr, (error) => {
        if(error) 
            console.error(error);
    });

    response.send({sended: query});
});

rt.delete('/patient/:id', (request, response) => {
    const {id} = request.query;
    const queryStr = `DELETE FROM paciente WHERE id=${id};`;

    if(!id) {
        console.error('invalid id designation');
    } else {
        database.query( queryStr, (error) => {
            if(error) 
                console.error(error);
        } );
    }

    response.send({sended: request.query});
});

module.exports = rt;