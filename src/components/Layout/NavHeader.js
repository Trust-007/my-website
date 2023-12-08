import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillGridFill, BsFillChatSquareTextFill } from "react-icons/bs";

import classes from "./NavHeader.module.css";

const NavHeader = () => {
  return (
      <nav>
        <ul>
          <li>
            <p>Home</p>
            <NavLink
              to="/home"
              className={(data) => (data.isActive ? classes.active : "")}
            >
              <FaHome className={classes.Icon} />
            </NavLink>
          </li>
          <li>
            <p>Portfolio</p>
            <NavLink
              to="/portfolio"
              className={(data) => (data.isActive ? classes.active : "")}
            >
              <BsFillGridFill className={classes.Icon} />
            </NavLink>
          </li>
          <li>
            <p>Contact</p>
            <NavLink
              to="/contact"
              className={(data) => (data.isActive ? classes.active : "")}
            >
              <BsFillChatSquareTextFill className={classes.Icon} />
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default NavHeader;
