import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <input type="radio" id='page1' name="nav" value='1'></input>
                <label for="page1" className="nav-circle">1</label>

                <input type="radio" id='page2' name="nav" value='2'></input>
                <label for="page2" className="nav-circle">2</label>

                <input type="radio" id='page3' name="nav" value='3'></input>
                <label for="page3" className="nav-circle">3</label>

                <input type="radio" id='page4' name="nav" value='4'></input>
                <label for="page4" className="nav-circle">4</label>
            </nav>
        </header>
    );
}

export default Header;