import ContactDetails from "../component/ContactDetails";
import ContactForm from "../component/ContactForm";
import ContactList from "../component/ContactList/ContactList";
import EditContact from "../component/EditContact";
export const Routs = [
  { path: "/edit/:id", component: EditContact },
  { path: "/user/:id", component: ContactDetails },
  { path: "/add", component: ContactForm },
  { path: "/", component: ContactList, exact: true },
];
