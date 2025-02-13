import React from 'react'
import { CheckBoxContainer, CheckBoxEstilizado, Imagem, Texto }
    from './style'

interface CheckBoxProps {
    verificado: boolean,
    texto: string,
    funcaoAoPressionar: () => void,
}

const CheckBox = ({ verificado, texto, funcaoAoPressionar }: CheckBoxProps) => {
    return (
        <CheckBoxContainer
            onPress={funcaoAoPressionar}
            activeOpacity={1}
        >
            <CheckBoxEstilizado verificado={verificado}>
                <Imagem
                    source={verificado ? require('../../assets/checkbox/checkedBox.png') : require('../../assets/checkbox/uncheckedBox.png')}
                />
            </CheckBoxEstilizado>
            <Texto>{texto}</Texto>
        </CheckBoxContainer>
    )
}

export default CheckBox