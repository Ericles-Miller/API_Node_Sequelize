import { Sequelize } from 'sequelize';

const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;