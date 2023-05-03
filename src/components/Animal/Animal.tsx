import { useState } from "react";
import { Link } from "react-router-dom";
import { IAnimalFullDescription } from "../../models/IAnimal";
import { DateTime } from "luxon";
import { FeedButton } from "../FeedButton/FeedButton";

export const Animal = ({
  name,
  id,
  latinName,
  imageUrl,
  shortDescription,
  longDescription,
  lastFed,
  fullView,
}: IAnimalFullDescription) => {
  if (fullView === false) {
    return (
      <div className="allAnimals">
        <h1>Namn: {name}</h1>
        <img src={imageUrl} alt={name} />
        <p>{shortDescription}</p>
        <Link to={id.toString()}>Läs mer</Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="oneAnimal">
          <h1>Namn: {name}</h1>
          <h2>Latin name: {latinName}</h2>
          <img src={imageUrl} alt={name} />
          <p>{longDescription}</p>
          <p>{lastFed}</p>
          <FeedButton></FeedButton>
        </div>
      </>
    );
  }
};
