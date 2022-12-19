import MyHome from "../components/welcome-section/MyHome";
import LoadingPage from "../components/loading/LoadingPage";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    document.title = "TrustMe";
  }, []);
  setTimeout(() => {
    setIsLoading(true);
  }, 2000);
  return <>{isLoading ? <MyHome /> : <LoadingPage />}</>;
};

export default Home;
