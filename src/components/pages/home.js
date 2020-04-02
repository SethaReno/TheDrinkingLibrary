import React from "react";

import Card from "../card";

import axios from "axios"

const Home = () => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
   // fetch("https://datingsitebackend.herokuapp.com/cards")
       fetch("http://localhost:5000/drinks")
      .then(response => setCards(response.data))
      .catch(error => console.log(error));
      console.log(cards)
  }, []);

  const deleteCard = id => {
    fetch(`https://datingsitebackend.herokuapp.com/card/${id}`, {
      method: "DELETE"
    })
      .then(setCards(cards.filter(card => card.id !== id)))
      .catch(error => console.log("delete err", error));
  };

  const editCard = id => {
    navigate(`/form/${id}`);
  };

  const renderCards = () => {
    return cards.map(card => {
      return (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          text={card.text}
          image={card.image}
          favorite={card.favorite}
          deleteCard={deleteCard}
          editCard={editCard}
        />
      );
    });
  };

  return (
    <div className="home-page-container">
      HOMEEEEEEEEE
      <div className="dates-wrapper">
        <h1>Your Drinks</h1>
      </div>

      <div className="cards-container">{renderCards()}</div>
    </div>
  );
};

export default Home;
