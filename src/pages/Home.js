import Welcome from "../components/welcome-section/Welcome";
import MySkills from "../components/welcome-section/MySkills";
import LoadingPage from "../components/loading/LoadingPage";
import { useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 2000);
  return (
    <>
      {isLoading ? (
        <div>
          <Welcome /> <MySkills />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default Home;
