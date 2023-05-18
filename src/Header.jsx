import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./css/header.css";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <Hyperlink to="/" className="link">1</Hyperlink>
                <Hyperlink to="/plan" className="link">2</Hyperlink>
                <Hyperlink to="/addons" className="link">3</Hyperlink>
                <Hyperlink to="/finish" className="link">4</Hyperlink>
            </nav>
        </header >

    );
}

// Wrapper to add isActive path resolution for highlighting Active link
function Hyperlink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <div className={isActive ? "activeDiv" : ""}>
            <Link to={to} {...props}
                className={isActive ? "link activeLink" : "link"}>
                {children}
            </Link>
        </div>
    )
}