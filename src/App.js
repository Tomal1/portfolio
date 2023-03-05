import logo from './logo.svg';
import './App.css';

import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Project/>
    </div>
  );
}

export default App;
