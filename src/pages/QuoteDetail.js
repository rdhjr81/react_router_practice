import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quotes Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
            <p>comments for quote {params.quoteId}</p>
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
