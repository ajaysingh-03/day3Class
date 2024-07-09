import './header.css'
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
                    <li><a href="">Home</a></li>
                    <li><a href="">Quote</a></li>
                    <li><a href="">Resturants</a></li>
                    <li><a href="">Foods</a></li>
                    <li><a href="">Contact</a></li>
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