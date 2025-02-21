import { ImageSourcePropType } from "react-native";


interface ProdutosItemProp {
    id: number,
    texto: string,
    img: ImageSourcePropType,
    preco: number,
    categoria:string,
    recomendado:boolean
}

const produtos: ProdutosItemProp[] = [
    {
        id: 1,
        img: require('/images/racoes1'),
        texto: 'Cachorros',
        preco:120,
        categoria:"racao",
        recomendado:false
    }, 
    {
        id: 2,
        img: require('/images/racoes2'),
        texto: 'Cachorros',
        preco:120,
        categoria:"racao",
        recomendado:false
    }, 
    {
        id: 3,
        img: require('/images/racoes3'),
        texto: 'Cachorros',
        preco:120,
        categoria:"racao",
        recomendado:false
    }, 
    {
        id: 4,
        img: require('/images/racoes4'),
        texto: 'Cachorros',
        preco:120,
        categoria:"racao",
        recomendado:false
    }, 

    {
        id: 5,
        img: require('/images/farmacia1'),
        texto: 'Gatos',
        preco:150,
        categoria:"farmacia",
        recomendado:false
    },
    {
        id: 6,
        img: require('/images/farmacia2'),
        texto: 'Gatos',
        preco:199,
        categoria:"farmacia",
        recomendado:false
    },
    {
        id: 7,
        img: require('/images/farmacia3'),
        texto: 'Gatos',
        preco:99,
        categoria:"farmacia",
        recomendado:false
    },
    {
        id: 8,
        img: require('/images/farmacia4'),
        texto: 'Gatos',
        preco:13,
        categoria:"farmacia",
        recomendado:false
    },
    {
        id: 9,
        img: require('/images/brinquedo1'),
        texto: 'Peixes',
        preco:50,
        categoria:"brinquedos",
        recomendado:false
    },  
    {
        id: 10,
        img: require('/images/brinquedo2'),
        texto: 'Peixes',
        preco:14,
        categoria:"brinquedos",
        recomendado:false
    },  
    {
        id: 11,
        img: require('/images/brinquedo3'),
        texto: 'Peixes',
        preco:144,
        categoria:"brinquedos",
        recomendado:false
    },  
    {
        id: 12,
        img: require('/images/rec1'),
        texto: 'Aves',
        preco:155,
        categoria:"recomendado",
        recomendado:false
    },
    {
        id: 13,
        img: require('/images/rec2'),
        texto: 'Aves',
        preco:134,
        categoria:"recomendado",
        recomendado:false
    },
    {
        id: 14,
        img: require('/images/rec3'),
        texto: 'Aves',
        preco:64,
        categoria:"recomendado",
        recomendado:false
    },
    {
        id: 15,
        img: require('/images/rec4'),
        texto: 'Aves',
        preco:99,
        categoria:"recomendado",
        recomendado:false
    },
    {
        id: 12,
        img: require('/images/rec5'),
        texto: 'Aves',
        preco:115,
        categoria:"recomendado",
        recomendado:false
    },
]

export default produtos