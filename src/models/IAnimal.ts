export interface IAnimal {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: number;
  longDescription: string;
  shortDescription: string;
  imageUrl: string;
  medicine: string;
  isFed: boolean;
  lastFed: string;
  needsToFeed: boolean;
}

export interface IAnimalFullDescription extends IAnimal {
  fullView: boolean;
}
