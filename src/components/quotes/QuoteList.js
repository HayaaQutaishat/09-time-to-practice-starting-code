import { Fragment } from "react";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useLocation, useHistory } from "react-router-dom";

const QuoteList = (props) => {
  const location = useLocation();
  const history = useHistory();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAsc = queryParams.get("sort") === "asc";

  const toggleSortHandler = () => {
    history.push("/quotes?sort=" + (isSortingAsc ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={toggleSortHandler}>
          Sort {isSortingAsc ? "Descedning" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
