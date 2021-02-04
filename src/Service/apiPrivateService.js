import axios from 'axios';
const API_URL = 'https://django-backend-canil.azurewebsites.net/';
/* const API_URL = 'http://localhost:8000/private/'; 
 */

class apiPrivateService{

    async deleteAnimal(id){
        var url = `${API_URL}animals/` + String(id) + '/';
        const response = await axios.delete(url);
        return response
    }

    async postAnimal(data){
        const url = `${API_URL}animals/`;
        const response = await axios.post(url,data,
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin':'*'
             }}
             ).then(response =>{console.log('resultado',response)})
        return response
    }

}

export default apiPrivateService;