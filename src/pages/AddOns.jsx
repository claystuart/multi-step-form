import "../css/addons.css"
import { useState, useEffect } from "react"

export default function AddOns() {

    const [yearlyTerm] = useState(() => {
        let temp = localStorage.getItem("yearlyTerm")
        return temp === "true" ? "true" : "false"
    })

    const [onlinePrice, setOnlinePrice] = useState(() => {
        let multiplier = yearlyTerm === "true" ? 10 : 1
        let temp = localStorage.getItem("onlinePrice")
        return temp ? multiplier * 1 : "0"
    })

    const [storagePrice, setStoragePrice] = useState(() => {
        let multiplier = yearlyTerm === "true" ? 10 : 1
        let temp = localStorage.getItem("storagePrice")
        return temp ? multiplier * 2 : "0"
    })

    const [profilePrice, setProfilePrice] = useState(() => {
        let multiplier = yearlyTerm === "true" ? 10 : 1
        let temp = localStorage.getItem("profilePrice")
        return temp ? multiplier * 2 : "0"
    })

    useEffect(() => {
        localStorage.setItem("onlinePrice", onlinePrice)
        localStorage.setItem("storagePrice", storagePrice)
        localStorage.setItem("profilePrice", profilePrice)
    }, [onlinePrice, storagePrice, profilePrice])

    function toggleOption(checkbox) {
        // console.log(checkbox.value, checkbox.checked)

        // Handle uncheck
        if (checkbox.checked === false) {
            switch (checkbox.value) {
                case "online":
                    setOnlinePrice(0)
                    break
                case "storage":
                    setStoragePrice(0)
                    break
                case "profile":
                    setProfilePrice(0)
                    break
                default:
                    console.error("Bad choice selected in function toggleOption() in AddOns.jsx")
                    break
            }
        } else {
            let multiplier = yearlyTerm === "true" ? 10 : 1
            switch (checkbox.value) {
                case "online":
                    setOnlinePrice(1 * multiplier)
                    break;
                case "storage":
                    setStoragePrice(2 * multiplier)
                    break;
                case "profile":
                    setProfilePrice(2 * multiplier)
                    break;
                default:
                    console.error("Bad choice selected in function toggleOption() in AddOns.jsx")
            }
        }

    }

    return (
        <div className="addonContainer ">
            <h1>Pick add-ons</h1>
            <h2>Add-ons help enhance your gaming experience.</h2>
            <AddOn
                h1={"Online Services"}
                h2={"Access to multiplayer games"}
                toggleOption={toggleOption}
                yearlyTerm={yearlyTerm}
                price={onlinePrice}>online</AddOn>
            <AddOn
                h1={"Larger storage"}
                h2={"Extra 1TB of cloud save"}
                toggleOption={toggleOption}
                yearlyTerm={yearlyTerm}
                price={storagePrice}>storage</AddOn>
            <AddOn
                h1={"Customizable profile"}
                h2={"Custom theme on your profile"}
                toggleOption={toggleOption}
                yearlyTerm={yearlyTerm}
                price={profilePrice}>profile</AddOn>
        </div>
    );
}

function AddOn({ children, h1, h2, price, toggleOption, yearlyTerm, ...props }) {
    return (
        <div className={price > 0 ? "addonChecked addon" : "addon"}>
            <input
                id={children}
                type="checkbox"
                className="addon-options"
                onChange={e => toggleOption(e.target)}
                checked={price > 0 ? true : false}
                value={children} />
            <label className="addon-explanation" htmlFor={children}>
                <p className="heading">{h1}</p>
                <p className="subheading">{h2}</p>
            </label>
            <p className="price">+${yearlyTerm === "true" ? price : price}/{yearlyTerm === "true" ? "yr" : "mo"}</p>
        </div>
    )
}