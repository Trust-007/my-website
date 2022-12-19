import Projects from "../components/portfolio/Projects";
import LoadingPage from "../components/loading/LoadingPage";
import { useState, useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 2000);

  return <>{isLoading ? <Projects /> : <LoadingPage />}</>;
};

export default Portfolio;
