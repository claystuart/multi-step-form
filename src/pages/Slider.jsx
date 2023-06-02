import "../css/slider.css"

function Slider({ yearlyTerm, setYearlyTerm }) {

    return (
        <div className="sliderComponent">
            <p className={yearlyTerm === "true" ? "slider-p sliderOff" : "slider-p sliderOn"}>Monthly</p>
            <label className="switchContainer">
                <input type="checkbox"
                    checked={yearlyTerm === "true" ? true : false}
                    className="hideCheckBox"
                    onChange={(e) => e.target.checked ? setYearlyTerm("true") : setYearlyTerm("false")}
                />
                <b className="sliderBall" />
            </label>
            <p className={yearlyTerm === "true" ? "slider-p sliderOn" : "slider-p sliderOff"}>Yearly</p>
        </div>
    )
}

export default Slider;