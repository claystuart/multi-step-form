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

    const [choice, setChoice] = useState(() => localStorage.getItem("choice")
        ? localStorage.getItem("choice") : "Arcade"
    )

    const [arcade, setArcade] = useState(() => localStorage.getItem("arcade")
        ? localStorage.getItem("arcade") : "9")

    const [advanced, setAdvanced] = useState(() => localStorage.getItem("advanced")
        ? localStorage.getItem("advanced") : "12")

    const [pro, setPro] = useState(() => localStorage.getItem("pro")
        ? localStorage.getItem("pro") : "15")

    useEffect(() => {
        localStorage.setItem("choice", choice)
        localStorage.setItem("yearlyTerm", yearlyTerm)

        let temp = 0

        // set arcade
        temp = yearlyTerm === "true" ? 90 : 9
        setArcade(temp)
        localStorage.setItem("arcade", temp)

        // set advanced
        temp = yearlyTerm === "true" ? 120 : 12
        setAdvanced(temp)
        localStorage.setItem("advanced", temp)

        // set pro
        temp = yearlyTerm === "true" ? 150 : 15
        setPro(temp)
        localStorage.setItem("pro", temp)

    }, [choice, yearlyTerm])

    // Select and highlight the desired plan: arcade, advanced, or pro
    function choosePlan() {
        document.querySelectorAll('input[type="radio"]')
            .forEach(radioElement =>
                radioElement.checked && setChoice(radioElement.value))
    }

    return (
        <div className="planContainer">
            <h1> Select your plan</h1>
            <h2>You have the option of monthly or yearly billing.</h2>

            <RadioOption
                image={{ img: arcadeImage, alt: "Arcade options" }}
                price={arcade}
                choosePlan={choosePlan}
                yearlyTerm={yearlyTerm}
                choice={choice}>Arcade
            </RadioOption>

            <RadioOption
                image={{ img: advancedImage, alt: "Advanced options" }}
                price={advanced}
                choosePlan={choosePlan}
                yearlyTerm={yearlyTerm}
                choice={choice}>Advanced
            </RadioOption>

            <RadioOption
                image={{ img: proImage, alt: "Pro options" }}
                price={pro}
                choosePlan={choosePlan}
                yearlyTerm={yearlyTerm}
                choice={choice}>Pro
            </RadioOption>

            <Slider setYearlyTerm={setYearlyTerm} yearlyTerm={yearlyTerm} />
        </div>
    )
}

function RadioOption({ children, choice, image, choosePlan, yearlyTerm, ...props }) {
    return (
        <label className={choice === children ? "plan selected" : "plan unselected"}>
            <img src={image.img} alt={image.alt} className="plan-image" />
            <div>
                <p className="plan-choice">{children}</p>
                <p className="plan-price">${props.price}/{yearlyTerm === "true" ? "yr" : "mo"}</p>
                <p className={yearlyTerm === "true" ? "showDiscount" : "hidden"}>2 months free</p>
            </div>
            <input type="radio" name="plan" className="hidden" value={children}
                onChange={e => choosePlan(e.target.value)} />
        </label>
    )
}

export default Plan;