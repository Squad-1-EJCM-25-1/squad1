import styled from "styled-components/native";

interface BotaoProp {
    direita: number;
    topo: number
}

export const BotaoEstilizado = styled.TouchableOpacity<BotaoProp>`
    width: 24px;
    height: 24px;
    background-color: #99DFEB;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: ${({ direita }) => `${direita}`};
    top: ${({ topo }) => `${topo}`};
`

export const Imagem = styled.Image`
    width: 16px;
    height: 16px;
` 