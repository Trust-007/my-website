import ProjectCard from "./ProjectCard";
import todo from "../../assets/todo.png";
import books from "../../assets/books.png";
import convention from "../../assets/convention.png";
import expense from "../../assets/expense.png";
import food from "../../assets/food.png";
import movies from "../../assets/movies.png";
import quotes from "../../assets/quotes.png";
import shop from "../../assets/shop.png";

import classes from "./Projects.module.css";
const projects = [
  {
    id: "1",
    image: food,
    liveLink: "https://food-order-demo.netlify.app/",
    sourceLink: "https://github.com/Trust-007/Food-Order",
    alt: "image of food order site",
  },
  {
    id: "2",
    image: expense,
    liveLink: "https://a-expenses-tracker.netlify.app/",
    sourceLink: "https://github.com/Trust-007/Expenses-Tracker",
    alt: "image of expense tracker site",
  },
  {
    id: "3",
    image: convention,
    liveLink: "https://trust-007.github.io/Gaming-Website/html/index",
    sourceLink: "https://github.com/Trust-007/Gaming-Website",
    alt: "image of convention site",
  },
  {
    id: "4",
    image: books,
    liveLink: "https://trust-007.github.io/Awesome-Books/",
    sourceLink: "https://github.com/Trust-007/Awesome-Books",
    alt: "image of food order site",
  },
  {
    id: "5",
    image: quotes,
    liveLink: "https://my-great-quotes-app.netlify.app/",
    sourceLink: "https://github.com/Trust-007/Quotes-site",
    alt: "image of quotes site",
  },
  {
    id: "6",
    image: todo,
    liveLink: "https://todo-list-epdf.onrender.com/",
    sourceLink: "https://github.com/Trust-007/Todo-List",
    alt: "image of todo-list site",
  },
  {
    id: "7",
    image: movies,
    liveLink: "https://asharanjith.github.io/Javascript-Group-Capstone/",
    sourceLink: "https://github.com/asharanjith/Javascript-Group-Capstone",
    alt: "image of movies site",
  },
  {
    id: "8",
    image: shop,
    liveLink: "https://trust-cart-redux.netlify.app/",
    sourceLink: "https://github.com/Trust-007/Shopping-Cart-with-redux",
    alt: "image of shopping site",
  },
];

const Projects = () => {
  return (
    <div >
      <div className={classes.pop_message}>
        <p>
          Here are some of the recent projects I've worked or collaborated on.
          Click link below to see all my projects on Github.
        </p>
        <a
          href="https://github.com/Trust-007?tab=repositories"
          className={classes.more_projects}
        >
          See more!
        </a>
      </div>
      <ul className={classes.container}>{projects.map((project) => {
    const { image, liveLink, sourceLink, alt, id } = project;
    return <ProjectCard key={id} data={{ image, liveLink, sourceLink, alt }} />;
  })}</ul>;
    </div>
  );
};

export default Projects;
