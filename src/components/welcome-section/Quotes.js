import { useEffect, useState } from "react";
import classes from "./Quotes.module.css";

const Quotes = () => {
  const api_key = process.env.REACT_APP_KEY;
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    // const categories = ["courage", "alone", "cool", "life", "fear", "dreams"];
    // const counter = Math.floor(Math.random() * 6);
    try {
      // ?category=${categories[counter]}
      const fetchData = async () => {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes',
          {
            method: "GET",
            headers: {
              "X-Api-Key": api_key,
              "Content-Type": "application/json",
            },
          }
        );
        const newData = await response.json();
        const first = newData[0];
        setQuotes(first);
      };
      fetchData();
    } catch (err) {
      throw new Error(err);
    }
  }, [api_key]);

  const { quote, author } = quotes;

  return (
    <div className={classes.container}>
      <blockquote>{`"${quote}"`}</blockquote>
      <div className={classes.author_category}>
        <p className={classes.author}>{`-${author}`}</p>
      </div>
    </div>
  );
};

export default Quotes;
