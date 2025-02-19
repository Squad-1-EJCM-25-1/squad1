import { CategoriaItemProp, BeneficioItemProp, ProdutosItemProp, CarrinhoItemProps } from "../../types/types"
import ItensBeneficio from "../itensBeneficio"
import ItensCarrinho from "../itensCarrinho"
import ItensCategoria from "../itensCategorias"
import ItensProdutos from "../itensProdutos"


export const RenderizarItemCategorias = ({ item }: { item: CategoriaItemProp }) => {
    return (
        <ItensCategoria
            id={item.id}
            texto={item.texto}
            img={item.img}
        />
    )
}

export const RenderizarItemBeneficios = ({ item }: { item: BeneficioItemProp }) => {
    return (
        <ItensBeneficio
            id={item.id}
            img={item.img}
            texto={item.texto}
        />
    )
}

export const RenderizarItemProdutos = ({ item }: { item: ProdutosItemProp }) => {
    return (
        <ItensProdutos
            id={item.id}
            preco={item.preco}
            img={item.img}
            texto={item.texto}
        />
    )
}

export const RenderizarItemCarrinho = ({ item }: { item: CarrinhoItemProps }) => {
    return (
        <ItensCarrinho
            id={item.id}
            img={item.img}
            preco={item.preco}
            texto={item.texto}
        />
    )
}