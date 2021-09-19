import { IoIosContact } from "react-icons/io";
import { BsTrashFill } from "react-icons/bs";
const ContactList = ({ data ,onDelete}) => {
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <div className="contactList" key={item.id}>
          <span>
            <IoIosContact className="contactIcon" />
          </span>
          <div className="content">
            <span>{item.name}</span>
            <span>{item.email}</span>
          </div>
          <span  onClick={()=>onDelete(item.id)}>
            <BsTrashFill  className="trashIcon"/>
          </span>
        </div>
      ))}
    </>
  );
};

export default ContactList;
