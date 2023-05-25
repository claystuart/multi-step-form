import "../css/slider.css"
import { useState } from "react"

function Slider() {

    return (
        <section className="sliderComponent">
            <p className="subscriptionPeriod sliderOn">Monthly</p>
            <label class="switchContainer">
                <input type="checkbox" className="hideCheckBox" />
                <b class="sliderBall" />
            </label>
            <p className="subscriptionPeriod sliderOff" >Yearly</p>
        </section>
    )
}

export default Slider;