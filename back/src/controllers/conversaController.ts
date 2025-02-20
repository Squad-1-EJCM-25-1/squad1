import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class ConversaController {
  public async criarConversa(req: Request, res: Response) {
    try {
      const { idCliente, idVendedor } = req.body;
      const novaConversa = await prisma.conversa.create({
        data: { idCliente, idVendedor },
      });
      res.json(novaConversa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar conversa' });
    }
  }

  public async pegarConversas(req: Request, res: Response) {
    try {
      const conversas = await prisma.conversa.findMany();
      res.json(conversas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar conversas' });
    }
  }

  public async pegarConversaPorId(req: Request, res: Response) {
    try {
      const { idCliente, idVendedor } = req.params;
      const conversa = await prisma.conversa.findUnique({
        where: {
          idCliente_idVendedor: { idCliente: parseInt(idCliente), idVendedor: parseInt(idVendedor) },
        },
      });
      if (conversa) {
        res.json(conversa);
      } else {
        res.status(404).json({ error: 'Conversa não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar conversa' });
    }
  }

  public async atualizarConversa(req: Request, res: Response) {
    try {
      const { idCliente, idVendedor } = req.params;
      const { idCliente: novoIdCliente, idVendedor: novoIdVendedor } = req.body;
      const conversaAtualizada = await prisma.conversa.update({
        where: {
          idCliente_idVendedor: { idCliente: parseInt(idCliente), idVendedor: parseInt(idVendedor) },
        },
        data: { idCliente: novoIdCliente, idVendedor: novoIdVendedor },
      });
      res.json(conversaAtualizada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar conversa' });
    }
  }

  public async deletarConversa(req: Request, res: Response) {
    try {
      const { idCliente, idVendedor } = req.params;
      const conversaDeletada = await prisma.conversa.delete({
        where: {
          idCliente_idVendedor: { idCliente: parseInt(idCliente), idVendedor: parseInt(idVendedor) },
        },
      });
      res.json(conversaDeletada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar conversa' });
    }
  }
}

export default new ConversaController();
