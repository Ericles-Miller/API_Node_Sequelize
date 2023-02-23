import { Sequelize } from 'sequelize';

import { User } from '../models/Users';

const dbConfig = require('../config/database');

const user = User;

const connection = new Sequelize(dbConfig);

user.init(connection);

export { connection };
