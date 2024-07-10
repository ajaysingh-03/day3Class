import './header.css'
// import Quote from '../Components/Quote/quote';
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div className="header-container">
            <div className="header__logo">
                <a href="#">
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                    <span>GeekFoods</span>
                </a>
            </div>
                <div className="header__links">
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="/quote">Quote</Link></li>
                        <li><Link to="/restaurant">Resturants</Link></li>
                        <li><Link to="/food">Foods</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            <div className="header__btn">
                <button>Get Started</button>
                <i></i>
            </div>
        </div>
    )
}
export default Header;