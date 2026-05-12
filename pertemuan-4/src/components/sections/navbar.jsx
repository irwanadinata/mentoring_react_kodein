import burgericon from "../../assets/burgerIcon.png";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
        <div className="logoMerk">
            <div><img src={logo} alt="" /></div>
            <div className="navbarMerk">Lasles<span className="navbarVpnWord">VPN</span></div>
            <div className="burgerIcon">
                <img src={burgericon} alt="" srcSet="" />
            </div>
        </div>
        <div className="mainRoute">
            <a href="" className="navbarRoute">About</a>
            <a href="" className="navbarRoute">Features</a>
            <a href="" className="navbarRoute">Pricing</a>
            <a href="" className="navbarRoute">Testimonials</a>
            <a href="" className="navbarRoute">Help</a>
        </div>
        <div className="sign">
            <button>Sign In</button>
            <button>Sign up</button>
        </div>
    </div>
  );
}

export default Navbar;
