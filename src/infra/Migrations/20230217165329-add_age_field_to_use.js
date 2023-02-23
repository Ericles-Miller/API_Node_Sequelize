/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users', // nome of table 
      'age', // nome of field 
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    );
  },
  // this field down is execute when the command of migration is execute
  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'users', // nome of table
      'age',
    );
  },
};
