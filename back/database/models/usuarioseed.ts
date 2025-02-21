import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


interface User {
  nome: string;
  email: string;
  hash: string;
  salt: string;
  dataRegistro: Date;
  imagemURL?: string; 
}


interface Cliente {
  cpf: string;
  fidelidade: boolean;
  favoritos: string;
  avaliações: string;
  compras: string;
  idCliente: number; 
}


interface Vendedor {
  cnpj: string;
  idVendedor: number; 
  produtos: string;
}

export async function usuarioseed() {
  
  let usuarios: User[] = [];

  
  for (let i = 0; i < 20; i++) {
    usuarios.push({
      nome: faker.person.fullName(),
      email: faker.internet.exampleEmail(),
      hash: faker.internet.password(),
      salt: faker.string.uuid(),
      dataRegistro: faker.date.between({ from: '1925-01-01T00:00:00.000Z', to: '2025-02-21T00:00:00.000Z' }),
      imagemURL: faker.image.avatar(),
    });
  }

  
  const usuariosCriados = await prisma.usuario.createMany({
    data: usuarios,
    skipDuplicates: true, 
  });

 

 
  const idUsuarios = await prisma.usuario.findMany({
    select: { idUsuario: true },
  });

  
  let clientes: Cliente[] = [];
  let vendedores: Vendedor[] = [];

  
  for (let i = 0; i < idUsuarios.length; i++) {
    const usuarioId = idUsuarios[i].idUsuario;

    
    if (faker.datatype.boolean()) { 
      clientes.push({
        cpf: faker.string.numeric(11), 
        fidelidade: faker.datatype.boolean(), 
        favoritos: faker.commerce.productName(), 
        avaliações: faker.lorem.sentence({ min: 3, max: 5 }), 
        compras: faker.commerce.productName(), 
        idCliente: usuarioId, 
      });
    }

    
    if (faker.datatype.boolean()) { 
      vendedores.push({
        cnpj: faker.string.numeric(14), 
        idVendedor: usuarioId, 
        produtos: faker.commerce.productName(), 
      });
    }
  }

 
  if (clientes.length > 0) {
    const clientesCriados = await prisma.cliente.createMany({
      data: clientes,
      skipDuplicates: true,
    });

  }

 
  if (vendedores.length > 0) {
    const vendedoresCriados = await prisma.vendedor.createMany({
      data: vendedores,
      skipDuplicates: true,
    });
  }

}


usuarioseed();
