import styled from "styled-components/native";

interface Estilizacao {
    tamanhoDoTitulo: number,
    espacamentoEntreTituloEProduto: number;
    pesoDaFonte: number;
}

export const Container = styled.View<Estilizacao>`
    flex-direction: column;
    gap: ${({ espacamentoEntreTituloEProduto }) => `${espacamentoEntreTituloEProduto}px`};
`

export const Titulo = styled.Text<Estilizacao>`
    //font-family: Verdana;
    width: fit-content;
    font-size: ${({ tamanhoDoTitulo }) => `${tamanhoDoTitulo}px`};
    font-style: normal;
    font-weight: ${({ pesoDaFonte }) => `${pesoDaFonte}px`};
    color: #154962;
    border-bottom-width: 2px;
    border-bottom-color: #154962;
`