import { useState } from "react";
import "../App.css";
import { FaCaretUp } from "react-icons/fa6";

const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button className={`back-to-top-button ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <FaCaretUp></FaCaretUp>
    </button>
  );
};

export default BackTop;
