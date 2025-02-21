import { PrismaClient } from "@prisma/client";
import {usuarioseed} from "./models/usuarioseed"
const prisma = new PrismaClient()

async function main () {

    await usuarioseed()
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
        
    })
