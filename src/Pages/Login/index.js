import React from 'react'
import UserService from '../../Service/UserService';
import styled from 'styled-components';
import DefaultPage from '../../Components/DefaultPage';
import LoginForm from '../../Components/LoginForm';
import {Button} from '@material-ui/core';
import {Col} from 'reactstrap'



const DivLogged = styled.div`
    width: 100%;
    text-align:center;
`

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            'is_logged':false,
        };
        this.handleLogin = this.handleLogin.bind(this)
        this.isLogged = this.isLogged.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
      }
    componentDidMount(){    
        this.isLogged()
    }
    
    async isLogged(){
        /* Fazendo requisição para api */
        const userService = new UserService()
        const logged = await userService.is_logged()
        /* Adicionando o estado de logado(true or false) */
        this.setState({is_logged:logged})
    }


    async handleLogin(logged){
        /* Adicionando o estado de logado ao dar o submit no login form */
        this.setState({is_logged:logged})
    }

    handleLogout(){
        /* Mudando o estado para não logado */
        this.setState({'is_logged':false});
        /* Objeto do serviço de usuários da api */
        const userService = new UserService()
        /* Excluindo os tokens do navegador */
        userService.logout()
        console.log('Deslogado')
    }

    render(){

        if(this.state.is_logged===true){
            return(
                <DefaultPage>
                    <DivLogged>
                    <h2>Você está logado</h2>
                    <Col xs ='12' md = '12' className = 'd-flex justify-content-center m-1'>
                            <Button href = "/" ariant="contained" color="primary" >Ir para página inicial</Button> 
                        </Col>
                    <Col xs ='12' md = '12' className = 'd-flex justify-content-center m-1'>
                            <Button onClick = {this.handleLogout} variant="contained" color="secondary" >Logout</Button> 
                        </Col>
                    </DivLogged>
                </DefaultPage>
            )
        }else{
            return(
            <>
                <DefaultPage>
                    <LoginForm loggedCallback = {this.handleLogin}/>
                </DefaultPage>
            </>
            )
        }
    }
}

export default Login;