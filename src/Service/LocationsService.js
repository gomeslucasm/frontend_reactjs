import axios from 'axios';


const API_URL = 'https://br-cidade-estado-nodejs.glitch.me/estados'


class LocationsService{

    async get_states(){
        const response = await axios.get(API_URL)
        console.log('testao',response)
        return response.data
    }

    async get_cities(state){
        const response = await axios.get(API_URL + '/' + state + '/cidades')
        return response.data
    }

}


export default LocationsService;