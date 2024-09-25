import { useState } from "react"
import "./toggleSwitch.css"

export const ToggleSwitch =()=>{
    const [isOn, setIsOn] = useState(false);
    const CheckisOn = isOn ? "On" : "Off";
    const handleToggleSwitch=()=>{
        setIsOn(!isOn);
    }
    return (
        <>
        <div className="toggle-switch" style={{backgroundColor: isOn ? "#4caf50" :"#f44336" }} onClick={handleToggleSwitch}>
            <div className={`switch ${CheckisOn}`}>
                <span className="switch-state">{CheckisOn}</span>
            </div>
        </div>
        </>
    )
}