import classes from "./Socials.module.css";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <div className={classes.icons}>
      <a href="https://www.github.com/Trust-007">
        <BsGithub className={classes.github} />
      </a>
      <a href="https://www.linkedin.com/in/trust-simeon">
        <BsLinkedin className={classes.linkedin} />
      </a>
      <a href="https://www.twitter.com/simeontrust7">
        <BsTwitter className={classes.twitter} />
      </a>
      <a href="https://www.instagram.com/trustsimeon/">
        <BsInstagram className={classes.instagram} />
      </a>
    </div>
  );
};

export default Socials;
