import React from 'react';
import UserService from '../../Service/UserService';
/* import { Input } from '@material-ui/core'; */
import DefaultPage from '../DefaultPage';
import LoginForm from '../LoginForm'
import styled from 'styled-components'
import Loader from '../Loader'

const Div = styled.div`
    text-align:center;
    width:100%;
`

class PrivateDefaultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            'is_logged':null
        };
        this.isLogged = this.isLogged.bind(this);
    }


    async componentDidMount() {
        /* await this.wait(2000); */
        await this.isLogged()
    }
    
    async isLogged(){
        const userService = new UserService();
        var logged = await userService.is_logged();
        console.log('logado?', logged)
        this.setState({is_logged:logged})
        console.log(this.state['is_logged'])
    }

    wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    render(){
        if(this.state['is_logged'] === null){
            return(
            <DefaultPage>
                <Div>
                       <Loader display = {true}/>
                </Div>
            </DefaultPage>
            )
        }
        else if(this.state['is_logged'] === false){
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