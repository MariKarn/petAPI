/**
 * histoy.js
 * maneja las historias medicas de los pacientes
 * cada historia solo se puede registrar o ver, su borrado 
 * es responsabilidad del mantenimiento
 */

const rt = require('express').Router();
const database = require('./database/conn');

rt.get('/history/', (request, response) => {
    const queryStr = `SELECT * FROM historia;`;

    database.query(queryStr, (error, result) => {
        if(error)
            throw error;
        response.send(result);
    });
});

rt.get('/history/:id', (request, response) => {
    const {id} = request.query;
    const queryStr = `SELECT * FROM historia WHERE id=${id};`;

    database.query(queryStr, (error, result) => {
        if(error)
            throw error;
        response.send(result);
    });
});

rt.post('/history/', (request, response) => {
    const {query} = request;
    const queryStr = `INSERT INTO historia 
                     (id_paciente, emision, receta, diagnostico, procedimiento, ingreso, egreso) 
                     VALUES 
                     (${query.paciente}, DATE('${query.emision}'), '${query.receta}', 
                     '${query.diagnostico}', '${query.procedimiento}', DATE('${query.ingreso}'), DATE('${query.egreso}'));`;
    
    database.query(queryStr, (error) => {
        if(error)
            throw error;
    });

    response.send({sended: query});
});

module.exports = rt; 