import { Container } from "./style"
import Localizacao from "../../components/localizacao"
import Logo from "../../components/logo"
import Carousel from "../../components/Carousel"

const Home = () => {
    return (
        <>
            <Logo />
            <Localizacao
                rua="Diogene"
                numero={72}
                complemento="apt 402"
            />
            {/* <Container>
                <Carousel
                    espacamentoEntreItens={20}
                    tipo="CategoriasDeAnimais"
                    urlApi="/"
                />

                <Carousel
                    espacamentoEntreItens={32}
                    titulo="Meus benefícios"
                    tipo="Beneficios"
                    espacamentoEntreTituloEProduto={28}
                    pesoDaFonte={600}
                    tamanhoDoTitulo={15}
                    urlApi="/"
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Recomendados para você"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={30}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    urlApi="/"
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Rações"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    urlApi="/"
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Brinquedos"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    urlApi="/"
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Farmácia"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    urlApi="/"
                />
            </Container> */}
        </>
    )
}

export default Home