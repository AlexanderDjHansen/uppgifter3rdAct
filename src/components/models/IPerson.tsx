export interface IPerson {
    id: number,
    firstname: string,
    lastname: string,
}

export interface INewPersonProps {
    addPerson(p: IPerson): void;
    delete(p: number): void
    listPersons: IPerson[];
  
  }