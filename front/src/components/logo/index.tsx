import React from 'react'
import { Container, Imagem } from './style'

const Logo = () => {
    return (
        <Container>
            <Imagem source={require('../../assets/logoClaro.png')} />
        </Container>
    )
}

export default Logo