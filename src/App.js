import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/search">{/* {SearchPage} */}</Route>
          <Route path="/">{/* {Home} */}</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
