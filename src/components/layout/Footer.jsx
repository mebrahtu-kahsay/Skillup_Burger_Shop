
import {  AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return(
        <footer>
            <div>
                <h2>Burger Shop</h2>
                <p>We are trying to give you the best taste possible.</p>
                <br />
                <em>We give attention to genuine feedback.</em>
                <strong>All right received @burgershop</strong>
            </div>
            <aside>
                <h4>Follow Us</h4>
                <a href="https://youtube.com/">
                    <AiFillYoutube />
                </a>
                <a href="https://www.instagram.com/">
                    <AiFillInstagram />
                </a>
                <a href="https://github.com/">
                    <AiFillGithub />
                </a>
            </aside>
    </footer>

    );
    
}

export default Footer;