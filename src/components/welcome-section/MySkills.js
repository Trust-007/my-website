import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MySkills.module.css";
import Quotes from "./Quotes";

const MySkills = () => {
  const myRef = useRef();
  const [mySkillsIsVisible, setMySkillsIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMySkillsIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <>
      <div className={classes.contain}>
        <div className={classes.poster}>
          <h1>About</h1>
        </div>
        <div className={classes.skills_section}>
          <div className={classes.about_intro}>
            <h2>
              I am a Software Engineer and an aspiring Data Scientist from
              Lagos, Nigeria.
            </h2>
            <p>
              I started my tech journey as a self taught programmer and though
              it was a little challenging combating with bugs and all, I was
              able to press on because of the love I had for it. As I kept on
              growing in knowledge of the tech world I came to realize that it
              was really vast and this helped me to keep an open mind knowing
              that there is always more to learn. Through experience I have seen
              that research is key to success because there isn't any problem
              out there which hasn't been attempted. I have a serious passion
              for UI effects, animations and creating intuitive, dynamic user
              experiences.
            </p>
            <p>
              Well-organised person, problem solver, hard-working, and
              relentless. Fell in love with pair-programming and scrum habits
              completing course-work at Microverse. Have a lot of interest in
              Artificial intelligence and Machine learning.
            </p>
            <h3 ref={myRef}>Skills</h3>
            <div className={classes.chart}>
              <span>Front-end</span>
              <footer>
                <div
                  style={mySkillsIsVisible ? { width: "95%" } : { width: "0" }}
                  className={classes.front_end}
                ></div>
              </footer>
            </div>

            <div className={classes.chart}>
              <span>Back-end</span>
              <footer>
                <div
                  style={mySkillsIsVisible ? { width: "75%" } : { width: "0" }}
                  className={classes.back_end}
                ></div>
              </footer>
            </div>

            <div className={classes.chart}>
              <span>ReactJS</span>
              <footer>
                <div
                  style={mySkillsIsVisible ? { width: "70%" } : { width: "0" }}
                  className={classes.react}
                ></div>
              </footer>
            </div>

            <div className={classes.chart}>
              <span>Rails</span>
              <footer>
                <div
                  style={mySkillsIsVisible ? { width: "55%" } : { width: "0" }}
                  className={classes.rails}
                ></div>
              </footer>
            </div>

            <p className={classes.more_skills}>
              To see all my skills checkout my{" "}
              <a href="https://www.linkedin.com/in/trust-simeon">linkedin</a> or{" "}
              <a href="https://www.github.com/Trust-007">github</a> profiles.
            </p>

            <h3>Hobbies</h3>
          </div>
        </div>
      </div>
      <div className={classes.next_step}>
        <Quotes />
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
