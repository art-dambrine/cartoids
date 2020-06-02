export default interface IEntity {
  id: string;
  type: string;
  adresse: IAdresse;
  code: IString;
  commentaire: ICommentaire;
  date: IString;
  etat: IString;
  location: ILocation;
  name: IString;
  nbetages: INumber;
  nomgardien: IString;
  numeroetage: IString;
  telgardien: IString;
}

interface ILocation {
  type: string;
  value: {
    coordinates: [number, number];
    metadata: {};
  };
}

interface IAdresse {
  type: string;
  value: {
    ucun: string;
    residence: string;
    entree: string;
    adresse: string;
    metadata: {};
  };
}

interface ICommentaire {
  type: string;
  value: string;
  metadata: {};
}

interface IString {
  type: string;
  value: string;
  metadata: {};
}

interface INumber {
  type: string;
  value: number;
  metadata: {};
}
