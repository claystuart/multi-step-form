import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./css/header.css";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <Hyperlink to="/multi-step-form" className="link">1</Hyperlink>
                <Hyperlink to="/plan" className="link">2</Hyperlink>
                <Hyperlink to="/addons" className="link">3</Hyperlink>
                <Hyperlink to="/finish" className="link">4</Hyperlink>
            </nav>
        </header >
    );
}

// Wrapper to add isActive path resolution for highlighting Active link
function Hyperlink({ to, children, ...props }) {
    // useResolvePath returns an object with a path property to url being resolved
    const resolvedPath = useResolvedPath(to)

    // useMatch returns object if path matches current location and null otherwise
    const isActive = useMatch({ path: resolvedPath.pathname })

    return (
        <div className="desktop">
            <div className={isActive ? "activeDiv" : ""}>
                <Link
                    to={to}
                    {...props}
                    className={isActive ? "link activeLink" : "link"}>
                    {children}
                </Link>
            </div>
            <label className="desktop-information">
                <p>Step 1</p>
                <p>Your info</p>
            </label>
        </div >
    )
}