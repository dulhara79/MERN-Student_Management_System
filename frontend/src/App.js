import "./App.css";
import Home from "./components/index";
import AddStudent from "./components/addStudent";
import AllStudent from "./components/allStudent";
import ItemList from "./components/test";
import Header from "./components/header";
import UpdateStudent from "./components/updateStudent";
import DeleteStudent from "./components/deleteStudent";
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
          <Route path="*" element={<center><h1>404 Not Found</h1></center>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
