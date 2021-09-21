import Contact from "./Contact";
import { Link } from "react-router-dom";

const ContactList = ({ data, OnDelete }) => {
  return (
    <>
      <div className="header">
        <h2>Contacts</h2>
        <Link to="/add">
          <button className="buttonAdd">ADD-CONTACT</button>
        </Link>
      </div>
      {data.map((item) => (
        <Contact key={item.id} data={item} onDelete={() => OnDelete(item.id)} />
      ))}
    </>
  );
};

export default ContactList;
