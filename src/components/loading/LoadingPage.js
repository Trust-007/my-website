import rocket from "../../assets/Rocket.png";
import classes from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={classes.container}>
      <img src={rocket} alt="" />
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
