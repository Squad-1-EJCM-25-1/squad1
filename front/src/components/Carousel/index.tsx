import { FlatList } from 'react-native'

// Funções de Renderização de itens
import { RenderizarItemBeneficios, RenderizarItemCategorias, RenderizarItemProdutos } from '../RenderizarItens/RenderizarItens'

// Tipagem
import { CarouselProps } from '../../types/types'
import { Container, Titulo } from './style'


const Carousel = (Props: CarouselProps) => {

    return (
        <Container
            tamanhoDoTitulo={Props.tamanhoDoTitulo}
            espacamentoEntreTituloEProduto={Props.espacamentoEntreTituloEProduto}
            pesoDaFonte={Props.pesoDaFonte}
        >
            {Props.titulo &&
                <Titulo
                    tamanhoDoTitulo={Props.tamanhoDoTitulo}
                    pesoDaFonte={Props.pesoDaFonte}
                    corDoTitulo={Props.corDoTitulo}
                >{Props.titulo}</Titulo>
            }
            {Props.tipo === 'Beneficios' ?
                <FlatList
                    data={Props.dados}
                    renderItem={RenderizarItemBeneficios}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{
                        gap: Props.espacamentoEntreItens
                    }}
                    showsHorizontalScrollIndicator={false}
                />
                : Props.tipo === 'CategoriasDeAnimais' ?
                    <FlatList
                        data={Props.dados}
                        renderItem={RenderizarItemCategorias}
                        horizontal
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{
                            gap: Props.espacamentoEntreItens
                        }}
                        showsHorizontalScrollIndicator={false}
                    />
                    :
                    <FlatList
                        data={Props.dados}
                        renderItem={RenderizarItemProdutos}
                        horizontal
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{
                            gap: Props.espacamentoEntreItens
                        }}
                        showsHorizontalScrollIndicator={false}
                    />
            }

        </Container>
    )
}

export default Carousel