import './App.css';
import { About } from './Components/about';
import { Home } from './Components/home';
import { Navbar } from './Components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Rain } from './Components/rain';
import { Projects } from './Components/projects';
import { ContactMe } from './Components/contact';
import { NotFound } from './Components/notfound';

function App() {
  
  return (
    <Router>
      <Rain />
      <Routes>
        <Route path="/" element={<> <Navbar /> <Home /> </>} />
        <Route path="/about" element={<> <Navbar /> <About /> </>} />
        <Route path="/projects" element={<> <Navbar /> <Projects /> </>} />
        <Route path="/contact" element={<> <Navbar /><ContactMe /> </>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
