import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeChange } from "../themeSlice";
import { BsCloudSunFill } from "react-icons/bs";
import { IoCloudyNightSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  // const [theme, setTheme] = React.useState(true);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  React.useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "#2a2b2e";
      document.body.style.color = "white";
    }
  }, [theme]);
  return (
    <header className="Header">
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/post">Post</Link>
        </ul>
        {theme ? <BsCloudSunFill id="react_icon" onClick={() => dispatch(themeChange())}>switch theme</BsCloudSunFill> :
        <IoCloudyNightSharp id="react_icon" onClick={() => dispatch(themeChange())}>switch theme</IoCloudyNightSharp>}
      </nav>
    </header>
  );
};

export default Header;
