export default function login(state = false , action){
    switch(action.type){
        case 'LOGOUT':
            return action.payload[0]

        case 'LOGIN':
            return action.payload[0]

        case 'IS_LOGGED':
            return action.payload[0]
                    
        default:
            return state
    }

}