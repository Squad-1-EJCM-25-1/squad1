import React from 'react'
import { Container, Imagem, Texto } from './style'
import { CategoriaItemProp } from '../../types/types'

// se der erro com o require, deve ser url

const ItensCategoria = ({ texto, img }: CategoriaItemProp) => {
    return (
        <Container activeOpacity={0.7}>
            <Imagem source={require(img)} />
            <Texto>{texto}</Texto>
        </Container>
    )
}

export default ItensCategoria