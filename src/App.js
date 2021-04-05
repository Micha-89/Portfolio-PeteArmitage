import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Design from './components/design/Design';
import Writing from './components/writing/Writing';
import Music from './components/music/Music';
import About from './components/about/About';
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Spring } from "react-spring";

function App() {

  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 20;

        if(newValue === 100){
          clearInterval(interval);
        }

        return newValue;
      })
    },1000);

    setTimeout(() => {
      setLoading(false)
    }, 6000);

  }, []);

  return (
    <div className="App">

    { loading ? 
    
    <div className="loadScreen">
      <img className="loadImage" src="/My LOGO 2.jpg" alt="loader"/>
      <progress max="100" value={value}></progress>
    </div>

    :
 
    <div>
      <Navbar />
        
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/design' component={Design}/>
        <Route path='/writing' component={Writing}/>
        <Route path='/music' component={Music}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>

    }
  
    </div>
  );
}

export default App;
