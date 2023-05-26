import arcadeImage from "../images/icon-arcade.svg"
import advancedImage from "../images/icon-advanced.svg"
import proImage from "../images/icon-pro.svg"
import "../css/plan.css"
import { useState, useEffect } from "react"
import Slider from "./Slider.jsx"

function Plan() {
    const [yearlyTerm, setYearlyTerm] = useState(() => {
        let temp = localStorage.getItem("yearlyTerm")
        return temp === "true" ? "true" : "false"
    })

    const [choice, setChoice] = useState(() => {
        let temp = localStorage.getItem("choice")
        return temp ? temp : "Arcade"
    })

    useEffect(() => {
        localStorage.setItem("choice", choice)
        localStorage.setItem("yearlyTerm", yearlyTerm)
    }, [choice, yearlyTerm])

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
                price={yearlyTerm == "true" ? 90 : 9}
                toggleRadios={toggleRadios}
                timeSpan={yearlyTerm == "true" ? "yr" : "mo"}
                styling={choice == "Arcade" ? "plan selected" : "plan unselected"}>Arcade</RadioOption>

            <RadioOption
                image={advancedImage}
                alt={"Advanced options"}
                price={yearlyTerm == "true" ? 120 : 12}
                toggleRadios={toggleRadios}
                timeSpan={yearlyTerm == "true" ? "yr" : "mo"}
                styling={choice == "Advanced" ? "plan selected" : "plan unselected"}>Advanced</RadioOption>

            <RadioOption
                image={proImage}
                alt={"Pro options"}
                price={yearlyTerm == "true" ? 150 : 15}
                toggleRadios={toggleRadios}
                timeSpan={yearlyTerm == "true" ? "yr" : "mo"}
                styling={choice == "Pro" ? "plan selected" : "plan unselected"}>Pro</RadioOption>

            <Slider setYearlyTerm={setYearlyTerm} yearlyTerm={yearlyTerm} />
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