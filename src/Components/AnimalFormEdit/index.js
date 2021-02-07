import React from 'react';
import {Row,Col,FormGroup,Label,Input} from 'reactstrap';
import apiPrivateService from '../../Service/apiPrivateService'

const privateService = new apiPrivateService()

class AnimalFormEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{}
        };
    }

    async componentDidMount() {
        const data = await privateService.getAnimal(this.props.id);
        this.setState({data:data})
    }

    render(){
        return(
                <>
                        <Row>   
                            <Col lg = '6' md = '6' sm = '12' id = 'col-animal-form' >
                                <FormGroup id = 'center-form-group' >
                                    <Label for="animal_type" id = 'center-label'>Tipo de animal:
                                    <Input type="select" name="animal_type" id="animal_type" 
                                    onChange={this.handleChange}
                                    defaultValue = {this.state.data.animal_type}
                                    >
                                        <option value = 'D'>Cachorro</option>
                                        <option value = 'C'>Gato</option>
                                        <option value = 'H'>Cavalo</option>
                                        <option value = 'O'>Outro</option>
                                    </Input>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col lg = '6' md = '6' sm = '12' id = 'col-animal-form'>
                            <FormGroup id = 'center-form-group'>
                                <Label for="size" id = 'center-label'>Tamanho:
                                <Input type="select" name="size" id="size" 
                                onChange={this.handleChange} 
                                defaultValue = {this.state.data.size}
                                >
                                    <option value = 'PP'>Muito pequeno</option>
                                    <option value = 'P'>Pequeno</option>
                                    <option value = 'M'>Médio</option>
                                    <option value = 'G'>Grande</option>
                                    <option value = 'GG'>Muito grande</option>
                                </Input>
                                </Label>
                            </FormGroup>
                            </Col>
                            <Col lg = '6' md = '6' sm = '12' id = 'col-animal-form'>
                            <FormGroup id = 'center-form-group'>
                                <Label for="sex" id = 'center-label'>Sexo:
                                <Input type="select" name="sex" id="sex" 
                                onChange={this.handleChange}
                                defaultValue = {this.state.data.sex}
                                >
                                    <option value = 'M'>Macho</option>
                                    <option value = 'F'>Fêmea</option>
                                </Input>
                                </Label>
                            </FormGroup>
                            </Col>
                            <Col lg = '6' md = '6' sm = '12' id = 'col-animal-form'
                                style = {{'justifyContent': 'center', 'display': 'flex'}}
                            >
                                <FormGroup className = 'm-2' id = "form-castrated" check>
                                    <Label for="castrated" id = 'center-label' check>
                                    <Input onChange = {this.handleChange} 
                                    defaultValue = {this.state.data.castrated}
                                    type="checkbox" name="castrated" id="castrated"/>{' '}
                                    Castrado
                                    </Label>
                                </FormGroup>
                                <FormGroup className = 'm-2' id = "form-castrated" check>
                                    <Label for="show" id = 'center-label' check>
                                        <Input onChange = {this.handleChange}
                                        defaultValue = {this.state.data.castrated}
                                        type="checkbox" name="show" id="show"/>{' '}
                                        Mostrar no site
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                </>
        )
    }
}

export default AnimalFormEdit;
