import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeChange } from "../themeSlice";

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
        <button onClick={() => dispatch(themeChange())}>switch theme</button>
      </nav>
    </header>
  );
};

export default Header;
