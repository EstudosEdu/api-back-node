const express = require('express');
const app = express();
const ConnectionDatabase = require('../database/database.js');
const conexao = new ConnectionDatabase();

module.exports = app.get('/', async (req, res) => {
    res.send('Bem Vindo á Nossa API');
})

module.exports = app.get('/createTableLaboratorio', async (req, res) => {
    const create = await conexao.createModelLaboratorio()
    console.log(create);
})

module.exports = app.get('/createTableExame', async (req, res) => {
    const create = await conexao.createModelExame()
    console.log(create);
})

module.exports = app.get('/createTableExameLaboratorio', async (req, res) => {
    const create = await conexao.createModelExameLaboratorio()
    console.log(create);
})

// end-point's de exame
module.exports = app.post('/cadastraExame', async (req, res) => {
    const { idLaboratorio, ...data } = req.body;
    const Exame = await conexao.cadastraExame(data)
    await Exame.setcadastraExame(idLaboratorio)
    res.send('Exame Adicionado!')
})

// end-point's de laboratorio
module.exports = app.get('/cadastraLaboratorio', async (req, res) => {
    await conexao.createLaboratorio()
    res.send('Laboratorio Adicionado!')
})