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
    liveLink: "https://food-order-demo.netlify.app/",
    sourceLink: "https://github.com/Trust-007/Food-Order",
    alt: "image of food order site",
  },
  {
    image: expense,
    liveLink: "https://a-expenses-tracker.netlify.app/",
    sourceLink: "https://github.com/Trust-007/Expenses-Tracker",
    alt: "image of expense tracker site",
  },
  {
    image: convention,
    liveLink: "https://trust-007.github.io/Gaming-Website/html/index",
    sourceLink: "https://github.com/Trust-007/Gaming-Website",
    alt: "image of convention site",
  },
  {
    image: books,
    liveLink: "https://trust-007.github.io/Awesome-Books/",
    sourceLink: "https://github.com/Trust-007/Awesome-Books",
    alt: "image of food order site",
  },
  {
    image: quotes,
    liveLink: "https://my-great-quotes-app.netlify.app/",
    sourceLink: "https://github.com/Trust-007/Quotes-site",
    alt: "image of quotes site",
  },
  {
    image: todo,
    liveLink: "https://",
    sourceLink: "https://",
    alt: "image of todo-list site",
  },
  {
    image: leaderboard,
    liveLink: "https://trust-007.github.io/LeaderBoard/dist/",
    sourceLink: "https://github.com/Trust-007/LeaderBoard",
    alt: "image of leaderboard site",
  },
  {
    image: shop,
    liveLink: "https://trust-cart-redux.netlify.app/",
    sourceLink: "https://github.com/Trust-007/Shopping-Cart-with-redux",
    alt: "image of shopping site",
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
