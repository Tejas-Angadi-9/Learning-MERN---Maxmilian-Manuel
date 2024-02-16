import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
  // Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        {/* Here we just create the routes */}
        <Routes>
          <Route path="/" Component={Users} />
          <Route path="/:userId/places" Component={UserPlaces} />
          <Route path="/places/new" Component={NewPlaces} />
          {/* <Redirect path="/" /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
