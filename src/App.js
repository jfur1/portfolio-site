import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home'
import { Education } from './pages/Education'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { NavBar } from './pages/NavBar'

function App() {
  return (
    <div style={{backgroundColor: "#F7F5E6", height:"200%", minHeight:"100vh", backgroundSize: "cover"}}>
      <Router>
        <div>
          <NavBar/>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
