import Contact from "./Contact";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllContact } from "../../server/GetAllCantact";
import { deleteContactServer } from "../../server/DeleteContactServer";

const ContactList = () => {
  const [contactList, setContactList] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllContact();
        setContactList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  const deleteContact = async (id) => {
    try {
      await deleteContactServer(id);
      const { data } = await getAllContact();
      setContactList(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="header">
        <h2>Contacts</h2>
        <Link to="/add">
          <button className="buttonAdd">ADD-CONTACT</button>
        </Link>
      </div>
      {contactList ? (
        contactList.map((item) => (
          <Contact
            key={item.id}
            data={item}
            onDelete={() => deleteContact(item.id)}
          />
        ))
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default ContactList;
