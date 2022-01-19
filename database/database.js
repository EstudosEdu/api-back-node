const Sequelize = require('sequelize');
require('dotenv').config();
const modelLaboratorio = require('../models/Laboratorio.js');
const modelExame = require('../models/Exame.js');
const modelExameLaboratorio = require('../models/Exame_Laboratorio.js');

class ConnectionDatabase
{
    constructor()
    {
        this.database = new Sequelize(
            process.env.DB_DATABASE,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: 'mysql'
            }
        )

        this.tableLaboratorio = this.database.define(modelLaboratorio.name, modelLaboratorio.table, modelLaboratorio.options);
        this.tableExame = this.database.define(modelExame.name, modelExame.table, modelExame.options);
        this.tableExameLaboratorio = this.database.define(modelExameLaboratorio.name, modelExameLaboratorio.table, modelExameLaboratorio.options);
    
        this.tableExame.belongsToMany(this.tableLaboratorio, {
            through: {
                model: this.tableExameLaboratorio
            },
            foreignKey: 'idExame',
            constraint: true
        })
        
        this.tableLaboratorio.belongsToMany(this.tableExame, {
            through: {
                model: this.tableExameLaboratorio
            },
            foreignKey: 'idLaboratorio',
            constraint: true
        })
        
    }

    //funções de criação de tabelas
    async createModelLaboratorio()
    {
        await this.tableLaboratorio.sync({force: true});
            try {
                return 'Tabela laboratorio criada!'
            } catch (err) {
                return Error(err);
            }
    }
    
    async createModelExame()
    {
        await this.tableExame.sync({force: true});
            try {
                return 'Tabela Exame criada!'
            } catch (err) {
                return Error(err);
            }
    }

    async createModelExameLaboratorio()
    {
        await this.tableExameLaboratorio.sync({force: true});
            try {
                return 'Tabela ExameLaboratorio criada!'
            } catch (err) {
                return Error(err);
            }
    }

    //funções exclusivamentes da tabela exame
    async cadastraExame(data)
    {
        const tabela = await this.tableExame;
        await tabela.create(
            {
                nome: data.nome,
                tipo: data.tipo,
                status: data.status
            }
        )
    }


    //funções exclusivas para tabela de laboratorios
    async createLaboratorio()
    {
        const tabela = await this.tableLaboratorio;
        await tabela.create(
            {
                nome: 'SUS',
                endereço: 'Rua Sla, Nº 001, SP - SP',
                status: true
            }
        )
    }

}

module.exports = ConnectionDatabase;