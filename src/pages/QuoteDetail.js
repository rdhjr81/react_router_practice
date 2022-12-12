import { Fragment, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  },[sendRequest])


  if(status === 'pending'){
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(status === 'error'){
    return <div className='centered focused'>
      {error}
    </div>
  }

  if (!loadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
