import { TypeAnimation } from "react-type-animation";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <TypeAnimation
        sequence={[
          "Welcome",
          3000,
          "Bienvenue",
          3000,
          "Bienvenidas",
          3000,
          "Willkommen",
          3000,
          "Yōkoso",
          3000,
          "'Ahlan Bik",
          3000,
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        speed={0}
      />
      <div className={classes.contain_paragraph}>
        <h2>
          I'm Trust, <br />
          Full-Stack Developer
        </h2>
        <p>React, Rails, & Laravel Enthusiast</p>
      </div>
    </div>
  );
};

export default Welcome;
