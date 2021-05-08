import "./contact.scss";

function Contact() {
    return(
        <div className="contact">
            
            <div className="contact_main">
                <div className="contact_cont">
                    <div className="contact_head">Everday best <br/> deal</div>
                    <p className="contact_headb">Sed enim vulputate sollicitudin metus amet <br/> nam utrices  ut. Sit facilisi scelerisque eget<br/> molestie adipiscing ipsum.</p>
                </div>
                <div className="contact_second">
                    <h1 className="contact_subtitle">Join our community</h1>
                    <div>
                        <input type="text" className="mail" placeholder="email address"/>
                        <button className="contact_button">Explore</button>
                    </div>
                    <p className="contact_subhead">You will recieve every news and invest tips</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;