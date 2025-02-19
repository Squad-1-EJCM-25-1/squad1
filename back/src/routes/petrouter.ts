import { Router } from "express";

const express = require("express");
const router = express.Router();

const PetController = require("../controllers/petcontroller")


router.get('/pets/:idPet', PetController.obterpet);
router.get('/pets', PetController.obterpets);
router.post('/pets', PetController.criarpet);
router.put('/pets/:idPet', PetController.atualizarpet);
router.delete('/pets/:idPet', PetController.deletapet);


module.exports = Router;
