import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/Navigation';
import MainMenu from './content/MainMenu';
import InfoBar from './components/InfoBar';
import profilepic from './Image/profilepic.png'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className = "content">
        <Router>
          <Route exact path="/" component = {MainMenu}/>
        </Router>
        <InfoBar 
          className = "infobar"
          image = {profilepic}
        />
        </div>
    </div>
  );
}

export default App;
