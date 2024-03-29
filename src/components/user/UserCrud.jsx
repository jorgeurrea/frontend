import React, { Component } from "react";
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuário',
    subtitle: 'Cadastro de usuário: Incluir, Listar, Alterar e Excluir!'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
               Cadastro de Usuário 
            </Main>
        )
    }
}