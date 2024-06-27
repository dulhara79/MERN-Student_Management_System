import "./App.css";
import ItemList from "./components/test";
import Header from "./components/header";
import Home from "./page/index.js";
import AddStudent from "./page/addStudent.js";
import AllStudent from "./page/allStudent.js";
import UpdateStudent from "./page/updateStudent.js";
import DeleteStudent from "./page/deleteStudent.js";
import PageNotFound from "./page/pageNotFound.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/all" exact Component={AllStudent} />
          <Route path="/add" exact Component={AddStudent} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/delete/:id" element={<DeleteStudent />} />
          <Route path="/test" exact Component={ItemList} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
