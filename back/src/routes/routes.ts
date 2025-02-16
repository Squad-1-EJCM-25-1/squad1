import { Router } from 'express';


//controllers

import usuarioController from '../controllers/usuarioController';


const router = Router();

// Usuário

// se precisarmos do token em alguma rota, utilizar 
// passport.authenticate("jwt", {session: false}) como middleware da rota

router.post("/usuario", usuarioController.criarCliente)

router.get("/login", usuarioController.login)


export default router;