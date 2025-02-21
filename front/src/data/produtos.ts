import { ImageSourcePropType } from "react-native"

interface ProdutosItemProp {
    id: number,
    texto: string,
    img: ImageSourcePropType,
    preco: number,
    categoria: string,
    recomendado: boolean
}

const produtos: ProdutosItemProp[] = [
    {
        id: 1,
        img: require('./images/racoes1.png'),
        texto: 'Cachorros',
        preco: 120,
        categoria: "racao",
        recomendado: false
    },
    {
        id: 2,
        img: require('./images/racoes2.png'),
        texto: 'Cachorros',
        preco: 120,
        categoria: "racao",
        recomendado: false
    },
    {
        id: 3,
        img: require('./images/racoes3.png'),
        texto: 'Cachorros',
        preco: 120,
        categoria: "racao",
        recomendado: false
    },
    {
        id: 4,
        img: require('./images/racoes4.png'),
        texto: 'Cachorros',
        preco: 120,
        categoria: "racao",
        recomendado: false
    },

    {
        id: 5,
        img: require('./images/farmacia1.png'),
        texto: 'Gatos',
        preco: 150,
        categoria: "farmacia",
        recomendado: false
    },
    {
        id: 6,
        img: require('./images/farmacia2.png'),
        texto: 'Gatos',
        preco: 199,
        categoria: "farmacia",
        recomendado: false
    },
    {
        id: 7,
        img: require('./images/farmacia3.png'),
        texto: 'Gatos',
        preco: 99,
        categoria: "farmacia",
        recomendado: false
    },
    {
        id: 8,
        img: require('./images/farmacia4.png'),
        texto: 'Gatos',
        preco: 13,
        categoria: "farmacia",
        recomendado: false
    },
    {
        id: 9,
        img: require('./images/brinquedo1.png'),
        texto: 'Peixes',
        preco: 50,
        categoria: "brinquedos",
        recomendado: false
    },
    {
        id: 10,
        img: require('./images/brinquedo2.png'),
        texto: 'Peixes',
        preco: 14,
        categoria: "brinquedos",
        recomendado: false
    },
    {
        id: 11,
        img: require('./images/brinquedo3.png'),
        texto: 'Peixes',
        preco: 144,
        categoria: "brinquedos",
        recomendado: false
    },
    {
        id: 12,
        img: require('./images/rec1.png'),
        texto: 'Aves',
        preco: 155,
        categoria: "farmacia",
        recomendado: true
    },
    {
        id: 13,
        img: require('./images/rec2.png'),
        texto: 'Aves',
        preco: 134,
        categoria: "brinquedo",
        recomendado: true
    },
    {
        id: 14,
        img: require('./images/rec3.png'),
        texto: 'Aves',
        preco: 64,
        categoria: "racao",
        recomendado: true
    },
    {
        id: 15,
        img: require('./images/rec4.png'),
        texto: 'Aves',
        preco: 99,
        categoria: "farmacia",
        recomendado: true
    },
    {
        id: 16,
        img: require('./images/rec5.png'),
        texto: 'Aves',
        preco: 115,
        categoria: "brinquedo",
        recomendado: true
    },
]

export default produtos