const { Router } = require("express");

const {
  createUsuario,
  readUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/UsuarioController");

const router = Router();

router.get("/", readUsuario);

router.post("/usuario", createUsuario);

router.put("/usuario/:idUsuario", updateUsuario);

router.delete("/usuario/:idUsuario", deleteUsuario);

module.exports = router;
