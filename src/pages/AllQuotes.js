import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", text: "Learning React is Fun!", author: "Hayaa" },
  { id: "q2", text: "Learning React is Great!", author: "Max" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
