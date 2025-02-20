import React from 'react'
import { ContainerPreco, Imagem, Informacoes, Moeda, NomeDoProduto, Valor } from './style'
import { ProdutosItemProp } from '../../types/types'
import BotaoBolinha from '../botaoBolinha'
import { formatarPreco } from '../../utils/formatarPreco'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { adicionarAoCarrinho } from '../../utils/carrinho'
import { useRouter } from 'expo-router'

const ItensProdutos = ({ texto, img, preco, id }: ProdutosItemProp) => {

    const produto: ProdutosItemProp = {
        id: id,
        img: img,
        texto: texto,
        preco: preco
    }

    const adicionarProdutoAoCarrinho = () => {
        adicionarAoCarrinho(produto)
        navegar.push('(tabs)/home/carrinho')
    }

    const navegar = useRouter()

    const navegarParaPaginaDoProduto = () => {
        navegar.push(`(tabs)/home/${id}`)
    }

    return (
        <TouchableOpacity style={styles.Container} onPress={navegarParaPaginaDoProduto}>
            <Imagem source={img} />
            <Informacoes>
                <NomeDoProduto numberOfLines={1} ellipsizeMode="tail">
                    {texto}
                </NomeDoProduto>
                <ContainerPreco>
                    <Moeda>R$</Moeda>
                    <Valor>{formatarPreco(preco)}</Valor>
                    <BotaoBolinha
                        direita={3}
                        topo={-16}
                        img={require('../../assets/botaoBolinha/cruz.png')}
                        aoPressionar={adicionarProdutoAoCarrinho}
                    />
                </ContainerPreco>
            </Informacoes>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Container: {
        padding: 10,
        flexDirection: 'column',
        gap: 16,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
})


export default ItensProdutos