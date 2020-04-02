import React from "react";

// import Heart from "../../static/images/logos/heart.jpg";
import Star from "../../static/images/logos/Dallas_Cowboys.svg.png"

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
        {props.favorite ? <img src={Star} alt="CowboyStar" /> : null}

        <div className="button-wrapper">
          <button onClick={() => props.deleteCard(props.id)}>DEL</button>
          <button onClick={() => props.editCard(props.id)}>Edit</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
