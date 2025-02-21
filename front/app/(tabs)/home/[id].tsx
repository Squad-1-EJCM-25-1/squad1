import PaginaDoProduto from "../../../src/screens/PaginaDeProduto"
import { useLocalSearchParams } from 'expo-router'
import axios from "axios"
import { useEffect, useState } from "react"

const getImage = (img: string | undefined) => {
    if (!img) return require("../../../src/assets/patasCaninas.png");
    return { uri: img };
};

interface Produto {
    id?: number,
    nome?: string,
    img?: string,
    preco?: number,
    recomendado: boolean,
    categoria: string,
}

const PaginaProduto = () => {

    const { id } = useLocalSearchParams()
    const url = `https://localhost/produto/${id}`

    const [produto, setProduto] = useState<Produto | null>(null)
    useEffect(() => {
        if (!id) return;

        axios.get(url).then(response => {
            setProduto(response.data)
        }).catch((erro) => {
            console.log(erro)
        })
    }, [id])

    return (
        <PaginaDoProduto
            id={produto?.id ?? 0}
            img={getImage(produto?.img)}
            preco={produto?.preco ?? 0}
            texto={produto?.nome ?? "Descrição não disponível"}
        />
    )
}

export default PaginaProduto