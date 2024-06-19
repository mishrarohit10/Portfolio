import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-container">

        <div className="navbar-title">
          <Link to="/">Home</Link>
        </div>

        <div className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/stats">Stats</Link>
        </div>
      </div>
    </div>
  );
}