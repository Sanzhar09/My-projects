import './style.css'
import vk from "../../img/icons/vk.svg"
import instagram from "../../img/icons/instagram.svg"
import twitter from "../../img/icons/twitter.svg"
import gitHub from "../../img/icons/gitHub.svg"
import linkedIn from "../../img/icons/linkedIn.svg"

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://github.com/Sanzhar09?tab=repositories"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/sanzhar-adambekov-a0282b238/"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;