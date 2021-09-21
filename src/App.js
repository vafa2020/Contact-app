import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./component/ContactList/ContactList";
import { useEffect, useState } from "react";
import ContactForm from "./component/ContactForm";
import ContactDetails from "./component/ContactDetails";
import { getAllContact } from "./server/GetAllCantact";
import { deleteContactServer } from "./server/DeleteContactServer";
import { addContactServer } from "./server/AddCantactServer";
import EditContact from "./component/EditContact";
import { EditCantactServer } from "./server/EditCantactServer";

function App() {
  const [contactList, setContactList] = useState([]);
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
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contactList));
  }, [contactList]);

  const addContact = async (objectValue) => {
    try {
      await addContactServer(objectValue);
      const { data } = await getAllContact();
      setContactList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editContact = async (objectValue, id) => {
    try {
      await EditCantactServer(objectValue, id);
      const { data } = await getAllContact();
      setContactList(data);
    } catch (error) {
      console.log(error);
    }
  };
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
    <div className="App">
      <h1>Contact Manager</h1>
      <Switch>
        <Route
          path="/edit/:id"
          render={(props) => (
            <EditContact editContact={editContact} {...props} />
          )}
        />
        <Route path="/user/:id" component={ContactDetails} />
        <Route
          path="/add"
          render={(props) => <ContactForm addContact={addContact} {...props} />}
        />

        <Route
          path="/"
          render={(props) => (
            <ContactList
              OnDelete={deleteContact}
              data={contactList}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
