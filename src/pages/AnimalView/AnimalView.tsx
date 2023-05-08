import { useParams } from "react-router";
import { Animal } from "../../components/Animal/Animal";
import { Navbar } from "../../components/Navbar/Navbar";
import { IAnimal } from "../../models/IAnimal";
import "../../scss/_AnimalView.scss";

export const AnimalView = () => {
  const params = useParams();
  const animalList: IAnimal[] = JSON.parse(localStorage.getItem("currentAnimals") || "[]");
  const currentAnimal = animalList.find(animal => animal.id.toString() === params.id);

  if (currentAnimal === undefined) {
    return <h2>Choose an animal to find</h2>;
  } else {
    return (
      <>
        <Navbar></Navbar>
        <Animal fullView={true} {...currentAnimal}></Animal>
      </>
    );
  }
};
