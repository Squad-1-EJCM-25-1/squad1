import styled from "styled-components/native";

interface TextoProp {
    tamanhoDoTexto: number;
}

export const Container = styled.TouchableOpacity`
    width: 120px;
    height: 120px;
    padding: 6.5px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border-radius: 20px;
    background-color: #EDA61A;
`

export const Imagem = styled.Image`
    width: 24px;
    height: 24px;
`

export const Texto = styled.Text`
    color: #154962;
    /* font-family: Verdana; */
    font-size: ${({ tamanhoDoTexto }: TextoProp) => tamanhoDoTexto > 8 ? '16px' : '20px'};
    font-style: normal;
    font-weight: 700;
`