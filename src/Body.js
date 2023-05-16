import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages to switch between
import PersonalInformation from "./pages/PersonalInformation";


export default function Body() {
    const bodyStyle = {
        outline: "1px solid red",
        backgroundColor: 'white',
        marginInline: "auto",
        marginTop: -235,
        display: 'flex'
    };
    return (
        <div style={bodyStyle}>
            <PersonalInformation />
        </div>
    );
}