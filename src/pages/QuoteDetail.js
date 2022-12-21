import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const params = useParams();
  const DUMMY_QUOTES = [
    { id: "q1", text: "Learning React is Fun!", author: "Hayaa" },
    { id: "q2", text: "Learning React is Great!", author: "Max" },
  ];

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return (
      <div className="centered">
        <h2>No Quote Found!</h2>
      </div>
    );
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
