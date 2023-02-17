import { Model, DataTypes } from 'sequelize';


class User extends Model {
  static init(sequelize: any) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
    }),
  },
}

export { User };