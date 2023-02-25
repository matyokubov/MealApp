import { Outlet } from "react-router-dom";
import Footer from "./../Footer"

function Header() {
    return (
        <>
            <div className="container">
                logo
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Header;