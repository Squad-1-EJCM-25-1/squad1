import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

class VacinacaoController {    
//Cria Vacinação
    public async criarVacinacao(req:Request, res:Response) {
        const {nomeVacina, data, peso, idPet, idCliente} = req.body;
        try{
            // ver se existe o pet para essa vacinacao
            const acharpet = await prisma.pet.findUnique({
                where: {idPet:idPet, idCliente:idCliente}
            });
            if (!acharpet) {
                res.status(404).json({message:"Pet não encontrado!"})
                return
            }
            const novoVacinacao = await prisma.vacinacao.create(
                {data: {nomeVacina, data: new Date(data), peso, idPet: Number (idPet), idCliente: Number(idCliente)}})
                res.status(201).json({message: "vacinacao criada com sucesso", novoVacinacao})            
        }
        catch(error: any)
        {
            res.status(500).json({error: error.message});
        }
    }

//Seleciona Todas a vacinas
    public async obterTodasVacinas(req:Request, res:Response)
    {
        try{
            const obterVacinacao = await prisma.vacinacao.findMany()
            res.status(200).json({message:"Pets encontrados com sucesso!", vacinacao:obterVacinacao})
        }
        catch(error: any)
        {res.status(500).json({error: error.message})}
    }

//atualizar vacinação
    public async atualizarvacinacao(req:Request, res:Response){
        const{idPet, idCliente, data} = req.params
        const {nomeVacina, peso,} = req.body;

        try{  
            const acharpet = await prisma.pet.findUnique({
                where: { idPet:Number(idPet), idCliente: Number(idCliente)}
            });
            if (!acharpet) {
            res.status(404).json({message:"Pet não encontrado!"});
            return
            }

            const atualizarvacinacao = await prisma.vacinacao.update({
                data: {nomeVacina, peso, data},
                where: {
                    data_idCliente_idPet: { data: new Date(data), idCliente: Number(idCliente), idPet: Number(idPet) }
                }
            })
            res.status(200).json({message: " Vacinação atualizada com sucesso!", vacina:atualizarvacinacao})
        }
        catch(error: any)
            {res.status(500).json({error: error.message});
        }
    }

//Deletar Vacinação
    public async deletarVacina(req:Request, res:Response) {
        const {idPet, idCliente} = req.params
        try{
            const acharpet = await prisma.pet.findUnique({
                  where: {idPet:Number(idPet), idCliente:Number(idCliente)}
            });
            if (!acharpet) {
            res.status(404).json({message:"pet não encontrado!"});
            return
            }

            const deletavacina = await prisma.vacinacao.delete({
                where: {data_idCliente_idPet: { data: new Date(), idCliente: Number(idCliente), idPet: Number(idPet) }}
            
            })
            res.status(204).send();
        }catch(error: any){
            res.status(500).json({error: error.message})
        }
    }
}

export default new VacinacaoController();
