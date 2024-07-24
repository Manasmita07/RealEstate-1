import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

function Module() {
  const [show, setShow] = useState(false);

  return (
    <li className={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="menu-link  waves-effect"
      >
        <i className="menu-icon tf-icons mdi mdi-folder-outline"></i>
        <div className="module-title">
          Module
          <i className={`module-icon mdi mdi-plus ${show ? "open" : ""}`}></i>
        </div>
      </div>
      <ul className="menu-sub">
        <SubItems value="ModuleForm" to="/rolesRight/Module/moduleForm" />
        <SubItems value="SubModule" to="/rolesRight/Module/SubModule" />
        <SubItems value="Functionality" to="/rolesRight/Module/Functionality" />
      </ul>
    </li>
  );
}

export default Module;
