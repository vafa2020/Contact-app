import { useState } from "react";
import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
  const [contactList, setContactList] = useState([]);
  const addContact = (objectValue) => {
    //second:way short----------------------------------------------
    setContactList([
      ...contactList,
      { id: Math.floor(Math.random() * 1000), ...objectValue },
    ]);
    //first: long way-----------------------------------------------
    // const item = {
    //   id: Math.floor(Math.random() * 1000),
    //   name: objectValue.name,
    //   email: objectValue.email,
    // };
    // setContactList([...contactList, item]);
  };

  const deleteContact = (id) => {
    const deleteContact = contactList.filter((contact) => contact.id !== id);
    setContactList(deleteContact);
  };

  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList data={contactList} onDelete={deleteContact} />
    </div>
  );
}

export default App;
