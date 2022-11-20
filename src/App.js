import { Redirect, Route } from "react-router-dom";
import TestItem from "./components/test/TestItem";
import TestList from "./components/test/TestList";

function App() {
  return (
    <div>
      <Route path="/test/list">
        <TestList />
      </Route>
      <Route path="/test/item/:id">
        <TestItem />
      </Route>
      <Route path="/" exact>
        <Redirect to="test/list" />
      </Route>
    </div>
  );
}

export default App;
