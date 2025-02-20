import { MMKV } from "react-native-mmkv";
import { ProdutosItemProp } from "../types/types";

const armazenamento = new MMKV()

const CHAVE_CARRINHO = 'itens_carrinho'

export const obterCarrinho = (): ProdutosItemProp[] => {
    const carrinho = armazenamento.getString(CHAVE_CARRINHO)
    return carrinho ? JSON.parse(carrinho) : []
}

export const adicionarAoCarrinho = (produto: ProdutosItemProp) => {
    const carrinho = obterCarrinho()
    let existeNoCarrinho = false
    carrinho.filter((item) => { if (item.id === produto.id) existeNoCarrinho = true })
    if (!existeNoCarrinho) {
        carrinho.push(produto)
        armazenamento.set(CHAVE_CARRINHO, JSON.stringify(carrinho))
    }
}

export const limparCarrinho = () => {
    armazenamento.delete(CHAVE_CARRINHO)
}