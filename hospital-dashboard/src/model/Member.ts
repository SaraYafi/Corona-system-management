export enum Genre {
  ROCK,
  POP,
  RAP,
  CLASSICAL,
}

interface Address{
  city: string;
  street: string;
  numHouse:number;
}
interface Vaccination{
  vacDate:Date ;
 manufacturer:string;
}

export interface Member {
  id: string;
  firstName:string;
  lastName:string;
  address:Address;
  birthDate:Date;
  phone:string;
  cellPhone:string;
  positiveResultDate:Date;
  recoveryDate:Date;
  vaccinations:Vaccination[];
}
