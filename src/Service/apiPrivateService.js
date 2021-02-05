import axios from 'axios';
import API_URL from '../global'
import UserService from './UserService';


const URL = API_URL + '/api/private/'
const userService = new UserService();
class apiPrivateService{

    

    async deleteAnimal(id){
        var url = `${URL}animals/` + String(id) + '/';
        const response = await axios.delete(url);
        return response
    }

    async postAnimal(data){
        const url = `${URL}animals/`;
        const response = await axios.post(url,data,
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin':'*'
             }}
             )
        return response
    }

    async getAnimal(id){
        const url = `${URL}animals/${id}`;
        const token = userService.get_token();
        const response = await axios.get(url,
            {body: JSON.stringify({'token':token})},
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin':'*'
             }}
             )
        return response.data
    }

    async getAnimals(){
        const url = `${URL}animals/`;
        const token = userService.get_token();
        const response = await axios.get(url,
            {body: JSON.stringify({'token':token})},
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin':'*'
             }}
             )
        return response.data
    }

}

export default apiPrivateService;