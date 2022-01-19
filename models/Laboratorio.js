const { DataTypes } = require('sequelize');

const modelLaboratorio = {
    name: 'Laboratorio',
    table: {
        nome: {
            type: DataTypes.STRING
        },
        endereço: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.BOOLEAN
        }
    },
    options: {freezeTableName: true}
}

module.exports = modelLaboratorio;