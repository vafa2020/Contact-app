import { IoIosContact } from "react-icons/io";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = ({ data, onDelete }) => {
  return (
    <div className="contactList">
      <span>
        <IoIosContact className="contactIcon" />
      </span>
      <Link to={{ pathname: `/user/${data.id}`, state: { data: data } }}>
        <div className="content">
          <span>{data.name}</span>
          <span>{data.email}</span>
        </div>
      </Link>
      <div className="controller">
        <Link to={`/edit/${data.id}`}>
          <FiEdit className="editIcon" />
        </Link>
        <span onClick={onDelete}>
          <BsTrashFill className="trashIcon" />
        </span>
      </div>
    </div>
  );
};

export default Contact;
