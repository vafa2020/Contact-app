import { useEffect, useState } from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    const saveContact = JSON.parse(localStorage.getItem("contact"));
    setContactList(saveContact);
  }, []);

  const deleteContact = (id) => {
    const deleteContact = contactList.filter((contact) => contact.id !== id);
    setContactList(deleteContact);
  };
  return (
    <>
      <div className="header">
        <h2>Contacts</h2>
        <Link to="/add">
          <button className="buttonAdd">ADD-CONTACT</button>
        </Link>
      </div>
      {contactList.map((item) => (
        <Contact
          key={item.id}
          data={item}
          onDelete={() => deleteContact(item.id)}
        />
      ))}
    </>
  );
};

export default ContactList;
