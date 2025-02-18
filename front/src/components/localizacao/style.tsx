import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 14px 10px 18px 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    background-color: #154962;
    margin-top: -1px;
`
export const Icone = styled.Image`
    width: 30px;
    height: 30px;
`
export const TextoContainer = styled.View`
    max-width: 224px;
    flex-direction: column;
`
export const Texto = styled.Text`
    color:  #F2F3F3;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`