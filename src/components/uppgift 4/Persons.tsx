import { ChangeEvent, useRef } from "react";
import { FormEvent, useState } from "react";
import "../styles/NamesList.style.css"
import { INewPersonProps, IPerson } from "../models/IPerson";

// https://stackoverflow.com/questions/41436253/how-to-filter-list-while-typing-with-input-field



const Persons = (props: INewPersonProps) => {

    const firstnameRef = useRef<any>()
    const lastnameRef = useRef<any>()
    const [count, setCount] = useState<number>(1);
    const [persons, setPersons] = useState<IPerson>({id: 1, firstname: "", lastname: ""});
    const [currentPerson, setCurrentPerson] = useState(persons);
    const [isUpdating, setIsUpdating] = useState(false)
    const [filter, setFilter] = useState("");
 


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (persons) {
      setPersons({ ...persons, [e.target.name]: e.target.value }); 
    } else {
      let person: IPerson = {id: 1, firstname: "", lastname: "" };
      setPersons({ ...person, [e.target.name]: e.target.value });
      console.log("hej från else");
    }
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (persons.firstname && persons.lastname) {   
      props.addPerson(persons);
      setPersons({id: count + 1, firstname: "", lastname: "" });
      setCount(count + 1);
    }
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      
      setIsUpdating(false)
      console.log(isUpdating);
  }

  const handleDelete = () => {
    
  }

  const handleClick = (index: number, person: IPerson) => {
      if ((index == persons.id)) {
        firstnameRef.current.focus()}
        setIsUpdating(true)
        setCurrentPerson(person)
        console.log(currentPerson);
        console.log(isUpdating);
        console.log("#"+index + " Li is focused");
       
      // lastnameRef.current.focus()
  }
  
 
  return (
    <>
      <div className="form-container">
        <div className="filter-container">
          <label>Filter prefix: </label>
          <input
            className="filter"
            name="filter"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        { isUpdating ? 
        <div className="body">
          <div className="name-list">
            <ul className="list-item">
              {props.listPersons
                .filter(
                  (f) =>
                    f.firstname.includes(filter) ||
                    f.lastname.includes(filter) ||
                    filter === ""
                )
                .map((name) => (
                  <li
                    ref={firstnameRef}
                    key={name.id}
                    className="names"
                    // onSelect={() => handleSelect(name.id)}
                    onClick={() => handleClick(name.id, name)}
                    tabIndex={name.id}
                    >
                   {name.firstname + " " + name.lastname}
            
                    </li>
                ))}
            </ul>
          </div>
          <div className="input-container">
            <form id="update-person-form" onSubmit={handleUpdate}>
              <div>
                <label>Firstname: </label>
                <input
                 
                  id="input-first"
                  type="text"
                  name="firstname"
                  value={persons.firstname}
                  onChange={(e) => {handleChange(e)
                  }}
                  required
                />
              </div>
              <div>
                <label>Surname: </label>
                <input
                 
                  id="input-last"
                  type="text"
                  name="lastname"
                  value={persons.lastname}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </form>
          </div>
        </div> 
        : 
        <div className="body">
          <div className="name-list">
            <ul className="list-item">
              {props.listPersons
                .filter(
                  (f) =>
                    f.firstname.includes(filter) ||
                    f.lastname.includes(filter) ||
                    filter === ""
                )
                .map((name) => (
                  <li
                  ref={firstnameRef}
                    key={name.id}
                    className="names"
                    // onSelect={() => handleSelect(name.id)}
                    onClick={() => handleClick(name.id, name)}
                    tabIndex={name.id}
                    >
                   {name.firstname + " " + name.lastname}
            
                    </li>
                ))}
            </ul>
          </div>
          <div className="input-container">
            <form id="add-person-form" onSubmit={handleSubmit}>
              <div>
                <label>Firstname: </label>
                <input
                 
                  id="input-first"
                  type="text"
                  name="firstname"
                  value={persons.firstname}
                  onChange={(e) => {handleChange(e)
                  }}
                  required
                />
              </div>
              <div>
                <label>Surname: </label>
                <input
                 
                  id="input-last"
                  type="text"
                  name="lastname"
                  value={persons.lastname}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </form>
          </div>
        </div> 
        }

        <button
          form="add-person-form"
          className="button-create"
          onClick={() => handleSubmit}
        >
          Create
        </button>

        <button className="button-update" form="update-person-form" onClick={() => handleUpdate}>Update</button>
        <button className="button-delete" onClick={() => handleDelete}>Delete</button>
        
      </div>
    </> 
  )
}

export default Persons;
