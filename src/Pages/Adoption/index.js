import React from "react";
import AdopterForm from "../../Components/AdopterForm";
import PrivateDefaultPage from "../../Components/PrivateDefaultPage";
import {
  Button,
  Modal,
  ModalHeader,
/*   Label,
  FormGroup, */
  Col,
  Row,
/*   Input, */
} from "reactstrap";
/* import apiPrivateService from "../../Service/apiPrivateService"; */
import SelectAdopter from "../../Components/SelectAdopter";

/* const privateService = new apiPrivateService(); */

class Adoption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_add: false,
      modal_select: false,
      adopters: [],
    };
    this.modal_add_toggle = this.modal_add_toggle.bind(this);
    this.modal_select_toggle = this.modal_select_toggle.bind(this);
  }

  modal_add_toggle() {
    this.setState({ modal_add: !this.state.modal_add });
  }

  modal_select_toggle() {
    this.setState({ modal_select: !this.state.modal_select });
  }

  render() {
    return (
      <>
        <PrivateDefaultPage>
          <Row>
            <Col md="6" style = {{display:'grid'}}>
              <Button onClick={this.modal_add_toggle}
                style = {{
                    margin:'5% 0',
                }}
              >
                Cadastrar adotante
              </Button>

              <Button onClick={this.modal_select_toggle}
                style = {{
                    margin:'5% 0',
                }}
              >
                Selecionar adotante já cadastrado
              </Button>
            </Col>
          </Row>
            
          {/* Modais de seleção e cadastro de adotante*/}
          <Modal isOpen={this.state.modal_add} toggle={this.modal_add_toggle}>
            <ModalHeader toggle={this.modal_add_toggle}>
              Cadastro de adotante
            </ModalHeader>
            <AdopterForm />
          </Modal>
          <Modal
            isOpen={this.state.modal_select}
            toggle={this.modal_select_toggle}
          >
            <ModalHeader toggle={this.modal_select_toggle}>
              Selecionar adotante
            </ModalHeader>
            <SelectAdopter />
          </Modal>
        </PrivateDefaultPage>
      </>
    );
  }
}

export default Adoption;
