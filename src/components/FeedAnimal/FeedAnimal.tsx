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

  useEffect(() => {
    if (props.animal.id) {
      const timeNow = DateTime.now();
      const timeLastFed = DateTime.fromISO(props.animal.lastFed);

      const timeSinceLastFed = timeNow.diff(timeLastFed, "hours").hours;
      console.log(timeSinceLastFed);

      if (timeSinceLastFed >= 3) {
        {
          setAnimal({ ...props.animal, isFed: false });
        }
      }

      if (timeSinceLastFed >= 4) {
        {
          setAnimal({ ...props.animal, isFed: false, needsToFeed: true });
        }
      }
    }
  }, [props.animal.id]);

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
      <p className="allAnimals__fed">Är matad: {animal.isFed ? <p> Ja </p> : <p>Nej</p>}</p>
      <p className="oneAnimal__fed">Matad senast: {convertedDate}</p>
    </>
  );
};
