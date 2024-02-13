import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
  // Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" Component={Users} />
          <Route path="/places/new" Component={NewPlaces} />
          {/* <Redirect path="/" /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
