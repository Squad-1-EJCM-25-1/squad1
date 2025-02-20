import React from 'react'
import { BotaoContainer, FormularioContainer, Imagem, InputContainer, Logo, SenhaEsquecidaContainer, Tela } from './style'
import Botao from '../../components/botões'
import Input from '../../components/InputsDeFormulario'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useRouter } from 'expo-router'


const schema = yup.object({
  email: yup.string().email("Email Inválido").required("Informe seu email"),
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("Informe sua senha")
})

const Login = () => {

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const rota = useRouter()

  const SubmeterFormulario = (data: any) => {
    // useContext para passar informação 
    console.log(data)
    reset()
    rota.replace('(tabs)/home')
  }

  return (
    <Tela>
      <FormularioContainer>

        <Logo
          source={require('../../assets/logo.png')}
        />

        <Imagem
          source={require('../../assets/patasCaninas.png')}
        />

        <InputContainer>

          <Input
            control={control}
            name="email"
            textoDePreenchimento="Digite seu email"
            srcImg={require('../../assets/iconesDosInputs/gatinho.png')}
            texto='Login'
            error={errors.email?.message}
            inputSeguro={false}
          />

          <Input
            control={control}
            name="senha"
            textoDePreenchimento="Digite sua senha"
            srcImg={require('../../assets/iconesDosInputs/cadeado.png')}
            texto='Senha'
            error={errors.senha?.message}
            inputSeguro={true}
          />

        </InputContainer>

        <SenhaEsquecidaContainer
        // style={{
        //   textShadowOffset: { width: 0, height: 4 },
        //   textShadowRadius: 4,
        //   textShadowColor: "rgba(0, 0, 0, 0.25)",
        // }}
        >
          Esqueceu a senha?
        </SenhaEsquecidaContainer>

        <BotaoContainer>
          <Botao
            corDeFundo='laranja'
            texto='Entrar'
            aoApertar={handleSubmit(SubmeterFormulario)}
          />
          <Botao
            corDeFundo='laranja'
            texto='Cadastrar'
            aoApertar={() => console.log("oi")} // apagar
          />
        </BotaoContainer>
      </FormularioContainer>
    </Tela>
  )
}

export default Login