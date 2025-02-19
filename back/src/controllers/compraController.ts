import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

enum StatusCompra {
  Pendente = "Pendente",
  Enviado = "Enviado",
  Entregue = "Entregue",
  Cancelado = "Cancelado"
}

enum FormaPagamento {
  Cartao = "Cartão",
  PIX = "PIX",
  Boleto = "Boleto"
}

class CompraController {
    public async criarCompra(req: Request, res: Response) {
    try {
      const { statusCompra, formaPagamento, valorTotal, idCliente, idProduto } = req.body;
      
      // Validação do enum StatusCompra
      if (!Object.values(StatusCompra).includes(statusCompra)) {
        res.status(400).json({ error: 'StatusCompra inválido' });
        return
      }

      // Validação do enum FormaPagamento
      if (!Object.values(FormaPagamento).includes(formaPagamento)) {
        res.status(400).json({ error: 'FormaPagamento inválida' });
        return
      }

      const novaCompra = await prisma.compra.create({
        data: {
          dataCompra: new Date(), // Define a data atual
          statusCompra,
          formaPagamento,
          valorTotal,
          idCliente,
          idProduto
        },
      });
      res.json(novaCompra);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar compra' });
    }
  }

    public async pegarCompras(req: Request, res: Response) {
        try {
        const compras = await prisma.compra.findMany();
        res.json(compras);
        } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar compras' });
        }
    }

    public async pegarCompraPorId(req: Request, res: Response) {
        try {
        const { idCompra } = req.params;
        const compra = await prisma.compra.findUnique({
            where: { idCompra: parseInt(idCompra) },
        });
        if (compra) {
            res.json(compra);
        } else {
            res.status(404).json({ error: 'Compra não encontrada' });
        }
        } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar compra' });
        }
    }

    public async atualizarCompra(req: Request, res: Response) {
        try {
        const { idCompra } = req.params;
        const { statusCompra, formaPagamento, valorTotal } = req.body;

        // Validação do enum StatusCompra
        if (!Object.values(StatusCompra).includes(statusCompra)) {
            res.status(400).json({ error: 'StatusCompra inválido' });
            return
        }

        // Validação do enum FormaPagamento
        if (!Object.values(FormaPagamento).includes(formaPagamento)) {
            res.status(400).json({ error: 'FormaPagamento inválida' });
            return
        }

        const compraAtualizada = await prisma.compra.update({
            where: { idCompra: parseInt(idCompra) },
            data: {
            statusCompra,
            formaPagamento,
            valorTotal
            },
        });
        res.json(compraAtualizada);
        } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar compra' });
        }
    }

    public async deletarCompra(req: Request, res: Response) {
        try {
        const { idCompra } = req.params;
        const compraDeletada = await prisma.compra.delete({
            where: { idCompra: parseInt(idCompra) },
        });
        res.json(compraDeletada);
        } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar compra' });
        }
    }
}

export default new CompraController();
