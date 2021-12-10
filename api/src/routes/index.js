const { Router } = require("express");
const router = Router();

const proyectRouts = require("./proyectRouts.js");
const proyectTypeRouts = require("./proyectTypeRouts.js");

router.use("/proyect", proyectRouts);
router.use("/proyectType", proyectTypeRouts);

module.exports = router;

// 1178473

// 81054389    08300 anteponer si no lo toma o 00