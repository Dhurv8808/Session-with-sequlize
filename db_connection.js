const Sequelize = require('sequelize');

let sequelize = new Sequelize('practice', 'postgres', 'myPassword', {
  dialect: "postgres",
  host: "localhost",
});

console.log(sequelize);

module.exports = sequelize;