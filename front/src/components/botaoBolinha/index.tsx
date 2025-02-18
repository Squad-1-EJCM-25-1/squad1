import React from 'react'
import { BotaoEstilizado, Imagem } from './style'

interface BotaoBolinhaProp {
    img: string,
    direita: number,
    topo: number
}

const BotaoBolinha = ({ img, direita, topo }: BotaoBolinhaProp) => {
    return (
        <BotaoEstilizado
            activeOpacity={0.7}
            direita={direita}
            topo={topo}
        >
            <Imagem source={img} />
        </BotaoEstilizado>
    )
}

export default BotaoBolinha