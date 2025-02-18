import { Router } from 'express';

//controllers

import UsuarioController from '../controllers/usuarioController';

//configs

import { photoUpload } from '../config/uploader';

//middlewares

import { MsgUploader } from '../middlewares/msgUploader';


const router = Router();

// Usuário

// se precisarmos do token em alguma rota, utilizar 
// passport.authenticate("jwt", {session: false}) como middleware da rota

router.post("/usuario", UsuarioController.criarUsuario);

router.delete("/usuario/:idUsuario", UsuarioController.deletarUsuario);

router.put("/usuario/:idUsuario", UsuarioController.atualizarUsuario);

router.get("/usuario/:idUsuario", UsuarioController.obterUsuario);

router.get("/usuarios", UsuarioController.obterUsuarios)

router.get("/login", UsuarioController.login);

// imagens

// imagem de usuário
router.post("/usuario/imagem", photoUpload.single("image"), MsgUploader.enviarMensagem)

// imagem de produto
router.post("/produto/imagem", photoUpload.single("image"), MsgUploader.enviarMensagem)

export default router;