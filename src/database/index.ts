import { Sequelize } from 'sequelize';

const dbConfig = require('../config/databaseConfig');

const connection = new Sequelize(dbConfig);

module.exports = connection;