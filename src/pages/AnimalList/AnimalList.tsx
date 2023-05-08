import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { IAnimal } from "../../models/IAnimal";
import { Animal } from "../../components/Animal/Animal";
import "../../scss/_AnimalList.scss";
import { getAnimals } from "../../services/api";

export const AnimalList = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    let animalsFromLS: IAnimal[] = JSON.parse(localStorage.getItem("currentAnimals") || "[]");
    if (animalsFromLS.length > 0) {
      setAnimals(animalsFromLS);
    } else {
      getAnimals().then(response => {
        setAnimals(response);
      });
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="animalContainer">
        {animals.map((animal, index) => (
          <Animal fullView={false} {...animal} key={animal.id}></Animal>
        ))}
      </div>
    </>
  );
};
