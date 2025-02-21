import { PrismaClient } from '@prisma/client';
import { produtoSeed } from "./models/produtoSeed";
import {usuarioseed} from "./models/usuarioseed";
import {petseed} from "./models/petseed";

const prisma = new PrismaClient();

async function main() {
   await produtoSeed();
   await petseed();
   await usuarioseed();
  console.log('Seed completa');
}

main()
    .then(async () =>{
        await prisma.$disconnect();
    })

    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
  })
