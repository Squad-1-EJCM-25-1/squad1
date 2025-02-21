import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: fit-content;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-bottom: 30px;
`

export const Imagem = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #154962;
    align-items: center;
    justify-content: center;
`

export const Texto = styled.Text`
    color: #154962;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    /* font-family: Poppins; */
`