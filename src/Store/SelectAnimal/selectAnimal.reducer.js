const initialState = {
    type:'list'
}

export default function selectAnimal(state = initialState, action){
    switch(action.type){
        case 'LIST':
            return action.payload[0]
        /* case 'EDIT':
            return action.payload[0] */
        case 'SEE':
            return action.payload[0]
        default:
            return state
    }
}