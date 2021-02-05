import axios from 'axios';
import API_URL from '../global'


/* Métodos para autenticação, criação e obtenção de usuários */
export default class  UserService{
    /* Função que armazena o token na memória do navegador */
    store_token(response){
        localStorage.setItem('token', response.data['access']);
        localStorage.setItem('refresh_token', response.data['refresh'])
    }
    /* Função que armazena faz o GET do token */
    async login(data){
        const url = `${API_URL}/api/token/`;
        return await axios.post(url,data,{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }})
    }
    /* Método que testa se o usuário está logado */
    async is_logged(){
        /* URL da api para verificar a validade do token */
        const url = `${API_URL}/api/token/verify/`;
        /* Obtendo o token armazenado */
        var token = this.get_token();

        if(token === null){
            return false;
        }

        /* Fazendo a requisição para API */
        var res = await fetch(url,{
            method:'POST',
            body: JSON.stringify({'token':token}),
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }}
        ).then(response =>response)
        
        /* Se a resposta.ok for true */
        if(res.ok === true){
                console.log('está logado')
                return true
        }else{
            await this.refresh_token();
            token = this.get_token();
            res = await fetch(url,{
                method:'POST',
                body: JSON.stringify({'token':token}),
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                }}
            ).then(response =>{return response})

            if(res.ok === true){
                console.log('está logado')
                return true
            }else{
                console.log('não está logado')
                return false
            }
        }
                
    }
    /* Método que desloga e exclui os tokens do navegador*/
    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
    }
    /* Método que obtém o token armazendo */
    get_token(){
        return localStorage.getItem('token')
    }
    /* Método obtém token refresh*/
    get_refresh_token(){
        return localStorage.getItem('refresh_token')
    }
    /* Método que atualiza o token */
    async refresh_token(){
        /* URL da api para atualizar o token */
        const url = `${API_URL}/api/token/refresh/`;
        /* Obtendo o token refresh armazenado */
        const token = this.get_refresh_token();
        const res = await fetch(url,{
            method:'POST',
            body: JSON.stringify({'refresh':token}),
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }}
        ).then((res)=>res.json()).then((res)=>res)
        localStorage.setItem('token', res['access'])
    } 
    /* Método que retorna os usuários */
    /* Inputs: 
        user_type - 'staff','veterinary' or 'volunteer'
        */
    async get_users(user_type = 'none'){

        if(user_type === 'none'){
            const url = `${API_URL}/api/users/`
            const response = await axios.get(url)
            return response.data
        }else{
            const url = `${API_URL}/api/users/${user_type}/`
            const response = await axios.get(url)
            return response.data
        }
    }

}



