import { Router } from "express";

const express = require("express");
const router = express.Router();

const vacinaçãoController = require("../controllers/vacinaçãocontroller")



router.get('/pets', vacinaçãoController.obterpets);
router.post('/vacinacao', vacinaçãoController.criarVacinacao);
router.put('/vacinacao/:idPet/:idCLiente', vacinaçãoController.atualizarvacinacao);
router.delete('/pets/:idPet/:idCLiente', vacinaçãoController.deletavacina);


module.exports = Router;
