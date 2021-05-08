import footer from "./image/footer.png";
import arrow from "./image/up-arrow.svg"
import "./footer.scss";

function Footer() {
    return(
        <div className="footer">
            <div className="footer_component">
                <img src={footer} alt="" className="footer_image" />
                <div className="footer_ab">
                    <div className="footer_b">
                        <ul className="footer_rowa">
                            <div className="footer_ele">Home</div>
                            <div className="footer_ele">About</div>
                            <div className="footer_ele">invest</div>
                            <div className="footer_ele">contact</div>
                        </ul>
                        <ul className="footer_row">
                            <div className="footer_ele">Features</div>
                            <div className="footer_ele">Product</div>
                            <div className="footer_ele">Services</div>
                            <div className="footer_ele">Privacy</div>
                            <div className="footer_ele">Security</div>
                        </ul>
                        <ul className="footer_row">
                            <div className="footer_ele">Contact</div>
                            <div className="footer_ele">(098)127 865(Telp)</div>
                            <div className="footer_ele">Gron@inv.cs(mail)</div>
                            <div className="footer_ele">Twitter</div>
                            <div className="footer_ele">Facebook</div>
                        </ul>
                    </div>
                    <p className="footer_end">Copyright 2020 gron enterprise Term and condition<br/>Privacy and Policy</p>

                </div>
                
                    <img src={arrow} alt="" className="arrow" />
                
            </div>
        </div>
    )
}

export default Footer;