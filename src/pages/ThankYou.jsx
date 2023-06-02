import thankYouImage from "../images/icon-thank-you.svg"
import "../css/thankYou.css"

export default function ThankYou() {

    return (
        <div className="thankYouContainer">
            <img src={thankYouImage} className="imgStyle" alt="Thank You" />
            <h1 className="thankYou-heading">Thank you!</h1>
            <h2 className="thankYou-subheading">Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.</h2>
        </div>
    );
}

