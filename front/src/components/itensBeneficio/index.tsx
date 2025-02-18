import React from 'react'
import { BeneficioItemProp } from '../../types/types'
import { Container, Imagem, Texto } from './style'

const ItensBeneficio = ({ texto, img }: BeneficioItemProp) => {
    return (
        <Container activeOpacity={0.7}>
            <Imagem source={require(img)} />
            <Texto tamanhoDoTexto={texto.length}>{texto}</Texto>
        </Container>
    )
}

export default ItensBeneficio