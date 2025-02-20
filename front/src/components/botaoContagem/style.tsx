import styled from "styled-components/native";

interface BotaoProps {
    tamanho: number,
    corDeFundo: '#EDA61A' | '#C8D0D4',
    raioDaBorda: number,
    preenchimento: number,
    tamanhoDoIcone: 10 | 24,
    espacamentoInterno: number,
}

export const Container = styled.View`
    width: ${({ tamanho }: BotaoProps) => `${tamanho}px`};
    background-color: ${({ corDeFundo }: BotaoProps) => corDeFundo};
    border-radius: ${({ raioDaBorda }: BotaoProps) => `${raioDaBorda}px`};
    padding: ${({ preenchimento }: BotaoProps) => `${preenchimento}px`};
    gap: ${({ espacamentoInterno }: BotaoProps) => `${espacamentoInterno}px`};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Texto = styled.Text`
    /*font-family: 'Verdana'*/
    font-size: ${({ corDeFundo }: BotaoProps) => corDeFundo === '#EDA61A' ? '9px' : '20px'};
    color: ${({ corDeFundo }: BotaoProps) => corDeFundo === '#EDA61A' ? '#154962' : '#060713'};
    font-weight: 700;
`

export const Icones = styled.Image`
    width: ${({ tamanhoDoIcone }: BotaoProps) => `${tamanhoDoIcone}px`};
    height: ${({ tamanhoDoIcone }: BotaoProps) => `${tamanhoDoIcone}px`};
`