import React from 'react'
import { BotaoEstilizado, Texto } from './style'

interface BotaoProps {
    corDeFundo: 'amarelo' | 'laranja' | 'azul',
    texto: string,
    aoApertar: () => void,
}

const Botao = ({ corDeFundo, texto, aoApertar }: BotaoProps) => {
    return (
        <BotaoEstilizado
            corDeFundo={corDeFundo}
            activeOpacity={0.7}
            onPress={aoApertar}
        >
            <Texto corDeFundo={corDeFundo}>
                {texto}
            </Texto>
        </BotaoEstilizado>
    )
}

export default Botao