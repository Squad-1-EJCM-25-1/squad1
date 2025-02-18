import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();

// Funções Atualizar, deletar, e pegarEnderecoPorIdUsuario utilzam idUsuario como parâmetro.

class EnderecoController {
  public async criarEndereco(req: Request, res: Response) {
    try {
      const { CEP, endereco, UF, bairro, complemento, idUsuario } = req.body;
      const novoEndereco = await prisma.endereco.create({
        data: { CEP, endereco, UF, bairro, complemento, idUsuario },
      });
      res.json(novoEndereco);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar endereço' });
    }
  }

  public async pegarEnderecos(req: Request, res: Response) {
    try {
      const enderecos = await prisma.endereco.findMany();
      res.json(enderecos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar endereços' });
    }
  }

  public async pegarEnderecoPorIdUsuario(req: Request, res: Response) {
    try {
      const { idUsuario } = req.params;
      const endereco = await prisma.endereco.findUnique({
        where: { idUsuario: parseInt(idUsuario)  },
      });
      if (endereco) {
        res.json(endereco);
      } else {
        res.status(404).json({ error: 'Endereço não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar endereço' });
    }
  }

  public async atualizarEndereco(req: Request, res: Response) {
    try {
      const {  idUsuario } = req.params;
      const { CEP, endereco, UF, bairro, complemento } = req.body;
      const atualizaEndereco = await prisma.endereco.update({
        where: { idUsuario:parseInt(idUsuario)  },
        data: { CEP, endereco, UF, bairro, complemento },
      });
      res.json(atualizaEndereco);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar endereço' });
    }
  }

  public async deletarEndereco(req: Request, res: Response) {
    try {
      const { idUsuario } = req.params;
      const enderecoDeletado = await prisma.endereco.delete({
        where: { idUsuario: parseInt(idUsuario)},
      });
      res.json(enderecoDeletado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar endereço' });
    }
  }
}

export default new EnderecoController();
