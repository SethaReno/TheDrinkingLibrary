import React from "react";

import Heart from "../../static/images/logos/heart.jpg";

const Card = props => {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={props.image} alt="Card" />
        {/*<img src={Skyrim} />*/}
      </div>
      <div className="text-wrapper">
        <p>{props.text}</p>
      </div>

      <div className="logo-wrapper">
        {props.favorite ? <img src={Heart} alt="Star" /> : null}

        <div className="button-wrapper">
          <button onClick={() => props.deleteCard(props.id)}>DEL</button>
          <button onClick={() => props.editCard(props.id)}>Edit</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
