/* import apiPrivateService from "../../Service/apiPrivateService"; */
import apiPublicService from "../../Service/apiPublicService";

/* const privateService = new apiPrivateService() */
const publicService = new apiPublicService()

export function getAnimals(page) {
    return async function(dispatch, getState) {
        const logged = true;
        var response = '';
        if(logged){
            response = await publicService.getAnimals(page)
        }else{
            response = await publicService.getAnimals(page)
        }
        return dispatch({
            type: 'GET',
            payload:[response,]
        })
      }
}

