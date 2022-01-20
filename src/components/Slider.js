import React from "react";
import { Carousel } from "react-bootstrap";

import background from "../images/books.jpg";

const Slider = () => {
  return (
    <Carousel prevIcon="" nextIcon="" indicators={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={background} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
