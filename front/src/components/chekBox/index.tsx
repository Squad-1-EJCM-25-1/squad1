import React from 'react'
import { CheckBoxContainer, CheckBoxEstilizado, Imagem, MensagemDeErro, Texto }
    from './style'
import { Controller } from 'react-hook-form'

interface CheckBoxProps {
    texto: string,
    control: any,
    name: string,
    error?: string,
}

const CheckBox = ({ texto, control, name, error }: CheckBoxProps) => {
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value = false } }) => (
                    < CheckBoxContainer
                        onPress={() => onChange(!value)}
                        activeOpacity={1}
                    >
                        <CheckBoxEstilizado verificado={value}>
                            <Imagem
                                source={value ? require('../../assets/checkbox/checkedBox.png') : require('../../assets/checkbox/uncheckedBox.png')}
                            />
                        </CheckBoxEstilizado>
                        <Texto>{texto}</Texto>
                    </CheckBoxContainer >
                )}
            />
            {error && <MensagemDeErro>{error}</MensagemDeErro>}
        </>
    )
}

export default CheckBox