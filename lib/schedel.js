/**
 * schedel.js
 * controla el apartado de citas
 * para cada paciente
 */

const rt = require('express').Router();
const database = require('./database/conn');

rt.get('/sched/', (request, response) => {
    const queryStr = `SELECT * FROM cita;`;

    database.query(queryStr, (error, result) => {
        if(error) 
            throw error;
        response.send(result);
    });
});

rt.get('/sched/:id', (request, response) => {
    const {id} = request.query;
    const queryStr = `SELECT * FROM cita WHERE id=${id};`;

    database.query(queryStr, (error, result) => {
        if(error) 
            throw error;
        response.send(result);
    });
});

rt.post('/sched/', (request, response) => {
    const {query} = request;
    const queryStr = `INSERT INTO cita 
                     (id_paciente, doctor, fecha) 
                     VALUES 
                     (${query.paciente}, '${query.doctor}', DATE('${query.fecha}'));`;

    database.query(queryStr, (error) => {
        if(error) 
            throw error;
    });

    response.send({sended: query});
});

rt.put('/sched/:id', (request, response) => {
    const {query} = request;
    const {id} = query;
    const queryStr = `UPDATE cita SET fecha=DATE('${query.fecha}') WHERE id=${id};`;

    database.query(queryStr, (error) => {
        if(error) 
            throw error;
    });

    response.send({sended: query});
});

module.exports = rt;