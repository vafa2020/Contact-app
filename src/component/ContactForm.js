import { useEffect, useState } from "react";

const ContactForm = (props) => {
  const [feild, setFeild] = useState({
    name: "",
    email: "",
  });
  const [contact, setContact] = useState([]);

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFeild({
      ...feild,
      [name]: value,
    });
  };
 
  const submitHandler = (e) => {
    e.preventDefault();
    if (!feild.name || !feild.email) {
      alert(" Fields are required");
      return;
    }
    setContact([
      ...contact,
      { ...feild, id: Math.floor(Math.random() * 1000) },
    ]);
    props.history.push("/");
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

// const addContact = (objectValue) => {
//   //first: long way-----------------------------------------------
//   const item = {
//     id: Math.floor(Math.random() * 1000),
//     name: objectValue.name,
//     email: objectValue.email,
//   };
//   // setContactList([...contactList, item]);
//   //second:way short----------------------------------------------
//   // setContactList([
//   //   ...contactList,
//   //   { id: Math.floor(Math.random() * 1000), ...objectValue },
//   // ]);
// };
