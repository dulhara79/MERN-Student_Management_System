import "./App.css";
import AddStudent from "./components/addStudent";
import AllStudent from "./components/allStudent";
import ItemList from "./components/test";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/all" exact Component={AllStudent} />
          <Route path="/add" exact Component={AddStudent} />
          {/* <Router path="/" exact Component={Home} /> */}
          <Route path="/test" exact Component={ItemList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
