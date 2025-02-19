import React from 'react'
import { Container, Imagem, Texto } from './style'
import { CategoriaItemProp } from '../../types/types'
import { Image } from 'react-native'


const ItensCategoria = ({ texto, img }: CategoriaItemProp) => {
    return (
        <Container activeOpacity={0.7}>
            <Imagem>
                <Image source={img} />
            </Imagem>
            <Texto>{texto}</Texto>
        </Container>
    )
}

export default ItensCategoria