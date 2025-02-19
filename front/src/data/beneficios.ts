import { BeneficioItemProp } from "../types/types";

const BeneficioDB: BeneficioItemProp[] = [
    {
        id: 1,
        img: require('../assets/beneficios/caminhao.png'),
        texto: 'Frete grátis'
    },
    {
        id: 2,
        img: require('../assets/beneficios/cupom.png'),
        texto: 'Cupons'
    },
    {
        id: 3,
        img: require('../assets/beneficios/cashback.png'),
        texto: 'Cashback'
    },
    {
        id: 4,
        img: require('../assets/beneficios/premio.png'),
        texto: 'Prêmios'
    }
]

export default BeneficioDB