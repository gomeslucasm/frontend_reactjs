/* import { TextField} from '@material-ui/core'; */
import {Input,Label, FormGroup, Row, Col, Button} from 'reactstrap'
import React from 'react'
import LocationsService from '../../Service/LocationsService'
import Loader from '../Loader';
import apiPrivateService from '../../Service/apiPrivateService';

const locationsService = new LocationsService();
const privateService = new apiPrivateService();

class AdopterForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            form_data:{
                state:'RS',
                city:'Santiago'
            },
            states:[],
            cities:[],
            display:'form',
        }
        this.getStates = this.getStates.bind(this);
        this.getCities = this.getCities.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.postAdopter = this.postAdopter.bind(this)
    }

    async getStates(){
        this.setState({states:await locationsService.get_states()})
        
    }

    async getCities(state){
        this.setState({cities:await locationsService.get_cities(state)})
    }

    handleChange(e){
        const form_data = this.state.form_data
        form_data[e.target.name] = e.target.value
        this.setState({form_data: form_data})
        console.log(this.state.form_data)
    }

    componentDidMount(){
        this.getStates()
        this.getCities(this.state.form_data.state)
    }

    async postAdopter(e){
        e.preventDefault()
        this.setState({display:'loader'})
        await privateService.postAdopter(this.state.form_data)
        this.setState({display:'success'})
        
        console.log('teste')
    }

    render() {
        return (
            <>
                <Loader display = {(this.state.display === 'loader')} />
                <p
                style = {
                    (this.state.display === 'success') ? {display:'block'} : {display:'none'}
                }
                >Cadastrado com sucesso</p>
                <form style = {
                    (this.state.display === 'form') ? 
                    {padding:'5%',display:'block'} :
                    {padding:'5%',display:'none'}
                }
                onSubmit = {this.postAdopter}
                >
                    <Row>
                        <Col sm = '12' md = '6' lg = '6'>
                            <FormGroup>
                                <Label for="first_name">Nome</Label>
                                <Input type="text" name="first_name" id="first_name"
                                placeholder="Nome" onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col sm = '12' md = '6' lg = '6'>
                            <FormGroup>
                                <Label for="last_name">Sobrenome</Label>
                                <Input type="text" name="last_name" id="last_name"
                                placeholder="Sobrenome" onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col sm = '12' md = '6' lg = '6'>
                            <FormGroup>
                                <Label for="cellphone">Telefone</Label>
                                <Input type="text" name="cellphone" id="cellphone"
                                placeholder="ddd + número" onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md = '6' lg = '6' sm = '12'>
                            <FormGroup>
                                <Label for="document">Documento</Label>
                                <Input type="text" name="document" id="document"
                                placeholder="CPF ou RG" onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md = '6' lg = '6' sm = '12'>
                        {/* Seleção de estado */}
                        <FormGroup>
                            <Label for="state">Estado</Label>
                            <Input type="select" name="state" id="state" 
                            value = {this.state.form_data.state}
                            defaultValue = {this.state.form_data.state}
                            onChange = {(e)=>{
                                this.handleChange(e)
                                this.getCities(e.target.value)
                            }}
                            >
                                {this.state.states.map((option) => (
                                    <option key={option.id} value={option.id}>
                                    {option.estado}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        </Col>
                        <Col md = '6' lg = '6' sm = '12'>
                        {/* Seleção de cidade */}
                        <FormGroup>
                            <Label for="city">Cidade</Label>
                            <Input type="select" name="city" id="city"
                            value = {this.state.form_data.city}
                            defaultValue = {this.state.form_data.city}
                            onChange={this.handleChange}
                            >
                                {this.state.cities.map((option,index) => (
                                    <option key={String(index)} value={option.cidade}>
                                        {option.cidade}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        </Col>
                        <Col md = '6' lg = '6' sm = '12'>
                            <FormGroup>
                                <Label for="neighbourhood">Bairro</Label>
                                <Input type="text" name="neighbourhood" id="neighbourhood"
                                placeholder="Bairro" onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md = '6' lg = '6' sm = '12'>
                            <FormGroup>
                                <Label for="street">Rua</Label>
                                <Input type="text" name="street" id="street"
                                placeholder="Rua" onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md = '6' lg = '6' sm = '12'>
                            <FormGroup>
                                <Label for="number">Número</Label>
                                <Input type="text" name="number" id="number"
                                placeholder="Número" onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = '12' lg = '12' sm = '12'>
                            <Button
                            style = {{width:'100%'}}
                            type = 'submit'
                            /* onClick={this.postAdopter} */
                            >Cadastar</Button>
                        </Col>
                    </Row>
                </form>
            </>
        )
    }
}

export default AdopterForm;