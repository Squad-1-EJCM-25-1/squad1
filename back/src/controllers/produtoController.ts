import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

class ProdutoController {

  // Criar Produto
public async criarProduto(req: Request, res: Response) {
    const { nome, descricao, preco, categoria, quantidade, imagemURL, idVendedor} = req.body;
    try {
      const novoProduto = await prisma.produto.create({
        data: { nome, descricao, preco, categoria, quantidade, imagemURL, idVendedor},
      });
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar produto' });
    }
  }

  // Selecionar todos Produtos
  public async selecionarTodosProdutos(req: Request, res: Response) {
    try {
      const produtos = await prisma.produto.findMany();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }

  // Seleciona um único Produto por ID
  public async pegarProdutoPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const produto = await prisma.produto.findUnique({
        where: { idProduto: Number(id) },
      });
      if (produto) {
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }
  
  // Seleciona um único Produto por IdVendedor
  public async pegarProdutoPorIdVendedor(req: Request, res: Response) {
    const { idVendedor } = req.params;
    try {
      const produtos = await prisma.produto.findMany({
        where: { idVendedor: Number(idVendedor) },
      });
      if (produtos) {
        res.status(200).json(produtos);
      } else {
        res.status(404).json({ error: 'Produtos não encontrados' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }

  // Atualiza Produto
  public async atualizarProduto(req: Request, res: Response) {
    const { id } = req.params;
    const {nome, descricao, preco, categoria, quantidade, imagemURL, idVendedor } = req.body;
    try {
      const produtoAtualizado = await prisma.produto.update({
        where: { idProduto: Number(id) },
        data: {nome, descricao, preco, categoria, quantidade, imagemURL, idVendedor},
      });
      res.status(200).json(produtoAtualizado);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar produto' });
    }
  }

  // Deleta Produto
  public async deletarProduto(req: Request, res: Response) {
    const { idProduto } = req.params;
    try {
      await prisma.produto.delete({
        where: { idProduto: Number(idProduto) },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar produto' });
    }
  }
}

export default ProdutoController;

