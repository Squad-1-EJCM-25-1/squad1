export interface CategoriaItemProp {
    id: number,
    texto: string,
    img: string
}

export interface BeneficioItemProp {
    id: number,
    texto: string,
    img: string
}

export interface ProdutosItemProp {
    id: number,
    texto: string,
    img: string,
    preco: number
}

export interface CarouselProps {
    tipo: 'Produtos' | 'Beneficios' | 'CategoriasDeAnimais'
    espacamentoEntreItens: number,
    titulo?: string,
    tamanhoDoTitulo?: number,
    espacamentoEntreTituloEProduto?: number,
    pesoDaFonte?: number,
    urlApi: string
}

export interface LocalizacaoProps {
    rua: string,
    numero: number,
    complemento: string,
} 