import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/Navigation';
import MainMenu from './content/MainMenu';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className = "content">
        <Router>
          <Route exact path="/" component = {MainMenu}/>
        </Router>
        </div>
    </div>
  );
}

export default App;
