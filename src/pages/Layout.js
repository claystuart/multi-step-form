import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
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
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
