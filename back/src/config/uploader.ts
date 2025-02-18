import { Request, Response } from "express";
import multer from "multer";
import path from "path";

//Como passar imagem na request?
//Tem que passar id no body
//form-data no postman para passar arquivos
//imagem como último parâmetro, pois ignora os outros
//parâmetro da imagem na request tem que ser 'image'!!

//nomeamos a imagem com u ou p (se for usuário ou produto) + id + "_" + nomeArquivo

const storage = multer.diskStorage({
  destination: function (request: Request, file, callBack) {
    let destinationFolder;

    if(file.mimetype.startsWith("image/")) {
        destinationFolder = path.join(__dirname, "..", "..", "uploads", "photos");
    } else{
        const message = "Somente aceitamos imagens!";
        destinationFolder = path.join(__dirname, "..", "..", "uploads", "others");
        return callBack(new Error(message), destinationFolder);
    }


    callBack(null, destinationFolder);
  },
  filename: function (request:Request, file, callBack) {
    const { id } = request.body;

    let prefixo = null;

    //diferenciando produto e usuário
    if(request.originalUrl.includes("/usuario")){
        prefixo = "u"
    } else {
        prefixo = "p"
    }

    callBack(null, prefixo + id + "_" + file.originalname);
  },
});

const photoUpload = multer({
  storage: storage,
  limits: {
    // Até 9 arquivos de 50 MB
    fileSize: 1024 * 1024 * 50,
    files: 9,
  },
  fileFilter: function (request: Request, file, callBack) {
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (!allowedFileTypes.includes(file.mimetype)) {
      const message = "Somente aceitamos Jpeg, PNG and JPG ";

      return callBack(new Error(message));
    }

    callBack(null, true); // Aceita o arquivo, caso seja do tipo suportado
  },
});

export { photoUpload };