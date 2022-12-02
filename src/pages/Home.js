import MyHome from "../components/welcome-section/MyHome";
import LoadingPage from "../components/loading/LoadingPage";
import { useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 2000);
  return <>{isLoading ? <MyHome /> : <LoadingPage />}</>;
};

export default Home;
