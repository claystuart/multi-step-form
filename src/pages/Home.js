import "./css/home.css";
import { useState } from 'react';

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="infoContainer">
            <h1>Personal info</h1>
            <h2>Please provide your name, email address, and phone number.</h2>

            <form>
                <label>Name</label>
                <input type="text" placeholder="e.g. Stephen King"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <label>Email Address </label>
                <input type="text" placeholder="e.g. stephenking@lorem.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Phone Number</label>
                <input type="text" placeholder="e.g. +1 234 567 890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

            </form>
        </div>
    );
}

export default Home;