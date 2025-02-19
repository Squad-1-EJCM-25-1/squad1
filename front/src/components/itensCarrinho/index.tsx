import { ProdutosItemProp } from "../../types/types"
import { Container, ContainerInformacoes, Coracao, DescricaoContainer, DescricaoTexto, Imagem, InterativoContainer, Preco } from "./style"
import { formatarPreco } from "../../utils/formatarPreco"
import { TouchableOpacity } from "react-native"
import { useState } from "react"

const icones = {
  coracaoMarcado: require('../../assets/favoritar/coracaoMarcado.png'),
  coracaoDesmarcado: require('../../assets/favoritar/coracaoDesmarcado.png')
}

const ItensCarrinho = ({ texto, preco, img }: ProdutosItemProp) => {

  const [favorito, setFavorito] = useState(false)

  const favoritar = () => {
    setFavorito(!favorito)
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
          {/* botao */}
        </InterativoContainer>
      </ContainerInformacoes>
    </Container>
  )
}

export default ItensCarrinho