import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: column;
    gap: 8px;
`
export const InputContainer = styled.View`
    gap: 10px;
    flex-direction: row;
    padding: 10px 0px;
    align-items: center;

    margin: 0px 10px 10px 10px;
    border-bottom-width: 1.5px;
    border-bottom-color: rgba(5, 61, 88, 0.80);
`

export const InputEstilizado = styled.TextInput`
    width: 100%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(6, 7, 19, 0.40);
    outline-style: none;
`

export const ImagemEstilizada = styled.Image`
    width: 24px;
    height: 24px;
`

export const TextoEstilizado = styled.Text`
    width: fit-content;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #154962;
    border-bottom-width: 2px;
    border-bottom-color: #154962;
`