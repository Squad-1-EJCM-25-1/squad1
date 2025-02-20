import { ImageSourcePropType } from "react-native"

export interface CategoriaItemProp {
    id: number,
    texto: string,
    img: ImageSourcePropType
}

export interface BeneficioItemProp {
    id: number,
    img: ImageSourcePropType,
    texto: string
}

export interface ProdutosItemProp {
    id: number,
    texto: string,
    img: ImageSourcePropType,
    preco: number
}

export interface CarouselProps {
    tipo: 'Produtos' | 'Beneficios' | 'CategoriasDeAnimais'
    espacamentoEntreItens: number,
    titulo?: string,
    tamanhoDoTitulo?: number,
    espacamentoEntreTituloEProduto?: number,
    pesoDaFonte?: number,
    dados: any[],
    corDoTitulo?: string
}

export interface LocalizacaoProps {
    rua: string,
    numero: number,
    complemento: string,
    botao: boolean,
    navegar: () => void
}