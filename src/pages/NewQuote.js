import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useHistory } from "react-router-dom";
import { Fragment, useEffect } from "react";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    sendRequest(quoteData);
    history.push("/quotes");
  };

  return (
    <Fragment>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuote;
