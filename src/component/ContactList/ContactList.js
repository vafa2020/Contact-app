import Contact from "./Contact";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllContact } from "../../server/GetAllCantact";
import { deleteContactServer } from "../../server/DeleteContactServer";

const ContactList = () => {
  const [contactList, setContactList] = useState(null);
  const [contactListFilter, setContactListFilter] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setContactListFilter(contactList);
  }, [contactList]);
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
  const searchHandler = (e) => {
    const searchFilter = contactList.filter((contact) => {
      return Object.values(contact)
        .join("")
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setContactListFilter(searchFilter);
    setSearchValue(e.target.value);
  };
  return (
    <>
      <div className="header">
        <h2>Contacts</h2>
        <Link to="/add">
          <button className="buttonAdd">ADD-CONTACT</button>
        </Link>
        <input
          className="search"
          placeholder="search ..."
          type="text"
          value={searchValue}
          onChange={searchHandler}
        />
      </div>
      {contactListFilter ? (
        contactListFilter.map((item) => (
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
