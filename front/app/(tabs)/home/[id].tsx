import PaginaDoProduto from "../../../src/screens/PaginaDeProduto";
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import produtos from "../../../src/data/produtos";

import { ImageSourcePropType } from "react-native";


const getImage = (img: ImageSourcePropType | undefined): ImageSourcePropType => {
    if (!img) return require("../../../src/assets/patasCaninas.png");

    return img;
};

interface Produto {
    id: number,
    texto: string,
    img: ImageSourcePropType,
    preco: number,
}

const PaginaProduto = () => {
    const { id } = useLocalSearchParams();
    const produtoId = Number(id);

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        texto: "Descrição não disponível",
        img: getImage(undefined),
        preco: 0,
    });

    useEffect(() => {
        const produtoEncontrado = produtos.find(item => item.id === produtoId);

        if (produtoEncontrado) {
            // Atualizando o estado com os dados encontrados
            const produtoASerRenderizado: Produto = {
                texto: produtoEncontrado.texto ?? "Descrição não disponível",
                id: produtoEncontrado.id ?? 0,
                img: getImage(produtoEncontrado.img), // Passando a imagem correta
                preco: produtoEncontrado.preco ?? 0,
            };

            setProduto(produtoASerRenderizado);
        }
    }, [produtoId]);

    return (
        <PaginaDoProduto
            id={produto.id}
            img={produto.img} // Passando a imagem corretamente
            preco={produto.preco}
            texto={produto.texto}
        />
    );
}

export default PaginaProduto;
