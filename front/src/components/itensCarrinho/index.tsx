import { ProdutosItemProp } from "../../types/types"
import { Container, ContainerInformacoes, Coracao, DescricaoContainer, DescricaoTexto, Imagem, InterativoContainer, Preco } from "./style"
import { formatarPreco } from "../../utils/formatarPreco"
import { TouchableOpacity } from "react-native"
import { useState } from "react"
import BotaoContagem from "../botaoContagem"
import { RemoverItemDoCarrinho } from "../../utils/carrinho"

const icones = {
  coracaoMarcado: require('../../assets/favoritar/coracaoMarcado.png'),
  coracaoDesmarcado: require('../../assets/favoritar/coracaoDesmarcado.png')
}

const ItensCarrinho = ({ texto, preco, img, id }: ProdutosItemProp) => {

  const [favorito, setFavorito] = useState(false)
  const [quantidade, setQuantidade] = useState(1)

  const favoritar = () => {
    setFavorito(!favorito)
  }

  const adicionarElemento = () => {
    if (quantidade < 10) {
      setQuantidade(quantidade + 1)
    }
  }

  const subtrairElemento = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1)
    } else {
      const produto = {
        id: id,
        texto: texto,
        img: img,
        preco: preco
      }
      RemoverItemDoCarrinho(produto)
    }
  }

  return (
    <Container>
      <Imagem source={img} />
      <ContainerInformacoes>
        <DescricaoContainer>
          <DescricaoTexto>{texto}</DescricaoTexto>
          <TouchableOpacity activeOpacity={1} onPress={favoritar}>
            <Coracao source={favorito ? icones.coracaoMarcado : icones.coracaoDesmarcado} />
          </TouchableOpacity>
        </DescricaoContainer>
        <InterativoContainer>
          <Preco>{`R$ ${formatarPreco(preco)}`}</Preco>
          <BotaoContagem
            tamanho={87}
            corDeFundo="#EDA61A"
            espacamentoInterno={10}
            preenchimento={4}
            raioDaBorda={9}
            tamanhoDoIcone={16}
            quantidade={quantidade}
            somar={adicionarElemento}
            subtrair={subtrairElemento}
          />
        </InterativoContainer>
      </ContainerInformacoes>
    </Container>
  )
}

export default ItensCarrinho