import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

// Funções de fetchApi
import { fetchCategorias, fetchBeneficios, fetchProdutos } from '../../utils/fetchApi'

// Funções de Renderização de itens
import { RenderizarItemBeneficios, RenderizarItemCategorias, RenderizarItemProdutos } from '../RenderizarItens/RenderizarItens'

// Tipagem
import { CarouselProps, BeneficioItemProp, ProdutosItemProp, CategoriaItemProp } from '../../types/types'
import { Container, Titulo } from './style'


const Carousel = (Props: CarouselProps) => {
    const [dados, setDados] = useState<any[]>([]);

    useEffect(() => {
        const carregarDados = async () => {
            let funcaoFetch: (url: string) => Promise<any[]>;

            switch (Props.tipo) {
                case "Beneficios":
                    funcaoFetch = fetchBeneficios as (url: string) => Promise<BeneficioItemProp[]>;
                    break;
                case "Produtos":
                    funcaoFetch = fetchProdutos as (url: string) => Promise<ProdutosItemProp[]>;
                    break;
                default:
                    funcaoFetch = fetchCategorias as (url: string) => Promise<CategoriaItemProp[]>;
                    break;
            }

            const dado = await funcaoFetch(Props.urlApi)
            setDados(dado)
        };

        carregarDados()
    }, [])

    return (
        <Container>
            {Props.titulo && <Titulo>{Props.titulo}</Titulo>}
            <FlatList
                data={dados}
                renderItem={
                    Props.tipo === 'Beneficios' ? RenderizarItemBeneficios : Props.tipo === 'Produtos' ? RenderizarItemProdutos : RenderizarItemCategorias
                }
                horizontal
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    gap: Props.espacamentoEntreItens
                }}
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    )
}

export default Carousel