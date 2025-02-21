import { FlatList } from 'react-native'
import { RenderizarItemCarrinho } from '../RenderizarItens/RenderizarItens'
import { ProdutosItemProp } from '../../types/types'

interface ItensCarrinhoRenderizadosProps {
    data: ProdutosItemProp[]
}

const ItensCarrinhoRenderizados = ({ data }: ItensCarrinhoRenderizadosProps) => {
    return (
        <FlatList
            data={data}
            renderItem={RenderizarItemCarrinho}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
                gap: 20
            }}
        />
    )
}

export default ItensCarrinhoRenderizados