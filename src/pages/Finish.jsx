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

    const [onlinePrice, setOnlinePrice] = useState(() => {
        let multiplier = yearlyTerm === "true" ? 10 : 1
        let temp = localStorage.getItem("onlinePrice")
        if (temp === "0") {
            return "0"
        }
        else
            return multiplier * 2
    })

    const [storagePrice, setStoragePrice] = useState(() => {
        let multiplier = yearlyTerm === "true" ? 10 : 1
        let temp = localStorage.getItem("storagePrice")
        if (temp === "0") {
            return "0"
        }
        else
            return multiplier * 2
    })

    const [profilePrice, setProfilePrice] = useState(() => {
        let multiplier = yearlyTerm === "true" ? 10 : 1
        let temp = localStorage.getItem("profilePrice")
        if (temp === "0") {
            return "0"
        }
        else
            return multiplier * 2
    })

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

        // set onlinePrice
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

                <section className="base-plan-summary-container">
                    <div className="control">
                        <p className="base-plan">{choice} ({yearlyTerm === "true" ? "Yearly" : "Monthly"})</p>
                        <button className="changeButton" onClick={changeTerm}>Change</button>
                    </div>
                    <p className="base-plan-total">${true && calculateBasePrice()}/{yearlyTerm === "true" ? "yr" : "mo"}</p>
                </section>

                <hr />

                <section className="addon-summary-container">
                    <div className={onlinePrice > 0 ? "addOn-summary" : "addOn-hide"}>
                        <p className="gray-item">Online service</p>
                        <p className="addOn-summary-item-cost">
                            +$/{yearlyTerm === "true" ? "yr" : "mo"}
                        </p>
                    </div>
                    <div className={storagePrice > 0 ? "addOn-summary" : "addOn-hide"}>
                        <p className="gray-item">Larger Storage</p>
                        <p className="addOn-summary-item-cost">
                            +$2/{yearlyTerm === "true" ? "yr" : "mo"}
                        </p>
                    </div>
                    <div className={profilePrice > 0 ? "addOn-summary" : "addOn-hide"}>
                        <p className="gray-item">Customizable profile</p>
                        <p className="addOn-summary-item-cost">
                            +$2/{yearlyTerm === "true" ? "yr" : "mo"}
                        </p>
                    </div>

                </section>

                <section className="total-summary-container">
                    <p className="gray-item">Total (per {yearlyTerm === "true" ? "year" : "month"})</p>
                    <p className="total-cost">+${calculateBasePrice() + 1}/{yearlyTerm === "true" ? "yr" : "mo"}</p>
                </section>
            </div>
        </div>
    )
}

