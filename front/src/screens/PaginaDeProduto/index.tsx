import React, { useEffect, useState } from 'react'
import { ContainerInterativo, Preco, ProdutoContainer, Tela, NomeProduto, ImagemContainer, Imagem } from './style'
import { Image } from 'react-native'
import { formatarPreco } from '../../utils/formatarPreco'
import Botao from '../../components/botões'
import BotaoContagem from '../../components/botaoContagem'
import { adicionarAoCarrinho } from '../../utils/carrinho'
import { ProdutosItemProp } from '../../types/types'
import Carousel from '../../components/Carousel'
import axios from 'axios'
import { useRouter } from 'expo-router'

const PaginaDoProduto = (Produto: ProdutosItemProp) => {

    const navegacao = useRouter()
    const [dados, setDados] = useState<ProdutosItemProp[]>([])
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

    const adicionarElementoAoCarrinho = () => {
        adicionarAoCarrinho(Produto)
        navegacao.push('(tabs)/home/carrinho')
    }

    useEffect(() => {
        axios.get<ProdutosItemProp[]>('https://localhost:3333/produtos').then(response => {
            setDados(response.data)
        }).catch(erro => {
            console.log(erro)
        })
    }, [])

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
                aoApertar={adicionarElementoAoCarrinho}
            />

            <Carousel
                dados={dados}
                tipo='Produtos'
                espacamentoEntreItens={16}
                corDoTitulo='#263238'
                espacamentoEntreTituloEProduto={16}
                pesoDaFonte={400}
                tamanhoDoTitulo={16}
                titulo='Que tal pedir também'
            />
        </Tela>
    )
}

export default PaginaDoProduto