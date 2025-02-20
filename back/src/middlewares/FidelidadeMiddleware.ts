import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const verificarFidelidade = async (req: Request, res: Response, next: NextFunction) => {
    const { idUsuario } = req.params;

    try {
        const cliente = await prisma.cliente.findUnique({
            where: { idCliente: Number(idUsuario) }
        }); 

        if (!cliente) {
            res.status(404).json({ message: "Cliente não encontrado!" });
            return
        }

        if (!cliente.fidelidade) {
            res.status(403).json({ message: "Cliente não possui fidelidade!" });
            return
        }

        next();
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
};

export default verificarFidelidade;