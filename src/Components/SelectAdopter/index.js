import React from "react";
import { Label, FormGroup, Col, Row, Input } from "reactstrap";
import apiPrivateService from '../../Service/apiPrivateService'

const privateService = new apiPrivateService();

class SelectAdopter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adopters:[],
        }
    }

    async componentDidMount() {
        const data = await privateService.getAdopters();
        this.setState({ adopters: data });
    }

  render() {
    return (
      <Row>
        <Col md="12" lg="12" sm="12">
          {/* Seleção de estado */}
          <FormGroup
            style = {{padding: '5%'}}
          >
            <Label for="state"></Label>
            <Input type="select" name="state" id="state">
              {this.state.adopters.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.first_name + " " + option.last_name}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

export default SelectAdopter;
