import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

class PetController {

//cria um pet
    public async criarPet(req:Request, res:Response){
        const {nome, especie, raca, idade, peso, deficiencia, idCliente} = req.body;
        try
        {
            // ver se existe o cliente para esse pet
            const acharcliente = await prisma.cliente.findUnique({
                where: {idCliente:idCliente}
            });
            if (!acharcliente) {
                res.status(404).json({message:"Usuario não encontrado!"})
                return
            }

            const novoPet = await prisma.pet.create(
                {data: {nome, especie, raca, idade, deficiencia, peso, idCliente}})
                res.status(201).json({message: "Pet criado com sucesso!", novoPet:novoPet});
        }
        catch(error: any)
        {
            res.status(500).json({error: error.message});
        }
    }

//obter um pet por id
    public async obterPetPorId (req:Request, res:Response){
        const{idPet} = req.params;
        try{
            const obterpet = await prisma.pet.findUnique({
                where: {idPet:Number(idPet)}
            });
            if (!obterpet) {
                res.status(404).json({message:"pet não encontrado!"})
                return
            }
            res.status(200).json({message: " Pet encontrado com sucesso!", pet:obterpet});
        }
        catch(error: any)
            {res.status(500).json({error: error.message})};
    }

//acha varios pets
    public async obterPets(req:Request, res:Response){
        try{
            const obterpets = await prisma.pet.findMany()
            res.status(200).json({message: " Pets encontrados com sucesso!", pets:obterpets})
        }
        catch(error: any)
        {res.status(500).json({error: error.message})}
    }

//atualizar pet
    public async atualizarPet(req:Request, res:Response){
        
        const{idPet} = req.params
        const {nome, especie, raca, idade, peso, deficiencia} = req.body;

        try{  
            const acharpet = await prisma.pet.findUnique({
                where: {idPet:Number(idPet)}
            });
            if (!acharpet) {
                res.status(404).json({message:"pet não encontrado!"})
                return 
            }

            const atualizarpet = await prisma.pet.update({
                data: {nome, especie, raca, idade, peso, deficiencia},
                where: {idPet: Number(idPet)}
            })
            res.status(200).json({message: "Pet atualizado com sucesso!", pet:atualizarpet})
        }catch(error: any)
            {res.status(500).json({error: error.message});
        }
    }

//deletar pet
    public async deletarPet(req:Request, res:Response) {
        const {idPet} = req.params
        try{
            const acharpet = await prisma.pet.findUnique({
                where: {idPet:Number(idPet)}
            });
            if (!acharpet) {
            res.status(404).json({message:"pet não encontrado!"})
            return
            }

            await prisma.pet.delete({ where: {idPet: Number(idPet)} })

            res.status(200).json({message:"Pet deletado com sucesso!"});
        }catch(error: any)
        {res.status(500).json({error: error.message})}
    }
}

export default new PetController();
