import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Users} />
        <Route path="/places/new" Component={NewPlaces} />
        {/* <Redirect path="/" /> */}
      </Routes>
    </Router>
  );
}

export default App;
