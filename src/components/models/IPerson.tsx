export interface IPerson {
    id: number,
    firstname: string,
    lastname: string,
}

export interface INewPersonProps {
    people: IPerson[];
    getNextId(): number
    addPerson(p: IPerson): void;
    updatePerson(p: IPerson): void;
    deletePerson(p: IPerson): void
   
    
  }