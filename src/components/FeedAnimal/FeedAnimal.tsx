import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { useParams } from "react-router";

interface FeedAnimalProps {
  animal: IAnimal;
  sendFedAnimal: () => void;
}

export const FeedAnimal = (props: FeedAnimalProps) => {
  const [animal, setAnimal] = useState<IAnimal>(props.animal);

  const params = useParams();

  let isHungry = false;

  // useEffect(() => {
  //   if (props.animal.id) {
  //     const timeNow = DateTime.now();
  //     const timeLastFed = DateTime.fromISO(props.animal.lastFed);

  //     const timeSinceLastFed = timeNow.diff(timeLastFed, "minutes").minutes;
  //     console.log(timeSinceLastFed);

  //     isHungry = !props.animal.isFed && timeSinceLastFed >= 1;
  //     console.log(isHungry);

  //     if (timeSinceLastFed >= 1) {
  //       props.animal.isFed = false;
  //     }
  //   }
  // });

  const handleClick = () => {
    const currentTime = DateTime.now().toString();
    const animalList: IAnimal[] = JSON.parse(localStorage.getItem("currentAnimals") || "[]");
    const currentAnimal = animalList.find(animal => animal.id.toString() === params.id);

    if (currentAnimal) {
      setAnimal({ ...currentAnimal, isFed: true, lastFed: currentTime });
      saveFedAnimalToLS({ ...currentAnimal, isFed: true, lastFed: currentTime });
    }
  };

  const saveFedAnimalToLS = (fedAnimal: IAnimal) => {
    let currentAnimalsfromLS: IAnimal[] = JSON.parse(localStorage.getItem("currentAnimals") || "[]");

    const updateAnimalList = currentAnimalsfromLS.map(animal =>
      animal.id === fedAnimal.id ? { ...fedAnimal } : animal
    );

    localStorage.setItem("currentAnimals", JSON.stringify(updateAnimalList));
    props.sendFedAnimal();
  };

  const convertedDate = DateTime.fromISO(animal.lastFed).toLocaleString(DateTime.DATETIME_MED);

  return (
    <>
      <button type="button" disabled={animal.isFed} onClick={handleClick} className="feedBtn">
        {animal.isFed ? "Inte hungrig" : "Så hungrig! Mata mig!"}
      </button>{" "}
      <p>Är matad: {`${animal.isFed}`}</p>
      <p>Matad senast: {convertedDate}</p>
    </>
  );
};
