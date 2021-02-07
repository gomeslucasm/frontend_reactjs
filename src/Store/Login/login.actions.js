import UserService from "../../Service/UserService"

const userService = new UserService();

export function login(value){
    
    return{
        type: 'login',
        payload: [true,],
    }
}

export function logout(){
    return{
        type:'logout',
        payload: [false,],
    }
}

export  function is_logged(){
    return async function(dispatch, getState) {
        const isLogged = await userService.is_logged();
        console.log('teste action', isLogged)
        return {
            type:'is_logged',
            payload:[isLogged,]
        }
      }
}

