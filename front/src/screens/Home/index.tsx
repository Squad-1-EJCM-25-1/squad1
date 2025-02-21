import { Container } from "./style"
import Localizacao from "../../components/localizacao"
import Logo from "../../components/logo"
import Carousel from "../../components/Carousel"
import BeneficioDB from "../../data/beneficios"
import CategoriaDB from "../../data/categoriasDeAnimais"
import { useRouter } from "expo-router"
import { ProdutosItemProp, ProdutosPropsBack } from "../../types/types"
import { useEffect, useState } from "react"
import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:3333/produtos'

const Home = () => {

    const [produtosDoBack, setProdutosDoBack] = useState<ProdutosPropsBack[]>([])
    const [racoes, setRacoes] = useState<ProdutosItemProp[]>([])
    const [brinquedos, setBrinquedos] = useState<ProdutosItemProp[]>([])
    const [farmacia, setFarmacia] = useState<ProdutosItemProp[]>([])
    const [produtosRecomendados, setProdutosRecomendados] = useState<ProdutosItemProp[]>([])

    useEffect(() => {
        axios.get<ProdutosPropsBack[]>(url).then((response: AxiosResponse<ProdutosPropsBack[]>) => {
            setProdutosDoBack(response.data)

            const produtosSemCategoria = produtosDoBack.map(({ id, texto, preco, img }) => ({
                id, texto, preco, img
            }))
            console.log(produtosSemCategoria) // apagar

            // Pegando os produtos recomendados 
            const produtosRecomendados = produtosDoBack.filter((item) => item.recomendado === true).map(({ id, texto, preco, img }) => ({ id, texto, preco, img }))
            setProdutosRecomendados(produtosRecomendados)

            // Pegando os produtos de categoria "ração"
            const racoes = produtosDoBack.filter((item) => item.categoria === 'racao').map(({ id, texto, preco, img }) => ({ id, texto, preco, img }))
            setRacoes(racoes)

            // Pegando os produtos de categoria "brinquedo"
            const brinquedos = produtosDoBack.filter((item) => item.categoria === 'brinquedo').map(({ id, texto, preco, img }) => ({ id, texto, preco, img }))
            setBrinquedos(brinquedos)

            // Pegando os produtos de categoria "farmacia"
            const farmacia = produtosDoBack.filter((item) => item.categoria === 'farmacia').map(({ id, texto, preco, img }) => ({ id, texto, preco, img }))
            setFarmacia(farmacia)

        }).catch((erro) => { console.log(erro) })
    }, [])

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
                    dados={produtosRecomendados}
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Rações"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    dados={racoes}
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Brinquedos"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    dados={brinquedos}
                />

                <Carousel
                    espacamentoEntreItens={20}
                    titulo="Farmácia"
                    tipo="Produtos"
                    espacamentoEntreTituloEProduto={13}
                    pesoDaFonte={700}
                    tamanhoDoTitulo={16}
                    dados={farmacia}
                />
            </Container>
        </>
    )
}

export default Home