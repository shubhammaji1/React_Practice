import { useState } from "react"
import "./toggleSwitch.css"

export const ToggleSwitch =()=>{
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch=()=>{
        setIsOn(!isOn);
    }
    return (
        <>
        <div className="toggle-switch" onClick={handleToggleSwitch}>
            <div className={`switch ${isOn ? "On" : "Off"}`}>
                <span className="switch-state">{isOn ? "On" : "Off"}</span>
            </div>
        </div>
        </>
    )
}