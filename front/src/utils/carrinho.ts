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

    const existeNoCarrinho = carrinho.some(item => item.id === produto.id);

    if (!existeNoCarrinho) {
        carrinho.push(produto)
        armazenamento.set(CHAVE_CARRINHO, JSON.stringify(carrinho))
    }
}

export const RemoverItemDoCarrinho = (produto: ProdutosItemProp) => {
    const carrinho = obterCarrinho()
    const novoCarrinho = carrinho.filter(item => produto.id !== item.id)
    armazenamento.set(CHAVE_CARRINHO, JSON.stringify(novoCarrinho))
}

export const limparCarrinho = () => {
    armazenamento.delete(CHAVE_CARRINHO)
}