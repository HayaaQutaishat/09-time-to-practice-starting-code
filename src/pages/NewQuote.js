import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [history, status]);

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    sendRequest(quoteData);
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === "pending"} />
  );
};

export default NewQuote;
