import styled from "styled-components/native";

interface BotaoProp {
    direita: number;
    topo: number,
    corDeFundo: string
}

export const BotaoEstilizado = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    background-color: ${({ corDeFundo }: BotaoProp) => corDeFundo ? corDeFundo : '#99DFEB'};
    align-items: center;
    justify-content: center;
    position: absolute;
    right: ${({ direita }: BotaoProp) => `${direita}px`};
    top: ${({ topo }: BotaoProp) => `${topo}px`};
    border-radius: 50%;
`

export const Imagem = styled.Image`
    width: 24px;
    height: 24px;
` 