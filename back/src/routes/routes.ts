import { Router } from 'express';


//controllers

import usuarioController from '../controllers/usuarioController';


const router = Router();

// Usuário

// se precisarmos do token em alguma rota, utilizar 
// passport.authenticate("jwt", {session: false}) como middleware da rota

router.post("/usuario", usuarioController.criarUsuario);

router.delete("/usuario/:idUsuario", usuarioController.deletarUsuario);

router.put("/usuario/:idUsuario", usuarioController.atualizarUsuario);

router.get("/usuario/:idUsuario", usuarioController.obterUsuario);

router.get("/usuarios", usuarioController.obterUsuarios)

router.get("/login", usuarioController.login);

export default router;