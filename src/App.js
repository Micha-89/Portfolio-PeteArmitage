import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Design from './components/design/Design';
import Writing from './components/writing/Writing';
import Music from './components/music/Music';
import About from './components/about/About';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/design' component={Design}/>
        <Route path='/writing' component={Writing}/>
        <Route path='/music' component={Music}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
