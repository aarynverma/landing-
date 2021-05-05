import "./hero.css";

function Hero() {
    return (
      <div className="navbar">
        <h1 className="logo">L O G O</h1>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Services</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>
    );
  }
  
  export default Hero;