import { Fragment } from "react";
import { useParams } from "react-router-dom";

const TestItem = (props) => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Test Item Page</h1>
      <p> This is a page about item {params.id}</p>
      <p> Everyone simply loves items with id {params.id}</p>
    </Fragment>
  );
};
export default TestItem;
