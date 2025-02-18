import React from 'react'
import { LocalizacaoProps } from '../../types/types'
import { Icone, TextoContainer, Texto, Container } from './style'
import BotaoBolinha from '../botaoBolinha'
import { useRouter } from 'expo-router'

const Localizacao = ({ rua, numero, complemento, botao }: LocalizacaoProps) => {

    const navegacao = useRouter()

    const navegar = () => {
        navegacao.push('carrinho')
    }

    return (
        <Container activeOpacity={0.80}>
            <Icone source={require('../../assets/localizacao.png')} />

            <TextoContainer>
                <Texto>Receber em</Texto>
                <Texto>{`rua ${rua}, ${numero}- ${complemento}`}</Texto>
            </TextoContainer>

            <Icone source={require('../../assets/seta.png')} />
            {botao && <BotaoBolinha direita={10} topo={-10} img={require('../../assets/carrinho.png')} aoPressionar={navegar} />}
        </Container>
    )
}

export default Localizacao