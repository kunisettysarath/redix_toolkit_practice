import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeChange } from "../themeSlice";
import { BsCloudSunFill } from "react-icons/bs";
import { IoCloudyNightSharp } from "react-icons/io5";

const Header = () => {
  // const [theme, setTheme] = React.useState(true);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme, "----------");

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
            <>Home</>
          </li>
          <li>Post</li>
        </ul>
        {theme ? <BsCloudSunFill onClick={() => dispatch(themeChange())}>switch theme</BsCloudSunFill> :
        <IoCloudyNightSharp onClick={() => dispatch(themeChange())}>switch theme</IoCloudyNightSharp>}
      </nav>
    </header>
  );
};

export default Header;
