import React from "react";
import classes from "./ProgressBar.module.css"

const ProgressBar = (props) =>{
    
    const progress = props.progress;
    const delay = props.delay
    return(
        <div className={classes.chart_bar} >
             <div 
               style={{ width: progress,  animationDelay: delay}}
               className={classes.chart_bar__fill} 
             ></div>
        </div>
    )
}
export default ProgressBar;
