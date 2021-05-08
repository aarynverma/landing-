import "./sectionb.scss";
import border from "./image/sectionb.png";

function Secb() {
    return(
        <div className="secb">
            <div className="sec_cont">
                <div >
                    <div className="conta">
                   <p className="paraa"><span className="paraa_head"> More than</span><br/> <span>21.000</span><br/><span className="paraaa">"Business ready to<br/> invest"</span> </p>
                   
                </div>
                <p className="parab">Sed enim vulputate solliciudin <br/>metus amet nam ultrices ut. Sit <br/>facilisi scelerisque eget molestie <br/> adipiscing ipsum.</p>
                </div>
                <div className="contb">
                <img src={border} alt="" className="sectionbimg" />
                   <div className="contb_int"> 
                   
                       Divident interest <br/> <span className="contb_paraa">4,7%</span> <br/> <p className="contb_parab">"Every year <br/> growth your profit <br/>and find out new <br/> business"</p>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Secb;