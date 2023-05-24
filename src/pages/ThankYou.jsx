import thankYou from "../images/icon-thank-you.svg"

export default function ThankYou() {
    let thankYouStyle = {
        width: 343,
        height: 400,
        background: "white",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    let imgStyle = {
        width: 56,
        height: 56,
        marginTop: 79
    }

    let noteStyle = {
        width: 295,
        height: 125,
        textAlign: "center",
        lineHeight: "25px"
    }

    return (
        <div style={thankYouStyle}>
            <img src={thankYou} style={imgStyle} alt="Thank You" />
            <h1 style={{ marginTop: 24 }}>Thank you!</h1>
            <h2 style={noteStyle}>Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.</h2>
        </div>
    );
}

