import "./styles.css";
import Data from "./CoursesData";
import React from "react";
import Item from "./Item";

function Header() {
  const [display, setDisplay] = React.useState(true);
  function changeDisplay() {
    setDisplay((prevmode) => !prevmode);
  }
  const [toggleDisplay, setToggleDisplay] = React.useState(false);
  function changeToggle() {
    setToggleDisplay((prevdis) => !prevdis);
  }
  const word = display ? "show" : "hide";
  const disWord = toggleDisplay ? "show" : "hide";
  const test = Data.map((item) => {
    return (
      <div>
        {item.courseid > 1 && <hr />}
        <Item courseName={item.CourseName} />
      </div>
    );
  });
  return (
    <header className="header">
      <div className="toggle--menu">
        <a href="./index.html">
          <h1>Expand Skills</h1>
        </a>
        <img
          src={require("./images/toggle.png")}
          className="toggle--image"
          onClick={changeToggle}
        />
      </div>
      <div>
        <ul className={`header--options--${disWord}`}>
          <li onClick={changeDisplay}>Courses</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className={`header--courses--toggler ${word}`}>
        <ul>{test}</ul>
      </div>
    </header>
  );
}

export default Header;