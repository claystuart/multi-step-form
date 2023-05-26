import "../css/slider.css"

function Slider({ yearlyTerm, setYearlyTerm }) {

    return (
        <section className="sliderComponent">
            <p className={yearlyTerm === "true" ? "sliderOff" : "sliderOn"}>Monthly</p>
            <label className="switchContainer">
                <input type="checkbox"
                    checked={yearlyTerm === "true" ? true : false}
                    className="hideCheckBox"
                    onChange={(e) => e.target.checked ? setYearlyTerm("true") : setYearlyTerm("false")}
                />
                <b className="sliderBall" />
            </label>
            <p className={yearlyTerm === "true" ? "sliderOn" : "sliderOff"}>Yearly</p>
        </section>
    )
}

export default Slider;