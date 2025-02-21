import React from 'react'

import { BotaoContainer, FormularioContainer, InputContainer, Logo, Tela } from './style'
import Input from '../../components/InputsDeFormulario'
import { validarCPF } from '../../utils/validadorDeCPF'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import CheckBox from '../../components/chekBox'
import Botao from '../../components/botões'
import axios, { AxiosResponse } from 'axios';

import { useRouter } from 'expo-router'

interface Usuario {
    nome: string,
    email: string,
    cpf: string,
    senha: string,
}

const url = 'http://localhost:3333/usuario'

const cadastrarUsuario = (usuario: Usuario) => {
    console.log("Usuário que foi para a função: ", usuario)
    axios.post<Usuario>(url, { nome: usuario.nome, email: usuario.email, senha: usuario.senha, cpf: usuario.cpf }).then((response: AxiosResponse<Usuario>) => {
        console.log(response.data)
    }).catch((erro) => { console.log(erro) })
}

const schema = yup.object({
    nome: yup.string().min(3, "Seu nome deve ter pelo menos 6 caracteres").required("Informe seu nome"),
    cpf: yup.string().required("Informe seu CPF").test("valid-cpf", "CPF inválido", (value) => value ? validarCPF(value) : false),
    email: yup.string().email("Email Inválido").required("Informe seu email"),
    senha: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("Informe sua senha"),
    confirmarSenha: yup.string().oneOf([yup.ref('senha')], "As senhas não coincidem").required("Confirme sua senha"),
    termos: yup.bool().oneOf([true], "Você deve aceitar os termos").required("Você precisa aceitar os termos"),
})

const Cadastro = () => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const rota = useRouter()

    //ajustar
    const SubmeterFormulario = (data: Usuario) => {
        const user = {
            nome: data.nome,
            email: data.email,
            cpf: data.cpf,
            senha: data.senha,
        }
        cadastrarUsuario(user)
        reset()
        rota.replace('(tabs)/home')
    }

    return (
        <Tela>
            <FormularioContainer>

                <Logo source={require('../../assets/logo.png')} />

                <InputContainer>

                    <Input
                        control={control}
                        name='nome'
                        textoDePreenchimento='Digite seu nome'
                        inputSeguro={false}
                        srcImg={require('../../assets/iconesDosInputs/boneco.png')}
                        error={errors.nome?.message}
                    />

                    <Input
                        control={control}
                        name='cpf'
                        textoDePreenchimento='Digite seu CPF'
                        inputSeguro={false}
                        srcImg={require('../../assets/iconesDosInputs/cpf.png')}
                        error={errors.cpf?.message}
                        tipo='cpf'
                    />

                    <Input
                        control={control}
                        name='email'
                        textoDePreenchimento='Digite seu email'
                        inputSeguro={false}
                        srcImg={require('../../assets/iconesDosInputs/arroba.png')}
                        error={errors.email?.message}
                    />

                    <Input
                        control={control}
                        name='senha'
                        textoDePreenchimento='Digite sua senha'
                        inputSeguro={true}
                        srcImg={require('../../assets/iconesDosInputs/cadeado.png')}
                        error={errors.senha?.message}
                    />

                    <Input
                        control={control}
                        name='confirmarSenha'
                        textoDePreenchimento='Confirme sua senha'
                        inputSeguro={true}
                        srcImg={require('../../assets/iconesDosInputs/cadeado.png')}
                        error={errors.confirmarSenha?.message}
                    />

                </InputContainer>

                <CheckBox
                    control={control}
                    name='termos'
                    texto='Concordo com os termos'
                    error={errors.termos?.message}
                />

                <BotaoContainer>
                    <Botao
                        corDeFundo='laranja'
                        texto='Entrar'
                        aoApertar={handleSubmit(SubmeterFormulario)}
                    />
                </BotaoContainer>

            </FormularioContainer>
        </Tela>
    )
}

export default Cadastro