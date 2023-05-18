import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom"
import "./css/footer.css";

export default function Footer() {
    return (
        <footer>
            <Hyperlink direction="back" className="btn btn-back">Go Back</Hyperlink>
            <Hyperlink direction="next" className="btn">Next Step</Hyperlink>
        </footer>
    );
}

// Wrapper to add isActive path resolution for highlighting Active link
function Hyperlink({ direction, children, ...props }) {
    // className={isActive ? "activeDiv" : ""}
    let next, back;
    switch (useLocation().pathname) {
        case "/":
            next = "/plan"
            back = "finish"
            break
        case "/plan":
            next = "/addons"
            back = "/"
            break
        case "/addons":
            next = "/finish"
            back = "/plan"
            break
        case "/finish":
            next = "thankyou"
            back = "/addons"
            break
        default:
            next = "/"
            back = "/thankyou"
            break
    }
    return (
        <div >
            <Link to={back} {...props}>
                {children}
            </Link>
        </div>
    )
}