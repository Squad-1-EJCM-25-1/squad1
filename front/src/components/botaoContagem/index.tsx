import { TouchableOpacity } from "react-native"
import { Container, Icones, Texto } from "./style"

interface BotaoContagemProps {
    tamanho: number,
    corDeFundo: '#EDA61A' | '#C8D0D4',
    raioDaBorda: number,
    preenchimento: number,
    tamanhoDoIcone: number,
    espacamentoInterno: number,
    quantidade: number,
    subtrair: () => void,
    somar: () => void,
}

const BotaoContagem = (Props: BotaoContagemProps) => {
    return (
        <Container
            tamanho={Props.tamanho}
            corDeFundo={Props.corDeFundo}
            raioDaBorda={Props.raioDaBorda}
            preenchimento={Props.preenchimento}
            espacamentoInterno={Props.espacamentoInterno}
        >
            <TouchableOpacity onPress={Props.subtrair} activeOpacity={1}>
                <Icones
                    source={require('../../assets/botaoContagem/menos.png')}
                    tamanhoDoIcone={Props.tamanhoDoIcone}
                />
            </TouchableOpacity>

            <Texto CorDeFundo={Props.corDeFundo}>{Props.quantidade}</Texto>

            <TouchableOpacity onPress={Props.somar} activeOpacity={1}>
                <Icones
                    source={require('../../assets/botaoContagem/mais.png')}
                    tamanhoDoIcone={Props.tamanhoDoIcone}
                />
            </TouchableOpacity>
        </Container>
    )
}

export default BotaoContagem