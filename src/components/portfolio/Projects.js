import ProjectCard from "./ProjectCard";
import todo from "../../assets/todo.png";
import books from "../../assets/books.png";
import convention from "../../assets/convention.png";
import expense from "../../assets/expense.png";
import food from "../../assets/food.png";
import leaderboard from "../../assets/leaderboard.png";
import quotes from "../../assets/quotes.png";
import shop from "../../assets/shop.png";

import classes from "./Projects.module.css";
const projects = [
  {
    image: food,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of food order site",
  },
  {
    image: expense,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of food order site",
  },
  {
    image: convention,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of food order site",
  },
  {
    image: books,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of food order site",
  },
  {
    image: quotes,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of food order site",
  },
  {
    image: todo,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of food order site",
  },
  {
    image: leaderboard,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of food order site",
  },
  {
    image: shop,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of food order site",
  },
];

const Projects = () => {
  const projectList = projects.map((project) => {
    const { image, liveLink, sourceLink, alt } = project;
    return <ProjectCard data={{ image, liveLink, sourceLink, alt }} />;
  });
  return <ul className={classes.container}>{projectList}</ul>;
};

export default Projects;
