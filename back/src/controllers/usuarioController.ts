import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import auth from "../config/auth"

const prisma = new PrismaClient();

class UsuarioController {

    public async criarUsuario(req: Request, res: Response) {

        const { nome, cpf, cnpj, email, senha } = req.body;
        const { hash, salt } = auth.generatePassword(senha);

        try {

            const usuario = await prisma.usuario.create({
                data: {
                    nome,
                    email,
                    hash,
                    salt
                },
            })

            if (cpf) {
                //criando cliente com id do usuário
                const cliente = await prisma.cliente.create({
                    data: {
                        cpf,
                        idCliente: usuario.idUsuario
                    }
                })

                res.status(201).json({ message: "Cliente criado com sucesso!", usuario: usuario, cliente: cliente })
                return;
            }

            if (cnpj) {
                //criando vendedor com id do usuário
                const vendedor = await prisma.vendedor.create({
                    data: {
                        cnpj,
                        idVendedor: usuario.idUsuario
                    }
                })

                res.status(201).json({ message: "Vendedor criado com sucesso!", usuario: usuario, vendedor: vendedor })
                return;
            }


        } catch (error: any) {

            res.status(500).json({ message: error.message })

        }


    }

    public async obterUsuario(req: Request, res: Response) {

        const { idUsuario } = req.params

        try {

            //prisma include, inclui à consulta info das entidades Cliente e Vendedor (que estão relacionadas a Usuario)
            const usuario = await prisma.usuario.findUnique({
                where: { idUsuario: Number(idUsuario) },
                include: {
                    cliente: true,
                    vendedor: true
                }
            })

            if (!usuario) {
                res.status(404).json({ message: "Usuário não encontrado!" })
                return;
            }

            res.status(200).json({ message: "Usuário encontrado com sucesso!", usuario: usuario });

        } catch (error: any) {

            res.status(500).json({ error: error.message })
        }

    }

    public async obterUsuarios(req: Request, res: Response) {

        try {

            //prisma include, inclui à consulta info das entidades Cliente e Vendedor (que estão relacionadas a Usuario)
            const usuarios = await prisma.usuario.findMany({
                include: {
                    cliente: true,
                    vendedor: true
                }
            })

            res.status(200).json({ message: "Sucesso!", data: usuarios });

        } catch (error: any) {

            res.status(500).json({ error: error.message })
        }

    }

    // apagando instância de usuário, estaremos apagando instância de
    // vendedor e cliente, uma vez que a chave estrangeira possui onDelete Cascade
    public async deletarUsuario(req: Request, res: Response) {

        const { idUsuario } = req.params;

        try {

            const usuario = await prisma.usuario.delete({
                where: { idUsuario: Number(idUsuario) }
            })

            res.status(200).json({ message: "Cliente deletado com sucesso!", usuario: usuario })

        } catch (error: any) {

            res.status(500).json({ message: error.message })
        }

    }

    public async atualizarUsuario(req: Request, res: Response) {

        const { idUsuario } = req.params;

        const { nome, email, imagemURL, cpf, fidelidade, cnpj } = req.body;

        try {

            if (cpf || fidelidade) {
                const cliente = await prisma.cliente.findUnique({
                    where: { idCliente: Number(idUsuario) }
                })
                if (cliente) {
                    const clienteAtualizado = await prisma.cliente.update({
                        where: { idCliente: Number(idUsuario) },
                        data: { cpf, fidelidade }
                    })
                }
            }

            if (cnpj) {
                const vendedor = await prisma.vendedor.findUnique({
                    where: { idVendedor: Number(idUsuario) }
                })
                if (vendedor) {
                    const vendedorAtualizado = await prisma.vendedor.update({
                        where: { idVendedor: Number(idUsuario) },
                        data: { cnpj }
                    })
                }
            }

            const usuario = await prisma.usuario.update({
                where: { idUsuario: Number(idUsuario) },
                data: { nome, email, imagemURL },
                include: {
                    cliente: true,
                    vendedor: true
                }
            })

            res.status(200).json({ message: "Atualização bem sucedida!", usuario: usuario })

        } catch (error: any) {

            res.status(500).json({ message: error.message })

        }

    }

    public async login(req: Request, res: Response) {

        const { email, senha } = req.body;

        try {

            const usuario = await prisma.usuario.findUnique({
                where: { email }
            })

            if (!usuario) {
                res.status(404).json({ message: "Usuário não encontrado!" });
                return;
            }

            const { hash, salt } = usuario

            if (!auth.checkPassword(senha, hash, salt)) {
                res.status(500).json({ message: "Senha errada!" })
                return;
            }

            const token = auth.generateJWT(usuario);

            res.status(200).json({ message: "Autenticação concluída! Token JWT enviado.", token: token })

        } catch (error: any) {

            res.status(500).json({ message: error.message })

        }

    }



}

export default new UsuarioController();
