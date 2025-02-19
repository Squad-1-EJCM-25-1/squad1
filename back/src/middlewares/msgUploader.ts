import { PrismaClient } from "@prisma/client";
import {Request, Response, NextFunction} from "express"

const prisma = new PrismaClient();

export class MsgUploader{

    public static enviarMensagem(req: Request, res: Response, next: NextFunction){

        try {

            const arquivo = req.file;
        
            if (!arquivo) {

                res.status(500).json({ error: "Arquivo não encontrado!" });
                return;

            }

            next()

        } catch (error: any) {
            
            res.status(500).json({message:error.message})

        }       

    }

    public static async inserirImagemURL(req: Request, res: Response, next: NextFunction){

        try {

            const { id } = req.params;
            const arquivo = req.file;
            const caminhoArquivo = req.file?.path;
        
            if(!arquivo) {

                res.status(500).json({ error: "Arquivo não encontrado!" });
                return;

            }

            if (!caminhoArquivo) {

                res.status(500).json({ error: "Erro ao pegar caminho do arquivo!" });
                return;

            }

    //se a imagem começar com 'u', é usuário, definimos isso em uploader.ts, na pasta config
    //se for produto, começa com 'p'
            if(arquivo.filename.startsWith('u')) {
                
                await prisma.usuario.update({
                    where: { idUsuario : Number(id) }, 
                    data: { imagemURL: String(caminhoArquivo) },
                });

            } else { 

                await prisma.produto.update({
                    where: { idProduto : Number(id) }, 
                    data: { imagemURL: String(caminhoArquivo) },
                });

            }

            res.status(200).json({ message: "Arquivo baixado com sucesso!", arquivo: arquivo });

        } catch (error: any) {
            
            res.status(500).json({message:error.message})

        }       

    }
}