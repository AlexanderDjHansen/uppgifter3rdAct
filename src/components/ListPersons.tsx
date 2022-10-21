import { useState } from "react";
import { IPerson } from "./models/IPerson";
import Persons from "./Persons";

const ListPersons = () => {
    const [listPersons, setListPersons] = useState<IPerson[]>([]);

    const addPerson = (newPerson: IPerson) => {
        setListPersons([...listPersons, newPerson]);
    }

  
    

    return (
        <>
        <Persons save={addPerson} listPersons={listPersons} />
        </>
    )
    

}

export default ListPersons;