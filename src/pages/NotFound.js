import { useEffect } from "react";
import Four0Four from "../components/404.js/404.js";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return (
    <>
      <Four0Four />
    </>
  );
};

export default NotFound;
