import { Categoria, PrismaClient } from '@prisma/client';
import { faker }  from "@faker-js/faker";
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

interface Produto{
    idProduto:     number;     
    nome:          string;    
    descricao:     string;     
    preco:         string;
    categoria:     Categoria;
    quantidade:    number;
    imagemURL:     string;
    idVendedor:    number;
}

function pegaImagemAleatoria() {
    const pastaUploads = path.join(__dirname, '../../uploads/photos/produtosImagens');

    // Lê os arquivos na pasta uploads/photos/produtosImagens
    const files = fs.readdirSync(pastaUploads);

    // Seleciona um arquivo aleatório
    const arquivoAleatorio = files[Math.floor(Math.random() * files.length)];

    return path.join('uploads/photos/produtosImagens',  arquivoAleatorio);
}

const categoria: Categoria[] = ["Cachorro", "Gato", "Pássaro","Peixe", "Réptil", "Alimento", "Acessório", "Outro"];

function pegaCategoriaAleatoria(arr:Categoria[]) {
    const indiceAleatorio = Math.floor(Math.random() * arr.length);
    return arr[indiceAleatorio];
}

export async function produtoSeed(){
        const vendedores = await prisma.vendedor.findMany({
            select: { idVendedor: true }
        });
      
        if (vendedores.length === 0) {
          throw new Error('Nenhum vendedor encontrado. Execute a seed de usuário primeiro.');
        }
    
    let produto: Produto[] = [];

    
    for (let i = 0; i < 20; i++){
        produto.push({
        idProduto: i,   
        nome:      faker.commerce.productName(),               
        descricao: "Esse produto é muito bom.",
        preco:     faker.commerce.price({ min: 100, max: 200 }), 
        categoria: pegaCategoriaAleatoria(categoria),
        quantidade: 7,
        imagemURL: pegaImagemAleatoria(),
        idVendedor: vendedores[Math.floor(Math.random() * vendedores.length)].idVendedor,
        });
    }

    await prisma.produto.createMany({ data: produto });
}  

produtoSeed()
