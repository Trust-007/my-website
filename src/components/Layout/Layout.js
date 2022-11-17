import NavHeader from "./NavHeader";
import classes from './Layout.module.css';

const Layout = (props) => {
  return(
    <div className={classes.layout}>
       <div>
        <NavHeader/>
       </div> 
       <div className={classes.container}>   
         {props.children}
       </div>
    </div>  
  )
}

export default Layout;