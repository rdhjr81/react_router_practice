import { Fragment } from "react";
import { Route, useParams, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "1",
    author: "joe schmoe",
    text: "react is great",
  },
  {
    id: "2",
    author: "tom thom",
    text: "react is peachy",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found</p>;
  }

  const quotePath = `/quotes/${params.quoteId}`;
  const quoteCommentPath = quotePath + "/comments";
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={quotePath} exact>
        <div className="centered">
          <Link className="btn--flat" to={quoteCommentPath}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={quoteCommentPath}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
