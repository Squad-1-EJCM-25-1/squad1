import React from 'react'
import { Container, ImagemEstilizada, InputContainer, TextoEstilizado, MensagemDeErro, InputEstilizado } from './style'
import { formatadorDeCPF } from '../../utils/validadorDeCPF';
import { Controller } from 'react-hook-form';

interface InputProps {
    texto?: string,
    textoDePreenchimento: string,
    srcImg: string,
    inputSeguro: boolean,
    control: any,
    error?: string,
    name: string,
    mascara?: string,
    tipo?: 'cpf',
}

const Input = (Props: InputProps) => {

    return (
        <>
            <Controller
                control={Props.control}
                name={Props.name}
                render={({ field: { onChange, value = "" } }) => (
                    <Container>
                        <TextoEstilizado>
                            {Props.texto ? Props.texto : ''}
                        </TextoEstilizado>
                        <InputContainer>
                            <ImagemEstilizada source={Props.srcImg} />
                            <InputEstilizado
                                placeholder={Props.textoDePreenchimento}
                                secureTextEntry={Props.inputSeguro}
                                value={value}
                                onChangeText={Props.tipo ? (text: string) => onChange(formatadorDeCPF(text)) : onChange}
                                mask={Props.mascara || undefined}
                            />
                        </InputContainer>
                    </Container>
                )}
            />
            {Props.error && <MensagemDeErro>{Props.error}</MensagemDeErro>}
        </>
    )
}

export default Input