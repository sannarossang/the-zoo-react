import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const getAnimals = async (): Promise<IAnimal[]> => {
  try {
    const response = await axios.get<IAnimal[]>("https://animals.azurewebsites.net/api/animals");
    localStorage.setItem("currentAnimals", JSON.stringify(response.data));
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error when getting data from api...", error);
    return [];
  }
};
