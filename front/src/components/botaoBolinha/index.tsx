import React from 'react'
import { BotaoEstilizado, Imagem } from './style'

interface BotaoBolinhaProp {
    img: string,
    direita: number,
    topo: number,
    aoPressionar: () => void,
    corDeFundo?: string
}

const BotaoBolinha = ({ img, direita, topo, aoPressionar, corDeFundo }: BotaoBolinhaProp) => {
    return (
        <BotaoEstilizado
            activeOpacity={0.7}
            direita={direita}
            topo={topo}
            onPress={aoPressionar}
            corDeFundo={corDeFundo}
        >
            <Imagem source={img} />
        </BotaoEstilizado>
    )
}

export default BotaoBolinha