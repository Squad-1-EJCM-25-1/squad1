import styled from "styled-components/native";

interface BotaoProps {
    corDeFundo: 'laranja' | 'amarelo' | 'azul' | 'azulClaro',
}

export const BotaoEstilizado = styled.TouchableOpacity`
    width: ${({ corDeFundo }: BotaoProps) => corDeFundo === 'amarelo' ? '100%' : '285px'};
    padding: ${({ corDeFundo }: BotaoProps) => corDeFundo === 'amarelo' ? '10px' : '10px 40px'};
    background-color: ${({ corDeFundo }: BotaoProps) => corDeFundo === 'azul' ? '#053D58' : corDeFundo === 'amarelo' ? '#EDA61A' : corDeFundo === 'laranja' ? '#E97B0C' : '#3E99B4'};

    border-radius: ${({ corDeFundo }: BotaoProps) => corDeFundo === 'amarelo' ? '20px' : '18px'};
`

export const Texto = styled.Text`
    color: ${({ corDeFundo }: BotaoProps) => corDeFundo === 'amarelo' ? '#F2F3F3' : '#E6E8E9'};
    font-size: ${({ corDeFundo }: BotaoProps) => corDeFundo === 'amarelo' ? '20px' : corDeFundo === 'azul' ? '16px' : '24px'};
    font-weight: ${({ corDeFundo }: BotaoProps) => corDeFundo === 'azul' ? '400' : '700'};
    text-align: center;
`