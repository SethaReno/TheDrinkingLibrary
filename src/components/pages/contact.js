import React from "react";

// import RedForest from "../../../static/images/Other/Red-Forest.jpg";
import BirdCageTheater from "../../../static/images/Other/birdCageTheater.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={BirdCageTheater} />
      <div className="info-wrapper">
        <h1>(555)-555-5555</h1>
        <h1>TOMBSTONE ARIZONA</h1>
      </div>
    </div>
  );
};
export default Contact;
