import './App.css';
import { About } from './Components/about';
import { Home } from './Components/home';
import { Navbar } from './Components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Projects } from './Components/projects';
import { ContactMe } from './Components/contact';
import { NotFound } from './Components/notfound';
import { Stats } from './Components/stats';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> <Navbar /> <Home /> </>} />
        <Route path="/about" element={<> <Navbar /> <About /> </>} />
        <Route path="/projects" element={<> <Navbar /> <Projects /> </>} />
        <Route path="/contact" element={<> <Navbar /><ContactMe /> </>} />
        <Route path="/stats" element={<> <Navbar /> <Stats /> </>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
