import { Router } from 'express';

//controllers

import UsuarioController from '../controllers/usuarioController';
import EnderecoController from '../controllers/enderecoController';
import ProdutoController from '../controllers/produtoController';
import TelefoneController from '../controllers/telefoneController';
import CompraController from '../controllers/compraController';
import AvaliaController from '../controllers/avaliaController';
import mensagemController from '../controllers/mensagemController';
import ConversaController from '../controllers/conversaController';
import {verificarFidelidade} from '../middlewares/FidelidadeMiddleware';
import CarrinhoController from '../controllers/carrinhoController';


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

router.get("/usuario/:idUsuario", verificarFidelidade, UsuarioController.obterUsuario);

router.get("/usuarios", UsuarioController.obterUsuarios)

router.get("/login", UsuarioController.login);

// imagens

// imagem de usuário
router.post("/usuario/imagem", photoUpload.single("image"), MsgUploader.enviarMensagem)

// imagem de produto
router.post("/produto/imagem", photoUpload.single("image"), MsgUploader.enviarMensagem)


// Rotas para Produto
router.post('/produto', ProdutoController.criarProduto);

router.get('/produtos', ProdutoController.selecionarTodosProdutos);

router.get('/produto/:id', ProdutoController.pegarProdutoPorId);

router.get('/produto/vendedor/:idVendedor', ProdutoController.pegarProdutoPorIdVendedor);

router.put('/produto/:id', ProdutoController.atualizarProduto);

router.delete('/produto/:idProduto', ProdutoController.deletarProduto);

// Rotas para Endereço

router.post('/endereco', EnderecoController.criarEndereco);

router.get('/enderecos', EnderecoController.pegarEnderecos);

router.get('/enderecos/:idUsuario', EnderecoController.pegarEnderecoPorIdUsuario);

router.put('/enderecos/:idUsuario', EnderecoController.atualizarEndereco);

router.delete('/enderecos/:idUsuario', EnderecoController.deletarEndereco);

// Rotas para Telefone

router.post('/telefones', TelefoneController.criarTelefones);

router.get('/telefones', TelefoneController.pegarTelefones);

//router.get('/telefones/:idTelefones', TelefoneController.pegarTelefonesPorIdTelefones);

router.get('/telefones/usuario/:idUsuario', TelefoneController.pegarTelefonesPorIdUsuario);

router.put('/telefones/usuario/:idUsuario', TelefoneController.atualizarTelefones);

router.delete('/telefones/usuario/:idUsuario', TelefoneController.deletarTelefones);


// Rotas para compra

router.post('/compra', CompraController.criarCompra);

router.get('/compras', CompraController.pegarCompras);

router.get('/compras/:idCompra', CompraController.pegarCompraPorId);

router.put('/compras/:idCompra', CompraController.atualizarCompra);

router.delete('/compras/:idCompra', CompraController.deletarCompra);


//Rotas para avalia 

//router.post('/avaliacao', AvaliaController.criarAvaliacao);

router.get('/avaliacoes', AvaliaController.pegarAvaliacoes);

router.get('/avaliacoes/:idCliente/:idProduto', AvaliaController.pegarAvaliacaoPorId);

router.put('/avaliacoes/:idCliente/:idProduto', AvaliaController.atualizarAvaliacao);

router.delete('/avaliacoes/:idCliente/:idProduto', AvaliaController.deletarAvaliacao);

// Rotas para Mensagem
router.post('/mensagem', mensagemController.criarMensagem);

router.get('/mensagens', mensagemController.pegarMensagens);

router.get('/mensagens/:idMensagem', mensagemController.pegarMensagemPorId);

router.put('/mensagens/:idMensagem', mensagemController.atualizarMensagem);

router.delete('/mensagens/:idMensagem', mensagemController.deletarMensagem);

//Rotas para Conversa

router.post('/conversa', ConversaController.criarConversa);

router.get('/conversas', ConversaController.pegarConversas);

router.get('/conversas/:idCliente/:idVendedor', ConversaController.pegarConversaPorId);

router.put('/conversas/:idCliente/:idVendedor', ConversaController.atualizarConversa);

router.delete('/conversas/:idCliente/:idVendedor', ConversaController.deletarConversa);

// Rotas para Carrinho
router.post('/carrinho', CarrinhoController.adicionarItem);

router.get('/carrinho/:idCliente', CarrinhoController.obterItens);

router.put('/carrinho/:idCliente/:idProduto', CarrinhoController.atualizarItem);

router.delete('/carrinho/:idCliente/:idProduto', CarrinhoController.deletarItem);

export default router;
