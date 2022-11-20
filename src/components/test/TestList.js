import { Link } from "react-router-dom";

const TestList = (props) => {
  return (
    <section>
      <h1>List of stuff</h1>
      <ul>
        <li>
          <Link to="/test/item/1">item 1</Link>
        </li>
        <li>
          <Link to="/test/item/2">item 2</Link>
        </li>
      </ul>
    </section>
  );
};
export default TestList;
