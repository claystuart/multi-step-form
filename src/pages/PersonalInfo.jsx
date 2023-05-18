import "../css/info.css";
import { useState } from 'react';

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="formContainer">
            <h1>Personal info</h1>
            <h2>Please provide your name, email address, and phone number.</h2>

            <form>
                <label>Name
                    <input type="text" placeholder="e.g. Stephen King"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </label>

                <label>Email Address
                    <input type="text" placeholder="e.g. stephenking@lorem.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>Phone Number
                    <input type="text" placeholder="e.g. +1 234 567 890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>

            </form>
        </div>
    );
}

export default Home;