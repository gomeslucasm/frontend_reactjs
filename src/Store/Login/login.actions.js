import UserService from "../../Service/UserService"

const userService = new UserService();

export function login(value){
    return{
        type: 'LOGIN',
        payload: [value,],   
    }
}

export function logout(){
    userService.logout();
    return{
        type:'LOGOUT',
        payload: [false,],
    }
}

export function is_logged(){
    return async function(dispatch, getState) {
        const isLogged = await userService.is_logged();
        
        if(isLogged){
            console.log('---- Está logado ----')
        }else{
            console.log('---- Não está logado ----')
        }

        return dispatch({
            type:'IS_LOGGED',
            payload:[isLogged,]
        })
      }
}

