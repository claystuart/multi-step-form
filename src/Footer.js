import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./css/footer.css";

export default function Footer() {
    return (
        <footer>
            <button className="btn btn-back">
                Go Back
            </button>
            <button className="btn btn-forward">
                Next Step
            </button>
        </footer>
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