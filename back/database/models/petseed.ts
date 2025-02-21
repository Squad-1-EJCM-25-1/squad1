import {faker} from '@faker-js/faker'
import { Prisma, PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

interface Pet {
nome:            String;                  
especie:         String;     
raca:            String;
idade:           String;
peso:            Number;                
deficiencia:     String;
}


export async function petseed() {

let pets: Pet [] = [];

const especies = ["cachorro", "gato", "peixe", "pássaro", "coelho", "hamster"];
const deficiencias = ["auditiva", "motora", "visual", "respiratoria", "genética", "adquiridas"];

for (let i = 0; i < 20; i ++) {
  const especieescolhida = faker.helpers.arrayElement(especies);
  const deficienciaescolhida = faker.helpers.arrayElement(deficiencias);

    pets.push({
    nome: faker.animal.petName (),
    especie: especieescolhida,
    raca: especieescolhida === 'cachorro' ? faker.animal.dog():
    especieescolhida === 'gato' ? faker.animal.cat():
    especieescolhida === 'peixe' ? faker.animal.fish():
    especieescolhida === 'passaro' ? faker.animal.bird():
    especieescolhida === 'coelho' ? faker.animal.rabbit():
    faker.animal.rodent(),
    idade: faker.date.birthdate({ mode: 'age', min: 0, max: 13 }).toString(),
    peso: faker.number.float({ multipleOf: 0.1, min: 0.1, max:100 }),
   deficiencia: deficienciaescolhida,

    })
}



await prisma.pet.createMany ({pets});
}
