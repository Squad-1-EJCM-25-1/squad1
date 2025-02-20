import React, { useCallback, useEffect, useState } from 'react'
import Logo from '../../components/logo'
import Localizacao from '../../components/localizacao'
import { NenhumElemento, Container, VoltarContainer, VoltarTexto, ContainerAbsoluto } from './style'
import BotaoBolinha from '../../components/botaoBolinha'
import { useRouter } from 'expo-router'
import { obterCarrinho } from '../../utils/carrinho'
import { ProdutosItemProp } from '../../types/types'
import ItensCarrinhoRenderizados from '../../components/ListaItensCarrinhoRedenrizados'
import Botao from '../../components/botões'

const Carrinho = () => {

    const navegar = useRouter()

    const [itensNoCarrinho, setItensNoCarrinho] = useState<ProdutosItemProp[]>([]);

    const navegarParaHome = () => {
        navegar.replace('(tabs)/home')
    }

    useEffect(() => {
        setItensNoCarrinho(obterCarrinho());
    }, []);

    return (
        <>
            <Logo />

            <Localizacao
                botao={false}
                rua='Dionísio'
                numero={72}
                complemento='apto 402'
                navegar={() => { return }}
            />

            <Container>

                <VoltarContainer
                    opacityActive={1}
                    onPress={navegarParaHome}
                >

                    <BotaoBolinha
                        direita={45}
                        topo={0}
                        img={require('../../assets/setaEsquerda.png')}
                        corDeFundo='#D9D9D9'
                        aoPressionar={navegarParaHome}
                    />

                    <VoltarTexto>Voltar</VoltarTexto>

                </VoltarContainer>


                {itensNoCarrinho.length === 0 ?
                    <NenhumElemento>Seu Carrinho está vazio...</NenhumElemento>
                    : <ItensCarrinhoRenderizados data={itensNoCarrinho} />
                }

                {itensNoCarrinho.length > 0 &&
                    <ContainerAbsoluto>
                        <Botao
                            aoApertar={() => { console.log('oi') }}
                            corDeFundo='azulClaro'
                            texto='Finalizar compra'
                        />
                    </ContainerAbsoluto>
                }
            </Container>

        </>
    )
}

export default Carrinho