import { useState } from "react";
import { IPerson } from "../models/IPerson";
import Persons from "./Persons";

 const ListPersons = () => {

     const [people, setPeople] = useState<IPerson[]>([
     ]);
     const [nextId, setNextId] = useState<number>(1)

     const getNextId = (): number => {
        const returnValue: number = nextId.valueOf();

        setNextId(nextId + 1);
    
        return returnValue;
   }  

    const addPerson = (newPerson: IPerson) => {
         setPeople([...people, newPerson]);
    }     

    const updatePerson = (person: IPerson) => {
        const personIndex = people.findIndex((p) => p.id === person.id);
        if (personIndex !== -1){
           const newList: IPerson[] = [...people]
            newList[personIndex] = person
            setPeople(newList);
        }
    }
    
    const deletePerson = (person: IPerson) => {
          setPeople(people.filter((p) => p.id !== person.id)) 
      }

     return (
         <>
         <Persons people={people} getNextId={getNextId} addPerson={addPerson}  updatePerson={updatePerson} deletePerson={deletePerson}/>
         </>
     )
    

}
 export default ListPersons;