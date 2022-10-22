import { ChangeEvent, useRef } from "react";
import { FormEvent, useState } from "react";
import "../styles/NamesList.style.css";
import { INewPersonProps, IPerson } from "../models/IPerson";

// https://stackoverflow.com/questions/41436253/how-to-filter-list-while-typing-with-input-field

const Persons = (props: INewPersonProps) => {
  const [filter, setFilter] = useState("");
  const [inputPerson, setInputPerson] = useState<{firstname: string, lastname: string }>({
    firstname: "",
    lastname: "",
  });
  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);

  const onInputPersonFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPerson({ ...inputPerson, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextId: number = props.getNextId();
    props.addPerson({
      id: nextId,
      firstname: inputPerson.firstname,
      lastname: inputPerson.lastname,
    });
    setInputPerson({ firstname: "", lastname: "" });
  };

  const onClickListItem = (person: IPerson) => {
    console.log(person);

    setSelectedPersonId(person.id);
    setInputPerson({
      firstname: person.firstname,
      lastname: person.lastname,
    });
  };

  const onUpdate = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
      if (selectedPersonId){
    props.updatePerson({id: selectedPersonId, firstname: inputPerson.firstname, lastname: inputPerson.lastname});
    setInputPerson({  firstname: "", lastname: "" });
  }
  };

  const onDelete = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedPersonId){
    props.deletePerson({id: selectedPersonId, firstname: inputPerson.firstname, lastname: inputPerson.lastname});
    setInputPerson({  firstname: "", lastname: "" });
  }
  };

  const onAbort = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputPerson({  firstname: "", lastname: "" });
    setSelectedPersonId(null);
  };

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
              {props.people
                .filter(
                  (person) =>
                    person.firstname
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    person.lastname
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    filter === ""
                )
                .map((person) => (
                  <li
                    key={person.id}
                    className="names"
                    onClick={() => onClickListItem(person)}
                    tabIndex={person.id}
                  >
                    {person.firstname + " " + person.lastname}
                  </li>
                ))}
            </ul>
          </div>
          <div className="input-container">
            <form id="add-person-form" onSubmit={onSubmit}>
              <div>
                <label>Firstname: </label>
                <input
                  id="input-firstname"
                  type="text"
                  name="firstname"
                  value={inputPerson.firstname}
                  onChange={(e) => {
                    onInputPersonFieldChange(e);
                  }}
                  required
                />
              </div>
              <div>
                <label>Surname: </label>
                <input
                  id="input-lastname"
                  type="text"
                  name="lastname"
                  value={inputPerson.lastname}
                  onChange={(e) => onInputPersonFieldChange(e)}
                  required
                />
              </div>
            </form>
          </div>
          {selectedPersonId === null && (
            <button
              form="add-person-form"
              className="button-create"
              onClick={() => onSubmit}
            >
              Create
            </button>
          )} 
        </div>
            {selectedPersonId !== null && (
        <><button onClick={(e) => onAbort(e)}> Avbryt</button><button
            className="button-update"
            form="update-person-form"
            onClick={(e) => onUpdate(e)}
          >
            Update
          </button><button className="button-delete" onClick={(e) => onDelete(e)}>
              Delete
            </button></>
        )}
      </div>
    </>
  );
};

export default Persons;
