import arcadeImage from "../images/icon-arcade.svg"
import advancedImage from "../images/icon-advanced.svg"
import proImage from "../images/icon-pro.svg"
import "../css/plan.css"
import { useState, useEffect } from "react"
import Slider from "./Slider.jsx"

function Plan() {

    const [arcadePrice, setArcadePrice] = useState(() =>
        localStorage.getItem("arcadePrice") ? localStorage.getItem("arcadePrice") : 9)

    const [advancedPrice, setadvancedPrice] = useState(() =>
        localStorage.getItem("advancedPrice") ? localStorage.getItem("advancedPrice") : 12)

    const [proPrice, setproPrice] = useState(() =>
        localStorage.getItem("proPrice") ? localStorage.getItem("proPrice") : 15)

    const [choice, setChoice] = useState(() => {
        let temp = localStorage.getItem("choice")
        return temp ? temp : "Arcade"
    })

    useEffect(() => {
        localStorage.setItem("arcadePrice", arcadePrice)
        localStorage.setItem("advancedPrice", advancedPrice)
        localStorage.setItem("proPrice", proPrice)
        localStorage.setItem("choice", choice)
    }, [arcadePrice, advancedPrice, proPrice, choice])

    function toggleRadios() {
        document.querySelectorAll('input[type="radio"]').forEach(x => {
            if (x.checked)
                setChoice(x.value)
        })
    }

    return (
        <div className="planContainer">
            <h1> Select your plan</h1>
            <h2>You have the option of monthly or yearly billing.</h2>

            <RadioOption
                image={arcadeImage}
                alt={"Arcade options"}
                price={arcadePrice}
                toggleRadios={toggleRadios}
                timeSpan={"mo"} // Will need to change upon toggle slider
                styling={choice === "Arcade" ? "plan selected" : "plan unselected"}>Arcade</RadioOption>

            <RadioOption
                image={advancedImage}
                alt={"Advanced options"}
                price={advancedPrice}
                toggleRadios={toggleRadios}
                timeSpan={"mo"} // Will need to change upon toggle slider
                styling={choice === "Advanced" ? "plan selected" : "plan unselected"}>Advanced</RadioOption>

            <RadioOption
                image={proImage}
                alt={"Pro options"}
                price={proPrice}
                toggleRadios={toggleRadios}
                timeSpan={"mo"} // Will need to change upon toggle slider
                styling={choice === "Pro" ? "plan selected" : "plan unselected"}>Pro</RadioOption>
            <Slider />
        </div>
    )
}

function RadioOption({ image, price, children, toggleRadios, alt, styling, ...props }) {
    return (
        <label className={styling}>
            <img src={image} alt={alt} className="plan-image" />
            <div>
                <p className="plan-choice">{children}</p>
                <p className="plan-price">${price}/{props.timeSpan}</p>
            </div>
            <input type="radio" name="plan" className="hidden"
                value={children}
                onChange={e => toggleRadios(e.target.value)} />
        </label>
    )
}

export default Plan;