import { Fragment } from "react";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useLocation, useHistory } from "react-router-dom";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const location = useLocation();
  const history = useHistory();

  console.log(location);

  const queryParams = new URLSearchParams(location.search);
  const isSortingAsc = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

  const toggleSortHandler = () => {
    // history.push("/quotes?sort=" + (isSortingAsc ? "desc" : "asc"));
    history.push(
      `${location.pathname}?sort=` + (isSortingAsc ? "desc" : "asc")
    );
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={toggleSortHandler}>
          Sort {isSortingAsc ? "Descedning" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
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
