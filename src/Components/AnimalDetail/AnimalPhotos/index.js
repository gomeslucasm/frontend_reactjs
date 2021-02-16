import React from "react";
import { UncontrolledCarousel, CardImg } from "reactstrap";
import API_URL from "../../../global";

const AnimalPhotos = ({ animal_photo }) => {
  const items = (data) => {
    var items = [];
    var count = 0;
    console.log("testesao");
    data.forEach(({ photo, id }) => {
      count = count + 1;
      const id_str = String(id);
      items.push({
        src: API_URL + photo,
        altText: "",
        caption: "",
        header: "",
        key: id_str,
      });
    });
    return items;
  };

  if (animal_photo.length === 1) {
    return (
      <>
        <CardImg
          top
          widht="100%"
          src={API_URL + animal_photo[0].photo}
          alt="Card img"
          className = "animal-photo-detail"
        />
      </>
    );
  } else {
    return (
      <>
        <UncontrolledCarousel autoPlay={false} items={items(animal_photo)} className = "animal-photo-detail" />
      </>
    );
  }
};

export default AnimalPhotos;
