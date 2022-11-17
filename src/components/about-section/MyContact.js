import Form from "./Form";
import { Link } from "react-router-dom";
import classes from "./MyContact.module.css";

const MyContact = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.contain}>
          <div className={classes.poster}>
            <h1>Contact</h1>
          </div>
          <div className={classes.contact_section}>
            <Form />
          </div>
        </div>
      </div>
      <div className={classes.next_step}>
        Okay,so now you know a little about me, Lets talk business.
        <div className={classes.directions}>
          <Link to="/contact" className={classes.directions_btn}>
            {" "}
            Contact{" "}
          </Link>
          <Link to="/portfolio" className={classes.directions_btn}>
            {" "}
            Portfolio{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyContact;
