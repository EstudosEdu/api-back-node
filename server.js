const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes.js');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen('3001', () => console.log('Servidor "ON" na porta 3001'));