require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5433,
  define: {
    timestamps: true,
  },
};

// module.exports = {
//   dialect: 'postgres',
//   host:"localhost",
//   username: 'postgres',
//   password: '@18er0821',
//   database:'node_sequelize',
//   port: 5433,
//   define: {
//     timestamps: true,
//   },
// };