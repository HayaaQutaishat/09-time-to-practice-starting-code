import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/quotes">All Quotes</Link>
          </li>
          <li>
            <Link to="/new-quote">New Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
