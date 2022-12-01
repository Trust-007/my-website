import MyContact from "../components/about-section/MyContact";
import LoadingPage from "../components/loading/LoadingPage";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 2000);
  return <>{isLoading ? <MyContact /> : <LoadingPage />}</>;
};

export default Contact;
