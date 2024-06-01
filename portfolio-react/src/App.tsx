import './App.css';
import profilepic from './Assests/eren-yeager.webp';
import { Navbar } from './Components/navbar';
import { useState } from 'react';
import hoverprofilepic from './Assests/Eren-motivationwebp.webp';

function App() {
  const [hoverd, setHoverd] = useState(profilepic);

  function isHovering() {
    setHoverd(hoverprofilepic);
  };

  function isNotHovering() {
    setHoverd(profilepic);
  };

  return (
    <> <Navbar />
    <div className="App">
      <div className="profile-pic-container">
        <img 
          className="portfolio" 
          src={hoverd}
          alt="profile-pic"
          onMouseEnter={isHovering}
          onMouseLeave={isNotHovering}
        />
      </div>

      {/* <div className="icons-container">
        <p>icon 1</p>
        <p>icon 2</p>
        <p>icon 3</p>
        <p>icon 4</p>
      </div> */}
    </div>
    </>
  );
}

export default App;
