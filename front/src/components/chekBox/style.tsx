import styled from "styled-components/native";

interface CheckBoxProps {
    verificado: boolean,
}

export const CheckBoxContainer = styled.TouchableOpacity`
    width: fit-content;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const CheckBoxEstilizado = styled.View<CheckBoxProps>`
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    border-width: 1.5px;
    border-color: ${({ verificado }) => verificado === true ? '#0271A0' : '#154962'};
`

export const Texto = styled.Text`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #154962;
    text-align: center;
`

export const Imagem = styled.Image`
    width: 100%;
    height: 100%;
`

export const MensagemDeErro = styled.Text`
    align-self: center;
    color: #ff375b;
    margin-top: -36px;
`