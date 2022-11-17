import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import classes from './MySkills.module.css';
import WheelSvg from './WheelSvg';


const MySkills = () => {
   const myRef = useRef();
   const [mySkillsIsVisible, setMySkillsIsVisible] = useState();
   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         const entry = entries[0]
         setMySkillsIsVisible(entry.isIntersecting)
      })
      observer.observe(myRef.current)
   }, [])

   return (
      <>
         <div className={classes.container}>
            <div className={classes.contain} >
               <div className={classes.poster} >
                  <h1>About</h1>
               </div>
               <div className={classes.skills_section}>
                  <div>
                     My name is Simeon Trust, i am a Software engineer and a Data Analyst. I live in
                     Nigeria in the city of lagos. I am currently studying Mathematics at the University of Ibadan.

                     I love to code, go swimming, play basketball, also like video games and i love me some good music.
                  </div>
                  <div>
                     <h3>Languages</h3>
                     <ul ref={myRef} >
                        <div className={classes.skill} >
                           <li>HTML</li>
                           <ProgressBar delay='0.5s' progress={`${mySkillsIsVisible ? '95%' : '0%'}`} />
                        </div>
                        <div className={classes.skill}>
                           <li>CSS</li>
                           <ProgressBar delay='1s' progress={`${mySkillsIsVisible ? '95%' : '0%'}`} />
                        </div>
                        <div className={classes.skill}>
                           <li>Javascript</li>
                           <ProgressBar delay='1.5s' progress={`${mySkillsIsVisible ? '85%' : '0%'}`} />
                        </div>
                        <div className={classes.skill}>
                           <li>Python</li>
                           <ProgressBar delay='2s' progress={`${mySkillsIsVisible ? '90%' : '0%'}`} />
                        </div>
                        <div className={classes.skill}>
                           <li>Ruby</li>
                           <ProgressBar delay='2.5s' progress={`${mySkillsIsVisible ? '75%' : '0%'}`} />
                        </div>
                        <div className={classes.skill}>
                           <li>C#</li>
                           <ProgressBar delay='3s' progress={`${mySkillsIsVisible ? '70%' : '0%'}`} />
                        </div>
                     </ul>
                  </div>
                  <div>
                     <h3>Technologies</h3>
                     <div className={classes.engines_section}>
                        <ul>
                           <div className={classes.skill}>
                              <li>React</li>
                           </div>
                           <div className={classes.skill}>
                              <li>Redux</li>
                           </div>
                           <div className={classes.skill}>
                              <li>Rails</li>
                           </div>
                           <div className={classes.skill}>
                              <li>AWS</li>
                           </div>
                           <div className={classes.skill}>
                              <li>Sk-learn</li>
                           </div>
                           <div className={classes.skill}>
                              <li>Next.js</li>
                           </div>
                           <div className={classes.skill}>
                              <li>Numpy</li>
                           </div>
                           <div className={classes.skill}>
                              <li>Matplotlib</li>
                           </div>
                           <div className={classes.skill}>
                              <li>Pandas</li>
                           </div>
                        </ul>
                        <div>
                           <WheelSvg />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={classes.next_step}>
            Okay,so now you know a little about me, Lets talk business.
            <div className={classes.directions}>
               <Link to='/contact' className={classes.directions_btn}> Contact </Link>
               <Link to='/portfolio' className={classes.directions_btn}> Portfolio </Link>
            </div>
         </div>
      </>
   )
}

export default MySkills;