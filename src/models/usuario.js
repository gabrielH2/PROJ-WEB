const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Usuario = sequelize.define(
  "Usuário",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    avatarUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
    },
  },
  { underscored: true }
);

module.exports = Usuario;
