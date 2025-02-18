import {Request, Response, NextFunction} from "express"

export class MsgUploader{

    public static enviarMensagem(req: Request, res: Response, next: NextFunction){

        try {

            const file = req.file;
        
            if (!file) {

                res.status(500).json({ error: "Arquivo não encontrado!" });
                return;

            }

            res.status(200).json({ message: "Arquivo baixado com sucesso!", file: file });
            next()

        } catch (error: any) {
            
            res.status(500).json({message:error.message})

        }       

    }
}