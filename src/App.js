import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import { Home } from './pages/Home'
import { Education } from './pages/Education'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { NavBar } from './pages/NavBar'

function App() {
  return (
    <div style={{backgroundColor: "#F7F5E6", width:"100vw", minHeight:"100vh", backgroundSize: "cover"}} className="app-div">
      <Router>
        <div>
          <NavBar/>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Redirect to="/home"/>
            </Route>
          </Switch>
        </div>
      </Router>
      <Fade bottom duration={1800} delay={300}>
        <p className="footer-text mb-0 pb-4">John Furlong (2021)</p>
      </Fade>
    </div>
  );
}

export default App;
