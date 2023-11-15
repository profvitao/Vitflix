import "./button.css";

function ScrollToTheTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <button onClick={handleClick}>&#9650;</button>;
}

export default ScrollToTheTop;
