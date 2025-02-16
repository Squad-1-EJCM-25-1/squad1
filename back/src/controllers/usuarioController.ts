import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import auth from "../config/auth"

const prisma = new PrismaClient();

class usuarioController {

    public async criarCliente(req: Request, res: Response){

        const { nome, cpf, email, senha } = req.body;
        const { hash, salt } = auth.generatePassword(senha);

        try {
            
            const usuario = await prisma.usuario.create({
                data:{
                    nome,
                    email,
                    hash,
                    salt
                },
            })

            //criando cliente com id do usuário
            const cliente = await prisma.cliente.create({
                data:{
                    cpf,
                    idCliente: usuario.idUsuario
                }
            })

            res.status(201).json({message: "Cliente criado com sucesso!", data: {usuario, cliente}})

        } catch (error) {

            res.status(500).json({message: "Falha na criação do Cliente!"})
            
        }


    }

    public async login(req: Request, res: Response){

        const { email, senha } = req.body;

        try {
            
            const usuario = await prisma.usuario.findUnique({
                where:{email}
            })

            if(!usuario){
                res.status(404).json({message:"Usuário não encontrado!"});
                return;
            }

            const { hash, salt } = usuario

            if(!auth.checkPassword(senha, hash, salt)){
                res.status(500).json({message:"Senha errada!"})
                return;
            }

            const token = auth.generateJWT(usuario);

            res.status(200).json({message:"Autenticação concluída! Token JWT enviado.", token: token})

        } catch (error: any) {

            res.status(500).json({message: error.message})
            
        }

    }



}

export default new usuarioController();
