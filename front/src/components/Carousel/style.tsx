import styled from "styled-components/native";

interface Estilizacao {
    tamanhoDoTitulo: number,
    espacamentoEntreTituloEProduto: number;
    pesoDaFonte: number;
    corDoTitulo: '#154962' | '#263238'
}

export const Container = styled.View`
    width: 100%;
    padding: 0px 20px;
    flex-direction: column;
    gap: ${({ espacamentoEntreTituloEProduto }: Estilizacao) => `${espacamentoEntreTituloEProduto}px`};
`

export const Titulo = styled.Text`
    /* font-family: Verdana; */
    width: fit-content;
    font-size: ${({ tamanhoDoTitulo }: Estilizacao) => `${tamanhoDoTitulo}px`};
    font-style: normal;
    font-weight: ${({ pesoDaFonte }: Estilizacao) => `${pesoDaFonte}`};
    color: ${({ corDoTitulo }: Estilizacao) => corDoTitulo ? corDoTitulo : '#154962'};
    border-bottom-width: 2px;
    border-bottom-color: #154962;
`