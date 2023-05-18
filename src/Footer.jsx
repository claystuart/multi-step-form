import { Link, useLocation } from "react-router-dom"
import "./css/footer.css";

export default function Footer() {
    return (
        <footer>
            <Hyperlink button="back" className="btn back">Go Back</Hyperlink>
            <Hyperlink button="next" className="btn next">Next Step</Hyperlink>
        </footer>
    );
}

// Wrapper to add isActive path resolution for highlighting Active link
function Hyperlink({ button, children, ...props }) {
    // className={isActive ? "activeDiv" : ""}
    let next, back;
    let hideBackBtn = false;

    switch (useLocation().pathname) {
        case "/":
            next = "/plan"
            back = "finish"
            hideBackBtn = true
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


    // Hide "Go Back" button on '/' route
    return (
        <div className={hideBackBtn && button === "back" ? "hideBackBtn" : ""} >

            {/* Set direction of {to} for both buttons */}
            <Link to={button === "next" ? next : back} {...props}>
                {children}
            </Link>
        </div>
    )
}