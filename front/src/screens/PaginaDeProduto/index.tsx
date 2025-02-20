import React, { useState } from 'react'
import { ContainerInterativo, Preco, ProdutoContainer, Tela, NomeProduto, ImagemContainer, Imagem } from './style'
import { Image } from 'react-native'
import { formatarPreco } from '../../utils/formatarPreco'
import Botao from '../../components/botões'
import BotaoContagem from '../../components/botaoContagem'
import { adicionarAoCarrinho } from '../../utils/carrinho'
import { ProdutosItemProp } from '../../types/types'

// const adicionarElementoAoCarrinho = () => {
//     adicionarAoCarrinho(produto)
// }

const PaginaDoProduto = (Produto: ProdutosItemProp) => {

    const [quantidade, setQuantidade] = useState(1)

    const adicionarUnidade = () => {
        if (quantidade < 10) {
            setQuantidade(quantidade + 1)
        }
    }

    const removerUnidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1)
        }
    }

    return (
        <Tela>
            <ProdutoContainer>

                <ImagemContainer>
                    <Imagem source={Produto.img} />
                </ImagemContainer>

                <NomeProduto>{Produto.texto}</NomeProduto>
            </ProdutoContainer>

            <ContainerInterativo>
                <Preco>R$ {formatarPreco(Produto.preco)}</Preco>
                <BotaoContagem
                    corDeFundo='#C8D0D4'
                    espacamentoInterno={20}
                    preenchimento={10}
                    tamanho={187}
                    quantidade={quantidade}
                    raioDaBorda={20}
                    tamanhoDoIcone={24}
                    somar={adicionarUnidade}
                    subtrair={removerUnidade}
                />
            </ContainerInterativo>

            <Botao
                corDeFundo='amarelo'
                texto='Adicionar ao carrinho'
                aoApertar={() => { console.log('oi') }}
            />
        </Tela>
    )
}

export default PaginaDoProduto