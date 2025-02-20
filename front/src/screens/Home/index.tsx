import { Container } from "./style"
import Localizacao from "../../components/localizacao"
import Logo from "../../components/logo"
import Carousel from "../../components/Carousel"
import BeneficioDB from "../../data/beneficios"
import CategoriaDB from "../../data/categoriasDeAnimais"
import { useRouter } from "expo-router"
import { ProdutosItemProp } from "../../types/types"

const teste: ProdutosItemProp[] = [
    {
        id: 1,
        img: require('../../assets/cachorroTeste.png'),
        preco: 100,
        texto: 'Roupinha de cachorro'
    }
]


const Home = () => {

    const navegacao = useRouter()

    const navegarParaCarrinho = () => {
        navegacao.push('(tabs)/home/carrinho')
    }

    return (
        <>
            <Logo />
            <Localizacao
                rua="Diogene"
                numero={72}
                complemento="apt 402"
                botao={true}
                navegar={navegarParaCarrinho}
            />
            <Container>
                <Carousel
                    espacamentoEntreItens={20}
                    tipo="CategoriasDeAnimais"
                    dados={CategoriaDB}
                />

                <Carousel
                    espacamentoEntreItens={25}
                    titulo="Meus benefícios"
                    tipo="Beneficios"
                    espacamentoEntreTituloEProduto={28}
                    pesoDaFonte={600}
                    tamanhoDoTitulo={14.8}
                    dados={BeneficioDB}
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Recomendados para você"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={30}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    dados={teste}
                />

                {/* <Carousel
                    espacamentoEntreItens={20}
                    titulo="Rações"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    dados={ }
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Brinquedos"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    dados={ }
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Farmácia"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    dados={ }
                /> */}
            </Container>
        </>
    )
}

export default Home