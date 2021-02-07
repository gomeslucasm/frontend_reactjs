import React from 'react'
import AddAdopter from '../../Components/AddAdopter'
import PrivateDefaultPage from '../../Components/PrivateDefaultPage'
import {Button, Modal, ModalHeader, 
    Label, FormGroup, Col, Row, Input} from 'reactstrap'
import apiPrivateService from '../../Service/apiPrivateService'


const privateService = new apiPrivateService();

class Adoption extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modal_add: false,
            modal_select: false,
            adopters:[],
        }
        this.modal_add_toggle = this.modal_add_toggle.bind(this)
        this.modal_select_toggle = this.modal_select_toggle.bind(this)
    }

    modal_add_toggle(){
        this.setState({modal_add:!this.state.modal_add})
    }
    
    async modal_select_toggle(){
        const data = await privateService.getAdopters()
        this.setState({adopters:data})
        this.setState({modal_select:!this.state.modal_select}) 
    }

    render(){
        return(
            <>
            <PrivateDefaultPage>
                <Button onClick={this.modal_add_toggle}>
                    Cadastrar adotante
                </Button>

                <Button onClick={this.modal_select_toggle}>
                    Selecionar adotante já cadastrado
                </Button>

                <Modal isOpen={this.state.modal_add} toggle={this.modal_add_toggle}>
                    <ModalHeader toggle={this.modal_add_toggle}>Cadastro de adotante</ModalHeader>
                    <AddAdopter />
                </Modal> 
                <Modal isOpen={this.state.modal_select} toggle={this.modal_select_toggle}>
                <ModalHeader toggle={this.modal_add_toggle}>Selecionar adotante</ModalHeader>
                    <Row>
                    <Col md = '12' lg = '12' sm = '12'>
                        {/* Seleção de estado */}
                        <FormGroup
                            style = {{
                                padding: '10%'
                            }}
                        >
                            <Label for="state"></Label>
                            <Input type="select" name="state" id="state" 
                            >
                                {this.state.adopters.map((option) => (
                                    <option key={option.id} value={option.id}>
                                    {option.first_name + ' ' + option.last_name}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        </Col>
                        </Row>
                </Modal>
            </PrivateDefaultPage>
            </>
        )
    }
}


export default Adoption;