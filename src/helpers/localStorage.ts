import { IAnimal } from "../models/IAnimal";

export function saveAnimalsToLS(currentAnimals: IAnimal) {
  localStorage.setItem("currentAnimals", JSON.stringify(currentAnimals));
}
