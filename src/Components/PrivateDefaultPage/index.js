import React from 'react';
import UserService from '../../Service/UserService';
/* import { Input } from '@material-ui/core'; */
import DefaultPage from '../DefaultPage';
import LoginForm from '../LoginForm'
import styled from 'styled-components'
import Loader from '../Loader'
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../../Store/Login/login.actions'

const Div = styled.div`
    text-align:center;
    width:100%;
`

function PrivateDefaultPage({children}){

    const isLogged = useSelector(state=> state.login);
    const dispatch = useDispatch();
    console.log(isLogged)

    if(isLogged == false){
        return(
            <>
            <DefaultPage>
                <Div>
                    <h1>Você precisa estar logado pra estar aqui ;)</h1>
                </Div>
                <LoginForm 
                loginCallback = {(val)=>{
                    dispatch(login())}
                }
                />
            </DefaultPage>
            </>
        )
    }else{
        return(
            <>
                <DefaultPage>
                    {children}
                </DefaultPage>
            </>
        )
    }
}

export default PrivateDefaultPage;