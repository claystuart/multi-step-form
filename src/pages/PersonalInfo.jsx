import { useEffect, useState } from 'react';

function Home() {
    const [name, setName] = useState(() => {
        let temp = localStorage.getItem("name")
        return temp ? temp : ""
    })

    const [email, setEmail] = useState(() => {
        let temp = localStorage.getItem("email")
        return temp ? temp : ""
    })

    const [phone, setPhone] = useState(() => {
        let temp = localStorage.getItem("phone")
        return temp ? temp : ""
    })

    useEffect(() => {
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("phone", phone)
    }, [name, email, phone])

    return (
        <div className="formContainer">
            <h1>Personal info</h1>
            <h2>Please provide your name, email address, and phone number.</h2>

            <form>
                <label htmlFor='name'>Name
                    <input type="text"
                        id='name'
                        value={name}
                        placeholder="e.g. Stephen King"
                        onChange={e => setName(e.target.value)} />
                </label>

                <label htmlFor='email'>Email Address
                    <input type="text"
                        id='email'
                        placeholder="e.g. stephenking@lorem.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor='phone'>Phone Number
                    <input type="text"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </label>

            </form>
        </div>
    );
}

export default Home;