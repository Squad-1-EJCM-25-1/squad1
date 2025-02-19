import React from 'react'
import { LocalizacaoProps } from '../../types/types'
import { Icone, TextoContainer, Texto, Container } from './style'
import BotaoBolinha from '../botaoBolinha'

const Localizacao = ({ rua, numero, complemento, botao, navegar }: LocalizacaoProps) => {


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