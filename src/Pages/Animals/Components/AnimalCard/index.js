import React from 'react'
import {UncontrolledCarousel,Card,CardText, CardBody,/* CardTitle, CardSubtitle,  */
    CardImg, Button, CardHeader,Modal} from 'reactstrap';
import apiPrivateService from '../../../../Service/apiPrivateService'
import './index.css';
import API_URL from '../../../../global'
class AnimalCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal:false,
        }
        this.deleteAnimal = this.deleteAnimal.bind(this)
    }
    
    async deleteAnimal(){
        const privateService = new apiPrivateService();
        await privateService.deleteAnimal(this.props.id)
        console.log('requisição de delete feita')
        this.props.deleteCallback()
    }

    items(data){
        var items = [];
        var count = 0;


        console.log('testesao')
        data.forEach(({photo,id})=>{
            count = count+1;
            const id_str = String(id);
            items.push({
                'src':API_URL + photo,
                altText: '',
                caption: '',
                header: '',
                key: id_str
            })
    
        })
        return items
    }

    componentDidMount(){

    }

    render(){


        if(this.props.is_logged===false){
        return(
            <>
                <Card 
                    >
                    {/* Caso tenha só uma foto */}
                    {(this.props.animal_photo.length === 1) &&
                        <CardImg top widht="100%" 
                        src = {API_URL + this.props.animal_photo[0].photo} 
                        alt = "Card img"/>  
                    }
                    {/* Caso tenha mais de uma foto cria um carousel */}
                    {(this.props.animal_photo.length > 1) &&
                        <UncontrolledCarousel autoPlay = {false} 
                        items={this.items(this.props.animal_photo)} />
                    }     
                    {/* informações */}
                    <CardHeader tag = 'h5' 
                        style = {{backgroundColor:'#ECECEC',}}
                    >{this.props.animal_type}</CardHeader>
                    <CardHeader style = {(this.props.sex === 'M') ? {'backgroundColor':'#C8D7F0'} :
                    {'backgroundColor':'#F5DEF2'}}>{this.props.sex_display}</CardHeader>
                    
                    <CardBody>
                        <CardText tag = "h6">Tamanho: {this.props.size}</CardText>    
                        <CardText tag = "h6">Idade: {this.props.age}</CardText>
{/*                         <CardText tag = "h6">Descrição: {this.props.escription}.</CardText> */}
                        <CardText tag = "h6">Posse: {this.props.location}</CardText>
  
                    </CardBody>
                    <div style = {{
                        display:'flex',justifyContent: 'center',marginBottom:'1.25rem'
                        }}>
                        <Button
                                color = 'success'
                                id = 'animal-card-see-button'>
                                    Ver animal
                        </Button>
                    </div>
                </Card>
                
            </>
        )
    }else{
        return(
            <>
                <Card >
                    {(this.props.animal_photo.length === 1) &&
                        <CardImg top widht="100%"
                         src = {API_URL + this.props.animal_photo[0].photo} 
                         alt = "Card img"/>  
                    }
                    {(this.props.animal_photo.length > 1) &&
                        <UncontrolledCarousel autoPlay = {false} 
                        items={this.items(this.props.animal_photo)} />
                    }   
                    <CardHeader tag = 'h5' 
                        style = {{backgroundColor:'#ECECEC',}}
                    >{this.props.animal_type}</CardHeader>
                    <CardHeader style = {(this.props.sex === 'M') ? {'backgroundColor':'#C8D7F0'} :
                    {'backgroundColor':'#F5DEF2'}}>{this.props.sex_display}</CardHeader>  
                    <CardBody>
                        {/* <div id = 'wraper-card-animal-info'>
                            <div style = {{
                                backgroundColor: 'white',
                                padding: '10%',
                                borderRadius: '5%',
                            }}> */}
                                <CardText tag = "h6">Porte: {this.props.size}</CardText>
                                <CardText tag = "h6">Idade: {this.props.age}</CardText>
{/*                                 <CardText tag = "h6">Descrição: {this.props.escription}.</CardText> */}
                                <CardText tag = "h6">Posse: {this.props.location}</CardText>

                        {/*     </div>
                        </div> */}
                    </CardBody>
                    <div>
                    <div style = {{display:'flex','justifyContent':'space-between'}}>
                        <Button outline
                         color = 'danger'
                        onClick={this.deleteAnimal} 
                        id = 'animal-card-edit-button'>
                            Excluir
                        </Button>
                        {
                            !this.props.show &&
                            <Button outline
                            color = 'primary'
                            id = 'animal-card-edit-button'>
                                Mostrar
                            </Button>
                        }
                        {
                            this.props.show &&
                            <Button outline
                            color = 'primary'
                            id = 'animal-card-edit-button'>
                                Ocultar
                            </Button>
                        }
                            <Button outline
                            color = 'warning'
                            id = 'animal-card-edit-button'
                            onClick = {() => {
                                this.setState({modal:!this.state.modal})
                            }}
                            >
                                Editar
                            </Button>
                    </div>
                    </div>
                </Card>
                {/* Modal de edição do animal */}
                <Modal isOpen={this.state.modal} 
                toggle={()=>{
                    this.setState({modal:!this.state.modal})
                }}>
                    <div style = {{padding:'5%'}}>
                        Teste
                    </div>
                </Modal>
            </>
        )
    }
    }
} 


export default AnimalCard;