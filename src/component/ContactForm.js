import { findByPlaceholderText } from "@testing-library/dom";
import { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [feild, setFeild] = useState({
    name: "",
    email: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFeild({
      ...feild,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addContact(feild);
    setFeild({
      name: "",
      email: "",
    });
  };
  return (
    <div className="contactForm">
      <h2>Add Contact</h2>
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
          placeholder="Insert Name ..."
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
          placeholder="Insert Email ..."
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
