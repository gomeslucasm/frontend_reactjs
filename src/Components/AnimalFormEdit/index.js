import React from 'react';
import {Row,Col,FormGroup,Label,Input} from 'reactstrap';


const privateService = new apiPrivateService();

class AnimalFormEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data = {
                
            }
        };
    }

    async componentDidMount() {
        const data = await privateService.getAnimal(props.id);
        this.setState({data:data})
    }

    render(){
        return(
                <>
                        <Row>   
                            <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form' >
                                <FormGroup id = 'center-form-group' >
                                    <Label for="animal_type" id = 'center-label'>Tipo de animal:
                                    <Input type="select" name="animal_type" id="animal_type" 
                                    onChange={this.handleChange}
                                    defaultValue = {'default'}
                                    >
                                        <option hidden value = ''> -- selecione uma opção -- </option>
                                        <option value = 'D'>Cachorro</option>
                                        <option value = 'C'>Gato</option>
                                        <option value = 'H'>Cavalo</option>
                                        <option value = 'O'>Outro</option>
                                    </Input>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                </>
        )
    }
}

export default AnimalFormEdit;
