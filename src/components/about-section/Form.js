import classes from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const [nameEmpty, setNameEmpty] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [messageEmpty, setMessageEmpty] = useState(true);

  const getNameHandler = (e) => {
    const name = e.target.value;
    if (name !== "") {
      setNameEmpty(false);
    } else if (name === "") {
      setNameEmpty(true);
    }
  };

  const getEmailHandler = (e) => {
    const name = e.target.value;
    if (name !== "") {
      setEmailEmpty(false);
    } else if (name === "") {
      setEmailEmpty(true);
    }
  };

  const getMessageHandler = (e) => {
    const name = e.target.value;
    if (name !== "") {
      setMessageEmpty(false);
    } else if (name === "") {
      setMessageEmpty(true);
    }
  };

  return (
    <form action="https://formspree.io/f/xjvzwjal" method="POST">
      <input
        type="text"
        name="name"
        id="name"
        required
        className={classes.nameInput}
        onChange={getNameHandler}
      />
      <label
        htmlFor="name"
        style={
          !nameEmpty ? { top: "-10px", left: "5px", fontSize: "14px" } : {}
        }
      >
        Name
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className={classes.emailInput}
        onChange={getEmailHandler}
      />
      <label
        htmlFor="email"
        style={
          !emailEmpty ? { top: "55px", left: "5px", fontSize: "14px" } : {}
        }
      >
        Email
      </label>
      <textarea
        name="message"
        id="message"
        required
        className={classes.messageInput}
        onChange={getMessageHandler}
      ></textarea>
      <label
        htmlFor="message"
        style={
          !messageEmpty ? { top: "120px", left: "5px", fontSize: "14px" } : {}
        }
      >
        Message
      </label>
      <button type="submit">Get in Touch</button>
    </form>
  );
};

export default Form;
