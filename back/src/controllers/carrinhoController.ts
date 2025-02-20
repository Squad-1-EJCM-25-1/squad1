import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class CarrinhoController {
  public async adicionarItem(req: Request, res: Response) {
    try {
      const { idCliente, idProduto, quantidade } = req.body;
      const novoItem = await prisma.carrinho.create({
        data: { idCliente, idProduto, quantidade },
      });
      res.json(novoItem);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar item ao carrinho' });
    }
  }

  public async obterItens(req: Request, res: Response) {
    try {
      const { idCliente } = req.params;
      const itens = await prisma.carrinho.findMany({
        where: { idCliente: Number(idCliente) },
        include: { produto: true },
      });
      res.json(itens);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar itens do carrinho' });
    }
  }

  public async atualizarItem(req: Request, res: Response) {
    try {
      const { idCliente, idProduto } = req.params;
      const { quantidade } = req.body;
      const itemAtualizado = await prisma.carrinho.update({
        where: {
          idCliente_idProduto: { idCliente: Number(idCliente), idProduto: Number(idProduto) },
        },
        data: { quantidade },
      });
      res.json(itemAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar item do carrinho' });
    }
  }

  public async deletarItem(req: Request, res: Response) {
    try {
      const { idCliente, idProduto } = req.params;
      const itemDeletado = await prisma.carrinho.delete({
        where: {
          idCliente_idProduto: { idCliente: Number(idCliente), idProduto: Number(idProduto) },
        },
      });
      res.json(itemDeletado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar item do carrinho' });
    }
  }
}

export default new CarrinhoController();
