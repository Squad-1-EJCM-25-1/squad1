import React from 'react'
import { Container, ImagemEstilizada, InputContainer, InputEstilizado, TextoEstilizado } from './style'

interface InputProps {
    texto?: string,
    textoDePreenchimento: string,
    tipo: "texto" | "email" | "senha"
    srcImg: string,
}

const Input = ({ texto, textoDePreenchimento, tipo, srcImg }: InputProps) => {
    let tipoDoInput: 'default' | 'email-address';
    let inputSeguro = false;

    if (tipo === "texto")
        tipoDoInput = "default"
    else if (tipo === "email")
        tipoDoInput = "email-address"
    else {
        tipoDoInput = "default"
        inputSeguro = true
    }

    return (
        <Container>
            <TextoEstilizado>{texto ? texto : ''}</TextoEstilizado>
            <InputContainer>
                <ImagemEstilizada source={srcImg} />
                <InputEstilizado
                    placeholder={textoDePreenchimento}
                    keyboardType={tipoDoInput}
                    secureTextEntry={inputSeguro}
                />
            </InputContainer>
        </Container>
    )
}

export default Input