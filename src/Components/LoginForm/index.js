import React from 'react';
import UserService from '../../Service/UserService';
import {TextField, Button} from '@material-ui/core';
import {Row,Col/* ,Form */} from 'reactstrap'
import Loader from '../../Components/Loader'


class LoginForm extends React.Component {

    /* Construtor da classe */
    constructor(props) {
        super(props);
        /* State */
        this.state = {
            username:'',
            password:'',
            login_error: false,
            display_form:true
              }
        /* Funções que usam o this */
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    /* Adicionando as informações dos inputs do formulário ao state*/
    handleChange(e){
        /* Adicionando valor ao state */
        this.setState({[e.target.name]: e.target.value})
    }
    /* Enviando a requisição de login para a API */
    async submitLogin(e){
        /* Dados para o login */
        this.setState({display_form:false})
        this.setState({login_error:false})
        const login_data = {
            'username':this.state.username,
            'password':this.state.password
        }
        /* Prevenindo o refresh ao fazer o submit */
        e.preventDefault();
        /* Objeto dos métodos para fazer as requisições de usuários da API */
        const userService = new UserService()
        /* Enviando a requisição */
        await userService.login(JSON.stringify(login_data)
        ).then(response => {
            if(response.ok ){
            } else {
                /* Armazenando os tokens no navegador */
                userService.store_token(response)
                var logged = true;
                console.log('Deu certo o login',logged)
                
                this.props.loggedCallback(logged)
            }
        
        }).catch((error) => {
            var logged = false;
            this.props.loggedCallback(logged) 
            console.log(error)
            this.setState({login_error:true})
            this.setState({display_form:true})
            console.log(this.state)
            this.setState({'password':'','username':''})
        });
        
    }

    render(){
        return(
        <>
            <div background-color = 'blue'>
                <form onSubmit = {this.submitLogin} id ='login-form'
                    style = {
                       this.state.display_form ? {display:'block'} : {display:'none'}
                    }
                >
                    <Row>   
                        <Col xs ='12' md = '12' className = 'd-flex justify-content-center m-1'>
                            <TextField type = 'text' autoComplete="off" value = {this.state['username']} name = "username" label ='Usuário' 
                            onChange = {this.handleChange} variant='outlined'/>
                        </Col>
                        <Col xs ='12' md = '12' className = 'd-flex justify-content-center m-1'>
                            <TextField value = {this.state['password']} name = "password" label ='Senha' 
                            onChange = {this.handleChange} variant='outlined' type ='password'/>
                        </Col>
                        <Col xs ='12' md = '12' className = 'd-flex justify-content-center m-1'>
                            <Button type = 'submit' variant="contained" color="primary" >Login</Button> 
                        </Col>
                    </Row> 
                </form>
                    <Row>
                        <Col xs ='12' md = '12' className = 'd-flex justify-content-center m-1'>
                            <p 
                            style = {
                                this.state.login_error ? {display:'block'} : {display:'none'}
                            }
                            >Senha ou login errados, tente novamente.</p>
                        </Col>
                    </Row>
                    <Loader display = {!this.state.display_form}/>
            </div>
        </>
        )
    }
}

export default LoginForm;
