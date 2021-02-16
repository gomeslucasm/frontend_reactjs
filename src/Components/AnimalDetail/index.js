import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  /* CardTitle,  */ Col,
  Row,
} from "reactstrap";
import AnimalPhotos from "./AnimalPhotos";
import "./index.css";
import {useSelector} from "react-redux"

const EditField = ({ label, name, type, choices = null }) => {

  const [value,setValue] = useState(null)


  if (choices) {
    const defaultValue = choices[0];
    choices = choices[1];

    return (
      <>
        <label>{label}: 
        <select type={type} name={name} style={{ marginLeft: "1.2rem" }}
        defaultValue = {defaultValue}
        onChange = {(e)=>{
          setValue({[e.target.name]:e.target.value})
        }}
        >
        
          {Object.keys(choices).map((key) => {
            return <option value={key}>{choices[key]}</option>;
          })}
          )}
        </select>
        </label>
        <button className = 'custom-btn edit'
        onClick = {()=>{
          console.log(value)
        }}
        >Enviar</button>
      </>
    );
  } else {
    return (
      <>
        <label>{label}: 
        <input type={type} name={name} style={{ marginLeft: "1.2rem" }} />
        </label>
        <button className = 'custom-btn edit'
        onClick = {()=>{
          console.log(value)
        }}
        >Enviar</button>
      </>
    );
  }
};

const FieldInfo = ({
  infoName,
  info,
  name = null,
  type = null,
  choices = null,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const isLogged = useSelector(state => state.login)

  if (name && isLogged) {
    return (
      <>
        {!showEdit && (
          <>
            <CardText tag="h6">
              {infoName}: {info}
              <button
              className = 'custom-btn edit'
                style={{ float: "right" }}
                onClick={() => {
                  setShowEdit(!showEdit);
                }}
              >
                Editar
              </button>
            </CardText>
          </>
        )}
        {showEdit && (
          <>
            <CardText tag="h6">
              <EditField
                name={name}
                label={infoName}
                type={type}
                choices={choices}
              />
                <button
                className = 'custom-btn exclude'
                  onClick={() => {
                    setShowEdit(!showEdit);
                  }}
                >
                  Cancelar
                </button>
            </CardText>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <CardText tag="h7">
          {infoName}: {info}
        </CardText>
      </>
    );
  }
};

const AnimalFieldInfo = ({
  infoName,
  info,
  name = null,
  type = null,
  choices = null,
}) => {
  console.log("ch", choices);
  return (
    <>
      <CardBody>
        <FieldInfo
          infoName={infoName}
          info={info}
          name={name}
          type={type}
          choices={choices}
        />
      </CardBody>
    </>
  );
};

const AnimalDetail = ({ animal }) => {
  useEffect(() => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  });

  return (
    <>
      <div className="animal-detail-wraper">
        <Row>
          {/* <Col lg = '1'/> */}
          <Col lg="6" md="6" sm="6" xs="12">
            <AnimalPhotos animal_photo={animal.animal_photo} />
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" id="col-animal-detail-info">
            {/* <div id="col-animal-detail-info-wrapper">
              <h1>Sexo: {animal.sex_display}</h1>
              <h1>Idade: {animal.age}</h1>
              <h3>Localização do animal: {animal.location_display}</h3>
              <p> {animal.description}</p>
            </div> */}
            <Card>
              <AnimalFieldInfo
                infoName="Sexo"
                info={animal.sex_display}
                name="sex"
                choices={[animal.sex,{ M: "Macho", F: "Fêmea" }]}
              />
              <CardBody>
                <CardText tag="h6">Idade: {animal.age}</CardText>
              </CardBody>
              <CardBody>
                <input type="text" />
                {/* <CardText tag="h7">Posse do animal: {animal.location_display}</CardText> */}
              </CardBody>
              <CardBody>
                <CardText tag="h6">Descrição: {animal.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AnimalDetail;
