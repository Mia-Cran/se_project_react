import "./ToggleSwitch.css";
import React, { useState } from "react";

function ToggleSwitch({ currrentTemperature, setCurrentTemperature }) {
    function handleChange() {
        setCurrentTemperature(
            currrentTemperature === "F" ? "C" : "F"
        );
    }

    return(
        <label className="toggle-switch">
            <input type="checkbox" 
            className="toggle-switch__checkbox"
            checked={!isFahrenheit}
            onChange={handleChange}
            />
            <span className="toggle-switch__slider">
            <span className="toggle-switch__text toggle-switch__text_type_f">F</span>
            <span className="toggle-switch__text toggle-switch__text_type_c">C</span>
            </span>
        </label>
    );
}

export default ToggleSwitch;