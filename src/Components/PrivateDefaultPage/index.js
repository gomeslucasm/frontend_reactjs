import React from 'react';
import UserService from '../../Service/UserService';
/* import { Input } from '@material-ui/core'; */
import DefaultPage from '../DefaultPage';
import LoginForm from '../LoginForm'
import styled from 'styled-components'


const Div = styled.div`
    text-align:center;
    width:100%;
`

class PrivateDefaultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            'is_logged':false
        };
        this.isLogged = this.isLogged.bind(this);
    }

    componentDidMount() {
        this.isLogged()
    }
    
    async isLogged(){
        const userService = new UserService();
        var logged;
        logged = await userService.is_logged();
        console.log('logado?', logged)
        this.setState({is_logged:logged})
        console.log(this.state['is_logged'])
    }


    render(){
        if(this.state['is_logged'] === false){
            console.log('sdaoasijdioasjdio')
            return(
                <>
                <DefaultPage>
                    <Div>
                        <h1>Você precisa estar logado pra estar aqui ;)</h1>
                    </Div>
                    <LoginForm 
                     loggedCallback = {async value => 
                    {   console.log('login?', value)
                        await this.setState({is_logged:value})
                        }}/>
                </DefaultPage>
                </>
            )
        }else{
            return(
                <>
                    <DefaultPage>
                        {this.props.children}
                    </DefaultPage>
                </>
            )
        }


    }

}

export default PrivateDefaultPage;