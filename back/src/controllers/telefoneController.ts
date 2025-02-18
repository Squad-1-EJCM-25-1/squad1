import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

// Funções Atualizar, deletar, e pegarTelefonesPorIdUsuario utilzam idUsuario como parâmetro.

class TelefoneController{
    public async criarTelefones(req: Request, res: Response) {
        try {
          const { celular, residencial, idUsuario } = req.body;
          const novosTelefones = await prisma.telefones.create({
            data: { celular, residencial, idUsuario },
          });
          res.json(novosTelefones);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao criar telefones' });
        }
      }
    
    public async pegarTelefones(req: Request, res: Response) {
         try {
          const telefones = await prisma.telefones.findMany();
          res.json(telefones);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar telefones' });
        }
      }
    
    public async pegarTelefonesPorIdTelefones(req: Request, res: Response) {
        try {
          const { idTelefones } = req.params;
          const telefones = await prisma.telefones.findUnique({
            where: { idTelefones: parseInt(idTelefones) },
          });
          if (telefones) {
            res.json(telefones);
          } else {
            res.status(404).json({ error: 'Telefones não encontrados' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar telefones' });
        }
      }    
      
    public async pegarTelefonesPorIdUsuario(req: Request, res: Response) {
        try {
          const { idUsuario } = req.params;
          const telefones = await prisma.telefones.findUnique({
            where: { idUsuario: parseInt(idUsuario) },
          });
          if (telefones) {
            res.json(telefones);
          } else {
            res.status(404).json({ error: 'Telefones não encontrados' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar telefones' });
        }
      }
    
    public async atualizarTelefones(req: Request, res: Response) {
        try {
          const { idUsuario } = req.params;
          const { celular, residencial } = req.body;
          const telefonesAtualizados = await prisma.telefones.update({
            where: { idUsuario: parseInt(idUsuario) },
            data: { celular, residencial },
          });
          res.json(telefonesAtualizados);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao atualizar telefones' });
        }
      }
    
    public async deletarTelefones(req:Request, res: Response) {
        try {
          const { idUsuario } = req.params;
          const telefonesDeletados = await prisma.telefones.delete({
            where: { idUsuario: parseInt(idUsuario) },
          });
          res.json(telefonesDeletados);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao deletar telefones' });
        }
      }
}
export default TelefoneController;