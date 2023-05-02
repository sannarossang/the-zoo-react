import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import axios from "axios";
import { IAnimal } from "../../models/IAnimal";
import { Animal } from "../../components/Animal/Animal";
import { Link } from "react-router-dom";
import { saveAnimalsToLS } from "../../helpers/localStorage";
import "../AnimalList/AnimalList.scss";

export const AnimalList = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    let animalsFromLS: IAnimal[] = JSON.parse(localStorage.getItem("animals") || "[]");
    if (animalsFromLS.length > 0) {
      setAnimals(animals);
    } else {
      const getAnimals = async () => {
        try {
          const response = await axios.get<IAnimal[]>("https://animals.azurewebsites.net/api/animals");
          setAnimals(response.data);
          localStorage.setItem("currentAnimals", JSON.stringify(response.data));
          console.log(response.data);
        } catch (error) {
          console.log("Error when getting data from api...", error);
          return [];
        }
      };
      getAnimals();
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="animalContainer">
        {animals.map((animal, index) => (
          <Animal fullView={false} {...animal}></Animal>
        ))}
      </div>
    </>
  );
};
