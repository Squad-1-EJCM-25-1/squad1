import React from 'react'
import { LocalizacaoProps } from '../../types/types'
import { Icone, TextoContainer, Texto, Container } from './style'

const Localizacao = ({ rua, numero, complemento }: LocalizacaoProps) => {
    return (
        <Container activeOpacity={0.85}>
            <Icone source={require('../../assets/localizacao.png')} />

            <TextoContainer>
                <Texto>Receber em</Texto>
                <Texto>{`rua ${rua}, ${numero}- ${complemento}`}</Texto>
            </TextoContainer>

            <Icone source={require('../../assets/seta.png')} />
        </Container>
    )
}

export default Localizacao