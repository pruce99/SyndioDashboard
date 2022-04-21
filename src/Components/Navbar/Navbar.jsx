import React from "react";
// import {ReactComponent as Logo} from "../../logo.svg"
import { ReactComponent as Logo } from "../../Assets/syndiologo.svg";
import "./Navbar.scss";

export default function Navbar(props) {
  return (
    // A div consisting of the logo and a dropdown box, where dropdown data is rendered
    // based on the headerdata (groups) prop 
    <div className="Navbar-container">
      <div>
        <Logo className="Logo-container" />
      </div>
      <div className="Dropdown-Container">
        <select
          value={props.dropdownHeader}
          onChange={(event) => props.setDropdownHeader(event.target.value)}
        >
          {props.headerdata && props.headerdata.map((options) => (
            <option key={options.id} value={options.label}>
              {options.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
