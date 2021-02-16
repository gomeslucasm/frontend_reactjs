import React from "react";
import { Container, Row, Col } from "reactstrap";
import AnimalCard from "../AnimalCard";

const ListAnimals = ({ animals }) => {
    console.log(animals)
  return (
    <>
      <Container margin-top="2rem" id="container-row-animal">
        <Row>
          {/* Card */}
          {/* Rendering animal card */}
          {animals.map(
            ({
              id,
              animal_type,
              age,
              animal_photo,
              size,
              location,
              description,
              show,
              sex,
              sex_display,
              animal_type_display,
              location_display,
              size_display,
            }) => (
              <Col
                key={String(id)}
                padding="1.1rem"
                xl="3"
                lg="4"
                md="6"
                sm="12"
                xs="12"
                id="col_animal"
              >
                <AnimalCard
                  key={id}
                  animal_photo={animal_photo}
                  animal_type={animal_type}
                  animal_type_display={animal_type_display}
                  location_display={location_display}
                  size_display={size_display}
                  age={age}
                  size={size}
                  location={location}
                  description={description}
                  show={show}
                  sex={sex}
                  sex_display={sex_display}
                  id={id}
                  /* deleteCallback={() => {
                    this.getData();
                  }} */
                  /* callbackAnimalDetail={(id) => {
                    this.showAnimalDetail(id);
                  }} */
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    </>
  );
};

export default ListAnimals;