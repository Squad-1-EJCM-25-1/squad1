import styled from "styled-components/native";

export const Imagem = styled.Image`
    width: 112px;
    height: 88px;
    border-radius: 20px;
    object-fit: cover;
`

export const Informacoes = styled.View`
    width: 100%;
    height: 49px;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
`

export const NomeDoProduto = styled.Text`
    width: 100%;
    height: 24px;
    overflow: dot;
    color: #154962;
    //font-family: Verdana;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContainerPreco = styled.View`
    flex-direction: row;
    gap: 4px;
`

export const Moeda = styled.Text`
    color: #154962;
    //font-family: Verdana;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Valor = styled.Text`
    color: #154962;
    //font-family: Verdana;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`