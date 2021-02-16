/* import apiPrivateService from '../../../../Service/apiPrivateService' */
import {useDispatch,/* useSelector */} from 'react-redux'
import {see} from '../../../../Store/SelectAnimal/selectAnimal.actions'

/* const privateService = new apiPrivateService()

 */
const excludeAnimal =  async (id) => {
    console.log(id)
}

/* const showAnimal = (id) => {

}

const editAnimal = (id) => {

} */

const AnimalCardButtons = ({logged,id,show})=>{

    const dispatch = useDispatch();

    if(logged){
        return(
            <div id = 'animal-card-edit-button-wraper'>
                            <button 
                            onClick={()=>{
                                excludeAnimal(id)
                            }
                            } 
                            className = 'custom-btn exclude'
                            >
                                Excluir
                            </button>
                            {
                                !show &&
                                <button className = 'custom-btn show'>
                                    Mostrar
                                </button>
                            }
                            {
                                show &&
                                <button className = 'custom-btn hide'>
                                    Ocultar
                                </button>
                            }
                                <button className = 'custom-btn edit'
                                onClick = {() => {
                                    this.setState({modal:!this.state.modal})
                                }}
                                >
                                    Editar
                                </button>
                        </div>
        )
    }else{
        return(
            <>

                <div style = {{
                    display:'flex',justifyContent: 'center',width:'100%',
                    marginBottom:'0.6rem'
                    }} >        
                <button 
                className="custom-btn primary"
                style = {{textAlign:'center'}}
                onClick = {() =>{
                    dispatch(see(id))
                }}>
                    Ver animal
                </button>
                </div>  
            </>
        )
    }   
}

export default AnimalCardButtons;