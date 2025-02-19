import { Container } from "./style"
import Localizacao from "../../components/localizacao"
import Logo from "../../components/logo"
import Carousel from "../../components/Carousel"
import BeneficioDB from "../../data/beneficios"
import CategoriaDB from "../../data/categoriasDeAnimais"

const Home = () => {
    return (
        <>
            <Logo />
            <Localizacao
                rua="Diogene"
                numero={72}
                complemento="apt 402"
                botao={true}
            />
            <Container>
                <Carousel
                    espacamentoEntreItens={20}
                    tipo="CategoriasDeAnimais"
                    dados={CategoriaDB}
                />

                <Carousel
                    espacamentoEntreItens={32}
                    titulo="Meus benefícios"
                    tipo="Beneficios"
                    espacamentoEntreTituloEProduto={28}
                    pesoDaFonte={600}
                    tamanhoDoTitulo={15}
                    dados={BeneficioDB}
                />

                {/* <Carousel
                    espacamentoEntreItens={20}
                    titulo="Recomendados para você"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={30}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    dados={ }
                />

                <Carousel
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