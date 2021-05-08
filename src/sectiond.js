import "./sectiond.scss";
import door from "./image/sectiond.png";
import head from "./image/secd_head.png";
import carda from "./image/sectiond_carda.png";
import cardb from "./image/sectiond_cardb.png";
import cardc from "./image/sectiond_cardc.png";

function Secd() {
    return(
        <div className="sectiond">
           
                <div className="sectiond_cont">
                    <img src={door} alt="" className="sectiond_img" />
                    <div className="sectiond_detail">
                        <img src={head} alt="" className="secd_head" />  
                        <span className="sectiond_head">Ready to invest</span> 
                        <div>
                            <p className="hero_content_detail">Sed enim vulputate sollicitudin metus amet nam utrices <br/> ut. Sit facilisi scelerisque eget molestie adipiscing ipsum. <br/> Odio lectus lorem dui mauris.</p>
                        </div>  
                        <div className="secd_cards">
                            <div className="secd_cards_element">
                                <img src={carda} alt="" className="secd_card_head" />  
                                <div className="secd_card_title">Lakica F&B</div>
                                <p className="secd_card_subtitle">Start from</p>
                                <div className="card_price">$328.00</div>  
                                <button className="card_button">Invest</button>
                                <p className="secd_card_subtitle">Divide at 3 month</p>
                            </div>
                            <div className="secd_cards_element">
                                <img src={cardb} alt="" className="secd_card_head" />  
                                <div className="secd_card_title">Lakica F&B</div>
                                <p className="secd_card_subtitle">Start from</p>
                                <div className="card_price">$328.00</div>  
                                <button className="card_button">Invest</button>
                                <p className="secd_card_subtitle">Divide at 3 month</p>
                            </div>
                            <div className="secd_cards_element">
                                <img src={cardc} alt="" className="secd_card_head" />  
                                <div className="secd_card_title">Lakica F&B</div>
                                <p className="secd_card_subtitle">Start from</p>
                                <div className="card_price">$328.00</div>  
                                <button className="card_button">Invest</button>
                                <p className="secd_card_subtitle">Divide at 3 month</p>
                                
                            </div>
                        </div>           
                    </div>
                </div>
                <button className="contact_final_button">Discover all Business</button>
        </div>
    )
}

export default Secd;