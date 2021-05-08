import "./sectionc.scss";
import chart from "./image/sectionc.png"

function Secc() {
    return(
        <div className="sectionc">
            <div className="sectionc_sidea">
               <span className="sectionc_head"> Select your business and<br/> lets growth</span>
               <p className="hero_content_detail">Sed enim vulputate sollicitudin metus amet nam utrices <br/> ut. Sit facilisi scelerisque eget molestie adipiscing ipsum. <br/> Odio lectus lorem dui mauris.</p>
               <button className="hero_button">Explore</button>
            </div>
            <img src={chart} alt="" className="sectioncimg" />
            
        </div>
    )
}

export default Secc;