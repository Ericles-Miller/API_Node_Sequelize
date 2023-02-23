import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  static init(sequelize: any) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
    }),
  };
}

export { User };