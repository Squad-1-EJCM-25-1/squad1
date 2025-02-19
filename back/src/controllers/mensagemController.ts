import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();

class MensagemController {
  public async criarMensagem(req: Request, res: Response) {
    try {
      const { conteudo, remetente, idCliente, idVendedor } = req.body;
      const novaMensagem = await prisma.mensagem.create({
        data: {
          conteudo,
          data: new Date(), // Define a data atual
          remetente,
          idCliente,
          idVendedor
        },
      });
      res.json(novaMensagem);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar mensagem' });
    }
  }

  public async pegarMensagens(req: Request, res: Response) {
    try {
      const mensagens = await prisma.mensagem.findMany();
      res.json(mensagens);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar mensagens' });
    }
  }

  public async pegarMensagemPorId(req: Request, res: Response) {
    try {
      const { idMensagem } = req.params;
      const mensagem = await prisma.mensagem.findUnique({
        where: { idMensagem: parseInt(idMensagem) },
      });
      if (mensagem) {
        res.json(mensagem);
      } else {
        res.status(404).json({ error: 'Mensagem não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar mensagem' });
    }
  }

  public async atualizarMensagem(req: Request, res: Response) {
    try {
      const { idMensagem } = req.params;
      const { conteudo, remetente } = req.body;
      const mensagemAtualizada = await prisma.mensagem.update({
        where: { idMensagem: parseInt(idMensagem) },
        data: { conteudo, remetente },
      });
      res.json(mensagemAtualizada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar mensagem' });
    }
  }

  public async deletarMensagem(req: Request, res: Response) {
    try {
      const { idMensagem } = req.params;
      const mensagemDeletada = await prisma.mensagem.delete({
        where: { idMensagem: parseInt(idMensagem) },
      });
      res.json(mensagemDeletada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar mensagem' });
    }
  }
}

export default new MensagemController();
