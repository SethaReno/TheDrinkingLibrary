import React from "react";

import Card from "../card";

const Home = () => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetch("https://datingsitebackend.herokuapp.com/cards")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error));
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
      <div className="dates-wrapper">
        <h1>Your Drinks</h1>
      </div>

      <div className="cards-container">{renderCards()}</div>
    </div>
  );
};

export default Home;
