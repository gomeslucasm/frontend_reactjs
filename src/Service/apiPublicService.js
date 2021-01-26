import axios from 'axios';
const API_URL = 'http://localhost:8000';

class apiPublicService{
/*     constructor(){}
 */
    async getAnimals(url_query = '?'){
        if(url_query.length>1){
            var url = `${API_URL}/api/public/animals/?${url_query}`;
        }else{
            var url = `${API_URL}/api/public/animals/`;
        }
        
        const response = await axios.get(url);
        return response.data
    }
    
    /* Animals list */
/*     async getAnimals(){
        const url = `${API_URL}/api/animals`
        const response = await axios.get(url);
        return response.data;
    } */
/*     async getAnimalsByUrl(link){
        const url = `${API_URL}${link}`;
        const response = await axios.get(url);
        return response.data;
    } */
    /* Animal by id */
/*     async getAnimalsByID(id){
        const url = `${API_URL}/api/animals/${id}`;
        const response = await axios.get(url);
        return response.data;
    } */
    /* Change in animal model */

    /* Deleting */
/*     deleteAnimal(animal){
        const url = `${API_URL}/api/animals/${animal.pk}`;
        return axios.delete(url);
    } */

    /* Create */
/*     createAnimal(animal){
        const url = `${API_URL}/api/animals/`;
        return axios.post(url,animal);
    }
 */
    /* Update */
/*     updateAnimal(animal){
        const url = `${API_URL}/api/animals/${animal.pk}`;
        return axios.put(url,animal);
    } */
}

export default apiPublicService;