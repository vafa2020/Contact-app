import { Link } from "react-router-dom";

const ContactDetails = ({location}) => {
    const {name,email} =location.state.data
    
    return ( 
        <div className="contactDetails">
            <span>my name is {name}</span>
            <span>my email is {email}</span>
            <Link to="/">go to contactList</Link>
        </div>
     );
}
 
export default ContactDetails;