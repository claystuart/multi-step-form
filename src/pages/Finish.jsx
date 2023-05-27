import "../css/finish.css"
import { useState, useEffect } from "react"

export default function Finish() {
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
    }, [yearlyTerm])

    function calculateBasePrice() {
        let temp = 0;
        switch (choice) {
            case "Arcade":
                temp += parseInt(localStorage.getItem("arcade"))
                break
            case "Advanced":
                temp += parseInt(localStorage.getItem("advanced"))
                break
            case "Pro":
                temp += parseInt(localStorage.getItem("pro"))
                break
        }

        return temp
    }

    function calculateAddonPrice() {

    }

    const changeTerm = () => yearlyTerm === "true" ? setYearlyTerm("false") : setYearlyTerm("true")

    return (
        <div className="finishContainer">
            <h1>Finishing Up</h1>
            <h2>Double-check everything looks OK before confirming.</h2>
            <div className="summary">
                <section className="base-plan-summary">
                    <div className="control">
                        <p>{choice} ({yearlyTerm === "true" ? "Yearly" : "Monthly"})</p>
                        <button onClick={changeTerm}>Change</button>
                    </div>
                    <p>${true && calculateBasePrice()}/{yearlyTerm === "true" ? "yr" : "mo"}</p>
                </section>

                <hr className="line" />

                <section className="addon-summary">

                </section>

                <section className="total">
                    <p className="gray">Total (per {yearlyTerm === "true" ? "year" : "month"})</p>
                    <p>+${calculateBasePrice() + 1}/{yearlyTerm === "true" ? "yr" : "mo"}</p>
                </section>
            </div>
        </div>
    )
}

