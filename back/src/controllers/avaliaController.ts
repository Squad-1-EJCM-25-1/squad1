import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class AvaliaController {    
  public async criarAvaliacao(req: Request, res: Response) {
    try {
      const { comentario, nota, idCliente, idProduto } = req.body;
      const novaAvaliacao = await prisma.avalia.create({
        data: { comentario, nota, idCliente, idProduto },
      });
      res.json(novaAvaliacao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar avaliação' });
    }
  }

  public async pegarAvaliacoes(req: Request, res: Response) {
    try {
      const avaliacoes = await prisma.avalia.findMany();
      res.json(avaliacoes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar avaliações' });
    }
  }

  public async pegarAvaliacaoPorId(req: Request, res: Response) {
    try {
      const { idCliente, idProduto } = req.params;
      const avaliacao = await prisma.avalia.findUnique({
        where: {
          idCliente_idProduto: { idCliente: parseInt(idCliente), idProduto: parseInt(idProduto) },
        },
      });
      if (avaliacao) {
        res.json(avaliacao);
      } else {
        res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar avaliação' });
    }
  }

  public async atualizarAvaliacao(req: Request, res: Response) {
    try {
      const { idCliente, idProduto } = req.params;
      const { comentario, nota } = req.body;
      const avaliacaoAtualizada = await prisma.avalia.update({
        where: {
          idCliente_idProduto: { idCliente: parseInt(idCliente), idProduto: parseInt(idProduto) },
        },
        data: { comentario, nota },
      });
      res.json(avaliacaoAtualizada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar avaliação' });
    }
  }

  public async deletarAvaliacao(req: Request, res: Response) {
    try {
      const { idCliente, idProduto } = req.params;
      const avaliacaoDeletada = await prisma.avalia.delete({
        where: {
          idCliente_idProduto: { idCliente: parseInt(idCliente), idProduto: parseInt(idProduto) },
        },
      });
      res.json(avaliacaoDeletada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar avaliação' });
    }
  }
}

export default new AvaliaController();
