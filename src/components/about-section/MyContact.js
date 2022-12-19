import Form from "./Form";
import Socials from "./Socials";
import classes from "./MyContact.module.css";

const MyContact = () => {
  return (
    <div className={classes.contain}>
      <div className={classes.poster}>
        <h1>Contact</h1>
      </div>
      <div className={classes.contact_section}>
        <div className={classes.contact_dialogue}>
          I see you found your way here, you must mean business. If you want to
          work on a project together, want to talk about a job offer, just want
          to buy me coffee, or want to play games just send me a quick email.
        </div>
        <Form />
        <Socials />
      </div>
    </div>
  );
};

export default MyContact;
