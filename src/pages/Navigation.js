import { Outlet, Link } from "react-router-dom";
import "./css/Navigation.css";

function Navigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">1</Link>
                    </li>
                    <li>
                        <Link to="/plan">2</Link>
                    </li>
                    <li>
                        <Link to="/addons">3</Link>
                    </li>
                    <li>
                        <Link to="/finish">4</Link>
                    </li>
                    <li>
                        <Link to="/thankyou">Thank You</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </header>
    )
};

export default Navigation;
