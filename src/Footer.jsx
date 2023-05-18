import { Link, useLocation } from "react-router-dom"
import "./css/footer.css";

export default function Footer() {
    const pages = ["/", "/plan", "/addons", "/finish", "/thankYou"];
    return (
        <footer>
            <BackButton pages={pages}>Go Back</BackButton>
            <NextButton pages={pages}>Next Step</NextButton>
        </footer>
    )
}

function BackButton({ pages, children }) {
    let currentPage = pages.indexOf(useLocation().pathname)

    return (
        <Link to={pages[--currentPage]}
            className={currentPage < 0 || currentPage > 2 ? "hideBtn" : "btn back"}>
            {children}
        </Link>
    );
}

function NextButton({ pages, children }) {
    let currentPage = pages.indexOf(useLocation().pathname)
    let css = "btn next"

    if (currentPage === pages.indexOf('/finish')) {
        css = "btn next confirm"
        children = "Confirm"
    }
    else if (currentPage > pages.indexOf('/finish')) {
        css = "hideBtn"
    }

    return (
        <Link to={pages[++currentPage]} className={css}>
            {children}
        </Link>
    )
}