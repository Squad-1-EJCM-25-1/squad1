import styled from "styled-components/native";

export const NenhumElemento = styled.Text`
    width: 100%;
    margin-top: 50px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: #154962;
`
export const Container = styled.View`
    width: 100%;
    height: 83%;
    padding: 17px 24px;
    flex-direction: column;
    gap: 30px;
    background-color: #FFF;
    position: relative;
`
export const VoltarContainer = styled.TouchableOpacity`
    position: relative;
    width: 81px;
    height: 24px;
    justify-content: center;
    padding-top: 10px; 
`
export const VoltarTexto = styled.Text`
    color: #154962;
    width: 100%;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContainerAbsoluto = styled.View`
    width: fit-content;
    position: fixed;
    bottom: 67px;
    left: 13.5%;
    bottom: 15%;
`