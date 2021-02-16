import React from "react";
import {CardText, CardBody} from 'reactstrap';

const AnimalCardInfo = ({size_display, age, location_display}) => {
  return (
    <CardBody>
      <CardText tag="h6">Tamanho: {size_display}</CardText>
      <CardText tag="h6">Idade: {age}</CardText>
      {/* <CardText tag="h6">Posse: {location_display}</CardText> */}
    </CardBody>
  );
};

export default AnimalCardInfo;