const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://nsqrnsij:vMUnHBCgX-QBYKhuz3e_xsD97hRlWm_k@silly.db.elephantsql.com/nsqrnsij",
  {
    dialect: "postgres",
  }
);

module.exports = sequelize;
