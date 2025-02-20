import PaginaDoProduto from "../../../src/screens/PaginaDeProduto"
import { useLocalSearchParams } from 'expo-router'

const teste = () => {

    const { id } = useLocalSearchParams()
    const url = `https//localhost/${id}`

    return (
        <PaginaDoProduto
            id={1}
            img={require('')}
            preco={2}
            texto={'quase la'}
        />
    )
}

export default teste