import { Outlet } from "react-router-dom";
import Footer from "./../Footer";
import "./index.css"
import { logo } from "./../../assets/transfer"

function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div>
                        <img src={logo} alt="mealLogo" />
                    </div>
                    <div>
                        <input type="text" name="search"/>
                        <button>Q</button>
                    </div>
                    <div>
                        drpdwn
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Header;