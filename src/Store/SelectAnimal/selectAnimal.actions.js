export function list(){
    const state = {
        type:'list',
    }
    return{
        type: 'LIST',
        payload:[state,],
    }
}

export function see(id){
    const state = {
        type:'see',
        id:id,
    }
    return{
        type: 'SEE',
        payload:[state,]
    }
}
