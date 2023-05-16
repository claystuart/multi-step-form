import { Outlet, Link } from "react-router-dom";
import "./css/Navigation.css";

function Navigation() {
    return (
        <header>
            <nav className="siteNav">
                <Link className="link"
                    to="/">1</Link>
                <Link className="link"
                    to="/plan">2</Link>
                <Link className="link"
                    to="/addons">3</Link>
                <Link className="link"
                    to="/finish">4</Link>
            </nav>

            <Outlet />
        </header>
    )
};

export default Navigation;
