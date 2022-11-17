import classes from "./Form.module.css";

const Form = () => {
  return (
    <form action="https://formspree.io/f/xjvzwjal" method="POST">
      <input
        type="text"
        name="name"
        id="name"
        required
        className={classes.nameInput}
      />
      <label for="name" hello={false} className={classes.label1}>
        Name
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className={classes.emailInput}
      />
      <label for="email" className={classes.label2}>
        Email
      </label>
      <textarea
        name="message"
        id="message"
        required
        className={classes.messageInput}
      ></textarea>
      <label for="message" className={classes.label3}>
        Message
      </label>
      <button type="submit">Get in Touch</button>
    </form>
  );
};

export default Form;
