const initialState = {
    data:[],prevPage:null,
    nextPage:null
}

export default function Animals(state = initialState, action){
    switch(action.type){
        case 'DELETE':
            return action.payload[0]
        case 'GET':
            return action.payload[0]
        default:
            return state
    }

}