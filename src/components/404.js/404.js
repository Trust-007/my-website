import { Link } from "react-router-dom";
import classes from "./404.module.css";

const Four0Four = () => {
  return (
    <div className={classes.container}>
      <h1>
        <span>404</span>
        <br /> Page not found
      </h1>
      <p>
        The link you clicked may be broken or the page may have been removed.
      </p>
      <Link to="/home">Return Home?</Link>
    </div>
  );
};

export default Four0Four;
