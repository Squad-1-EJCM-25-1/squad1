import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 20px 15px 15px 10px;
    border-radius: 18px;
    background: #F2F3F3;
`
export const Imagem = styled.Image`
    width: 106px;
    height: 117px;
    background-color: #FFF;
    border-radius: 18px;
`

export const ContainerInformacoes = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`

export const DescricaoContainer = styled.View`
    width: 200px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 7px;
`

export const DescricaoTexto = styled.Text`
    color: #000;

    /* font-family: Verdana; */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Coracao = styled.Image`
    width: 20px;
    height: 18px;
`

export const InterativoContainer = styled.View`
    width: 200px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Preco = styled.Text`
    color: #154962;
    /* font-family: Verdana; */
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`