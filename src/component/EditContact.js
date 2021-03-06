import React, { useEffect, useState } from "react";
import { getSingleContact } from "../server/GetSingleContact";
import {EditCantactServer} from "../server/EditCantactServer"

const EditContact = ({ history, match }) => {
  const id = match.params.id;

  const [feild, setFeild] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    const getContact = async () => {
      try {
        const { data } = await getSingleContact(id);
        setFeild(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, [id]);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFeild({
      ...feild,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!feild.name || !feild.email) {
      alert(" Fields are required");
      return;
    }
    try {
      await EditCantactServer(feild, id);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contactForm">
      <h2>Edit Contact</h2>
      <form onSubmit={submitHandler} className="form">
        <label htmlFor="name" className="label">
          Name :
        </label>
        <input
          id="name"
          className="input"
          type="text"
          value={feild.name}
          name="name"
          onChange={inputHandler}
          placeholder="Edit Name ..."
        />
        <label htmlFor="email" className="label">
          Email :
        </label>
        <input
          id="email"
          className="input"
          type="email"
          value={feild.email}
          name="email"
          onChange={inputHandler}
          placeholder="Edit Email ..."
        />
        <button className="button" type="submit">
          EditContact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
