import "./hero.scss";
import hero from "./image/hero.png";
import carda from "./image/carda.png";
import cardb from "./image/cardb.png";
import cardc from "./image/cardc.png";

function Hero() {
    return (
      <div className= "main">
        <div className="navbar">
          <h1 className="logo">L O G O</h1>
          <ul className="nav-links">
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Invest</li>
            <li className="nav-link">Help</li>
            <li className="nav-link">Contact</li>
            <button className="login">Login</button>
          </ul>
        </div>
        <div className= "hero">
          <img className="hero_image" src={hero} alt="" />
          <div className="hero_content">
            <h4 className="hero_content_sub"> 
              WE ARE IN BETA
            </h4>
            <div className="hero_content_heading">
            <span className="h_c_h_c">Easy</span> Money <br/> Capital <span className="h_c_h_c">Invest</span>
            </div>
              <p className="hero_content_detail">Aliquam, est est,in vitae fames in. Adipiscing tincidunt<br/>
                eleifend ut mus turpis vestibulum. Sed enim vulputate <br/>
                solliciudin metus amet nam ultrices ut.
              </p>
              <button className="hero_button">Get Start</button>
          </div>
        </div>

        <div className="hero_sub">
          <div className="sub_head">
            Easy Step
          </div>
          <div className="card">
            <div className="cards">
              <img src={carda} alt="" className="cardimg"/>
              <div className="cont">Find your business <br/> invest taget </div>
            </div>
            <div className="cards">
              <img src={cardb} alt="" className="cardimg"/>
              <div className="cont">Happy investing <br/> and enjoy the profit </div>
            </div>
            <div className="cards">
              <img src={cardc} alt="" className="cardimg"/>
              <div className="cont">Create Agreement<br/> and invest plan </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
 