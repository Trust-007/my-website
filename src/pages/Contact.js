import MyContact from "../components/about-section/MyContact";
import LoadingPage from "../components/loading/LoadingPage";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    document.title = 'Contact';
  },[])
  setTimeout(() => {
    setIsLoading(true);
  }, 2000);
  return <>{isLoading ? <MyContact /> : <LoadingPage />}</>;
};

export default Contact;
