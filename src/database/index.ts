import Sequelize from 'sequelize';

import dbConfig from '../config/database';

class Database {
  public connection: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  handle(): void {
    this.connection = new Sequelize.Sequelize(dbConfig);
  }
}

const db : Database = new Database();

export { db };
