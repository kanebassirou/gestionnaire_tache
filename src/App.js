import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Home() {
  return <h2>Accueil</h2>;
}

function About() {
  return <h2>À propos</h2>;
}
function Contact() {
  return <h2>Nos contact</h2>;

}
function User() {
  let { userId }  = useParams();
  return <h2>Utilisateur {userId}</h2>;
}
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Nos contact</Link></li>
           <li><Link to="/user/1">Utilisateur 1</Link></li>
           <li><Link to="/user/2">Utilisateur 2</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userId" element ={<User />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;