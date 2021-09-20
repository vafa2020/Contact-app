import ContactDetails from "../component/ContactDetails";
import ContactForm from "../component/ContactForm";
import ContactList from "../component/ContactList/ContactList";

export const Routs = [
  { path: "/user/:id", component: ContactDetails },
  { path: "/add", component: ContactForm },
  { path: "/", component: ContactList, exact: true },
];
