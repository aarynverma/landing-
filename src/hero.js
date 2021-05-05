import "./hero.css";

function Hero() {
    return (
      <div classname="Main">
       <div classname="navbar">
        <span>L O G O</span>
        <div classname="nav_ele">
          <div classname="elements">Home</div>
          <div classname="elements">About</div>
          <div classname="elements">Invest</div>
          <div classname="elements">Help</div>
          <div classname="elements">Contact</div>
          <button>Login</button>
        </div>
       </div>
      </div>
    );
  }
  
  export default Hero;