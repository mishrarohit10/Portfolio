import './App.css';
import { About } from './Components/about';
import { Home } from './Components/home';
import { Navbar } from './Components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Rain } from './Components/rain';
import { Projects } from './Components/projects';
import { ContactMe } from './Components/contact';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Rain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<ContactMe/>} />
      </Routes>
    </Router>
  );
}

export default App;
