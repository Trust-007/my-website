import classes from "./ProjectCard.module.css";
import todo from "../../assets/todo.png";
const ProjectCard = (props) => {
  const { image, liveLink, sourceLink, alt } = props.data;
  return (
    <li className={classes.card}>
      <div className={classes.sourceLive}>
        <a href={liveLink}>Live</a>
        <a href={sourceLink}>Source</a>
      </div>
      <img src={image} alt={alt} className={classes.pic} />
    </li>
  );
};

export default ProjectCard;
