import React from "react";
import {CardHeader} from 'reactstrap';

const AnimalCardSex = ({sex, sex_display}) => {
  return (
    <>
    <CardHeader
      style={
        sex === "M"
          ? { backgroundColor: "#0497CC" }
          : { backgroundColor: "#eca7d6" }
      }
    >
      {sex_display}
    </CardHeader>
    </>
  );
};

export default AnimalCardSex;