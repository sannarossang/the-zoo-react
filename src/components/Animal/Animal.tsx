import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { IAnimal, IAnimalFullDescription } from "../../models/IAnimal";
import { FeedAnimal } from "../FeedAnimal/FeedAnimal";

export const addDefaultImage = (e: SyntheticEvent) => {
  let imgTag = e.target as HTMLImageElement;
  imgTag.src = "https://gotogulf.com/images/person-default.png";
};

export const Animal = (animal: IAnimalFullDescription) => {
  if (animal.fullView === false) {
    return (
      <div className="allAnimals">
        <h1>Namn: {animal.name}</h1>
        <img src={animal.imageUrl} onError={event => addDefaultImage(event)} alt={animal.name} />
        <p>{animal.shortDescription}</p>
        <Link to={animal.id.toString()}>Läs mer</Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="oneAnimal">
          <h1>Namn: {animal.name}</h1>
          <h2>Latin name: {animal.latinName}</h2>
          <img src={animal.imageUrl} onError={event => addDefaultImage(event)} alt={animal.name} />
          <p>{animal.longDescription}</p>
          <FeedAnimal animal={animal}></FeedAnimal>
        </div>
      </>
    );
  }
};
