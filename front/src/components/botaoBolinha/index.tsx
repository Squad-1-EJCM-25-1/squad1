import React from 'react'
import { BotaoEstilizado, Imagem } from './style'

interface BotaoBolinhaProp {
    img: string,
    direita: number,
    topo: number,
    aoPressionar: () => void
}

const BotaoBolinha = ({ img, direita, topo, aoPressionar }: BotaoBolinhaProp) => {
    return (
        <BotaoEstilizado
            activeOpacity={0.7}
            direita={direita}
            topo={topo}
            onPress={aoPressionar}
        >
            <Imagem source={img} />
        </BotaoEstilizado>
    )
}

export default BotaoBolinha