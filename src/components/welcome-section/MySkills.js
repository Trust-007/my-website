//import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MySkills.module.css";

const MySkills = () => {
  //   const myRef = useRef();
  //   //   const [mySkillsIsVisible, setMySkillsIsVisible] = useState();
  //   //   useEffect(() => {
  //   //     const observer = new IntersectionObserver((entries) => {
  //   //       const entry = entries[0];
  //   //       setMySkillsIsVisible(entry.isIntersecting);
  //   //     });
  //   //     observer.observe(myRef.current);
  //   //   }, []);

  return (
    <>
      <div className={classes.contain}>
        <div className={classes.poster}>
          <h1>About</h1>
        </div>
        <div className={classes.skills_section}>
          <div>
            My name is Simeon Trust, i am a Software engineer and a Data
            Analyst. I live in Nigeria in the city of lagos. I am currently
            studying Mathematics at the University of Ibadan. I love to code, go
            swimming, play basketball, also like video games and i love me some
            good music.
          </div>
        </div>
      </div>

      <div className={classes.next_step}>
        <p>Okay, so now you know a little about me, Lets talk business.</p>

        <div className={classes.directions}>
          <Link to="/contact" className={classes.directions_btn}>
            Contact
          </Link>
          <Link to="/portfolio" className={classes.directions_btn}>
            Portfolio
          </Link>
        </div>
      </div>
    </>
  );
};

export default MySkills;
