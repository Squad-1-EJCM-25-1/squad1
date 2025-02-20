import styled from "styled-components/native";

export const Tela = styled.View`
    background-color: #F2F3F3;
    flex-direction: column;
    padding: 0px 18px;
    gap: 30px;
`

export const ProdutoContainer = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const ImagemContainer = styled.View`
    width: 300px;
    height: 300px;
    align-items: center;
    justify-content: center;
`

export const Imagem = styled.Image`
    width: 300px;
    height: 300px;
`

export const NomeProduto = styled.Text`
    color:  #154962;
    /* font-family: Verdana; */
    font-size: 20px;
    font-weight: 400;
`

export const ContainerInterativo = styled.View`
    width: 100%;
    padding: 0px 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
`

export const Preco = styled.Text`
    color: #154962;
    /* font-family: Poppins; */
    font-size: 28px;
    font-weight: 600;
`