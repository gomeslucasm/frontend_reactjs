import React from 'react'
import DefaultPage from '../../Components/DefaultPage';
import apiPublicService from '../../Service/apiPublicService'
import AnimalCard from './Components/AnimalCard';
import { Container, Row, Col } from 'reactstrap';
import './index.css'
/* import FilterMenu from './Components/FilterMenu'; */
import { /* Button */ /* Form, FormGroup, Label, Input */ } from 'reactstrap';
import UserService from '../../Service/UserService';


class Animals extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            data:[],
            url_query:{
                size:{
                    'PP':false,
                    'P':false,
                    'M':false,
                    'G':false,
                    'GG':false,
                },
                type:{
                    'c':false,
                    'd':false
                }
            },
            is_logged:false,
        }
        this.handleFilterQuery = this.handleFilterQuery.bind(this);
        this.getFilteredData = this.getFilteredData.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.showData = this.showData.bind(this)
        this.eventHandler = this.eventHandler.bind(this)
        this.getData = this.getData.bind(this)

    }
    
    handleChange(e){
        e.preventDefault()
        console.log(e.target.checked)
    }

    showData(){
        console.log(this.state.url_query_form)
        console.log('kakakakaka')
    }

    async getData(){
        const service = new apiPublicService();
        const data = await service.getAnimals(); 
        this.setState({data:data})
        console.log(this.state.data)
    }

    async componentDidMount(){
        await this.getData()
        await this.isLogged()
    }

    handleFilterQuery(event) {
        event.preventDefault()
        console.log(event.target.value)
    }

    async getFilteredData(){
        /* const service = new apiPublicService();
        const data = await service.getAnimals() */
        var url_query = String();
        var count = 0;
        for (var key in this.state.url_query) {
            if(this.state.url_query[key].length>0){
                if(count>0){
                    url_query = url_query + '&' + this.state.url_query[key]
                }else{
                    url_query = url_query + this.state.url_query[key]
                }
                count = count +1
            }
          }
        console.log(url_query)  
    }

    eventHandler(data){
        console.log(data)
        this.setState({url_query_form:data})
    }
    
    async isLogged(){
        const userService = new UserService();
        var logged;
        logged = await userService.is_logged();
        console.log('logado?', logged)
        this.setState({is_logged:logged})
        console.log(this.state['is_logged'])
    }

    render(){
        return(
            <>
                <DefaultPage>
                    <Container margin-top = '10px' id = 'container-row-animal'>
                        <Row >
                            {/* Card */}
                                {/* Rendering animal card */}
                                {this.state.data.map(
                                    ({id,animal_type,age,animal_photo,size,
                                        location,description,show,sex,sex_display}) => (
                                    <Col key= {String(id)}
                                    className="pt-3" lg = '3'md = '4' sm = '6' xs = '12' id = 'col_animal'>
                                        <AnimalCard 
                                            key = {id}
                                            animal_photo = {animal_photo}
                                            animal_type = {animal_type}
                                            age = {age}
                                            size = {size}
                                            location = {location}
                                            description = {description} 
                                            show = {show}
                                            sex = {sex}
                                            sex_display = {sex_display}
                                            is_logged = {this.state.is_logged}
                                            id = {id}
                                            deleteCallback = {()=>{this.getData()}}
                                            />
                                    </Col>   
                                    
                                    ))}
                            
                        </Row>
                    </Container>
                </DefaultPage>
            </>
        )
    }
}

export default Animals;