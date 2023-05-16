import "./Header.css";

function Header() {
    return (
        <header>
            <nav className="siteNav">
                <input className="nav-radio" type="radio" id='page1'
                    name="nav" value='1' defaultChecked ></input>
                <label htmlFor="page1" className="nav-label">1</label>

                <input className="nav-radio" type="radio" id='page2'
                    name="nav" value='2'></input>
                <label htmlFor="page2" className="nav-label">2</label>

                <input className="nav-radio" type="radio" id='page3'
                    name="nav" value='3'></input>
                <label htmlFor="page3" className="nav-label">3</label>

                <input className="nav-radio" type="radio" id='page4'
                    name="nav" value='4'></input>
                <label htmlFor="page4" className="nav-label">4</label>
            </nav>
        </header>
    );
}

export default Header;