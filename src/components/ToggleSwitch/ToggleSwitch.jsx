import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle-switch__slider">
        <span className="toggle-switch__text toggle-switch__text_type_f">
          F
        </span>
        <span className="toggle-switch__text toggle-switch__text_type_c">
          C
        </span>
      </span>
    </label>
  );
}

export default ToggleSwitch;
