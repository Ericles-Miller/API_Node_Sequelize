import { Sequelize, Model, DataTypes  } from 'sequelize';
import database from '../database';


class User extends Model {
  id!: number;
  name!: string;
  email!: string;

  User.init(
    {
      email: Sequelize.STRING,
      name: Sequelize.STRING
    },
    {
      Sequelize: database.connection,

    }
  )

}