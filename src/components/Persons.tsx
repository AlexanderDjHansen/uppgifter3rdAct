import React from "react";
import { FormEvent, useState } from "react";
import { on } from "stream";
import "../components/styles/NamesList.style.css";
import ListPersons from "./ListPersons";
import { IPerson } from "./models/IPerson";

// https://stackoverflow.com/questions/41436253/how-to-filter-list-while-typing-with-input-field

// Vet inte hur jag ska gå vidare med update och remove.

export interface INewPersonProps {
  save(p: IPerson): void;
  listPersons: IPerson[];
}

const Persons = (props: INewPersonProps) => {
    const [id, setId] = useState<number>(0);
    const [persons, setPersons] = useState<IPerson>({
    firstname: "",
    lastname: "",
  });
  const [filter, setFilter] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (persons) {
      setPersons({ ...persons, [e.target.name]: e.target.value });
    } else {
      let person: IPerson = { firstname: "", lastname: "" };
      setPersons({ ...person, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (persons) {   
      props.save(persons);
      setPersons({firstname: "", lastname: "" });
    }
  };

  const handleClick = ( index: number,name: IPerson) => {
    console.log(name, index);
    
    

  }

  const handleSelect = () => {
    
    
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
                .map((name, index) => (
                  <li
                    key={index}
                    className="names"
                    onClick={() => handleClick(index, name)}
                    onSelect={handleSelect}
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
                  value={persons?.firstname}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div>
                <label>Surname: </label>
                <input
                id="input-last"
                  type="text"
                  name="lastname"
                  value={persons?.lastname}
                  onChange={(e) => handleChange(e)}
                    required
                />
              </div>
            </form>
          </div>
        </div>
        <button
          form="add-person-form"
          className="button-create"
          onClick={() => handleSubmit}
        >
          Create
        </button>

        <button className="button-update">Update</button>
        <button className="button-delete">Delete</button>
      </div>
    </>
  );
};

export default Persons;
