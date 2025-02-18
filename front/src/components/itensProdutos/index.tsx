import React from 'react'
import { ContainerPreco, Imagem, Informacoes, Moeda, NomeDoProduto, Valor } from './style'
import { ProdutosItemProp } from '../../types/types'
import BotaoBolinha from '../botaoBolinha'
import { formatarPreco } from '../../utils/formatarPreco'
import { StyleSheet, TouchableOpacity } from 'react-native'

const ItensProdutos = ({ texto, img, preco }: ProdutosItemProp) => {
    return (
        <TouchableOpacity style={styles.Container}>
            <Imagem source={require(img)} />
            <Informacoes>
                <NomeDoProduto numberOfLines={1} ellipsizeMode="tail">
                    {texto}
                </NomeDoProduto>
                <ContainerPreco>
                    <Moeda>R$</Moeda>
                    <Valor>{formatarPreco(preco)}</Valor>
                    <BotaoBolinha
                        direita={0}
                        topo={12.5}
                        img={require('../../assets/botaoBolinha/cruz.png')}
                    // falta onPress
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