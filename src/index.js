const express = require("express");
const cors = require("cors");

const sequelize = require("./database/database");

const usuariosRoutes = require("./routes/usuariosRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", usuariosRoutes);

sequelize.sync();

app.listen(8000, () => {
  console.log("Servidor rodando!");
});
