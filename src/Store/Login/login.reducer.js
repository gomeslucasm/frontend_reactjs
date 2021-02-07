import UserService from "../../Service/UserService";

const userService = new UserService()
const is_logged = async () =>{return userService.is_logged();}


export default function(state = true , action){

    switch(action.type){
        case 'logout':
            return action.payload[0]

        case 'login':
            return action.payload[0]

        case 'is_logged':
            return action.payload[0]
                    
        default:
            return state
    }

}