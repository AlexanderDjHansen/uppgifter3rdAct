import { useState } from "react";
import { IPerson } from "../models/IPerson";
import Persons from "./Persons";

 const ListPersons = () => {
     const [listPersons, setListPersons] = useState<IPerson[]>([

     ]);

    const addPerson = (newPerson: IPerson) => {
         setListPersons([...listPersons, newPerson]);
    }     
    
    const deletePerson = (id: number) => {
          setListPersons(listPersons.filter((person) => person.id !== id)) 
      }

     return (
         <>
         <Persons addPerson={addPerson} listPersons={listPersons} delete={deletePerson} />
         </>
     )
    

}
 export default ListPersons;