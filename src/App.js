import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"
import Quiz from "./Components/Quiz/Quiz";
import Hunt from "./Components/Hunt/Hunt";

function App(){
  return (
    <Router>
    <div>
      <div className="nav">
        <ul>
        
          <li>
            <Link to="/hunt" style={{ textDecoration: 'none' , color:"white"}}>Word Hunt</Link>
          </li>
          <li>
            <Link to="/quiz" style={{ textDecoration: 'none', color:"white" }}>Quiz</Link>
          </li>
        </ul>
      </div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/hunt">
          <Hunt />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
export default App;
