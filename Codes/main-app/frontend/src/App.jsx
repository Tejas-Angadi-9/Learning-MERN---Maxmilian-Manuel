import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Users} />
      </Routes>
    </Router>
  );
}

export default App;
