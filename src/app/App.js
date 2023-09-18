import '../styles/App.css';
import Header from '../components/Header/Header';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AboutPage from '../views/about';
import ContactPage from '../views/contact';
import HomePage from '../views/home';
import ProjectsPage from '../views/projects';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      
    </Router>
  
  );
}

export default App;
