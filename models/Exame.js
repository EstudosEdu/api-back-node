const { DataTypes } = require('sequelize');

const modelExame = {
    name: 'Exame',
    table: {
        nome: {
            type: DataTypes.STRING
        },
        tipo: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.BOOLEAN
        }
    },
    options: {freezeTableName: true}
}

module.exports = modelExame;