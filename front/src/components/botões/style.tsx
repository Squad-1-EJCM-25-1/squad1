import styled from "styled-components/native";

interface BotaoProps {
    corDeFundo: 'laranja' | 'amarelo' | 'azul',
}

export const BotaoEstilizado = styled.TouchableOpacity<BotaoProps>`
    width: ${({ corDeFundo }) => corDeFundo === 'amarelo' ? '100%' : '285px'};
    padding: ${({ corDeFundo }) => corDeFundo === 'amarelo' ? '10px' : '10px 40px'};
    background-color: ${({ corDeFundo }) => corDeFundo === 'azul' ? '#053D58' : corDeFundo === 'amarelo' ? '#EDA61A' : '#E97B0C'};

    border-radius: ${({ corDeFundo }) => corDeFundo === 'amarelo' ? '20px' : '18px'};
`

export const Texto = styled.Text<BotaoProps>`
    color: ${({ corDeFundo }) => corDeFundo === 'amarelo' ? '#F2F3F3' : '#E6E8E9'};
    font-size: ${({ corDeFundo }) => corDeFundo === 'amarelo' ? '20px' : corDeFundo === 'laranja' ? '24px' : '16px'};
    font-weight: ${({ corDeFundo }) => corDeFundo === 'azul' ? '400' : '700'};
    text-align: center;
`