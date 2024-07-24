import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

function Agent() {
  const [show, setShow] = useState(false);
  return (
    <li className={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="menu-link menu-toggle waves-effect"
      >
        <i className="menu-icon tf-icons mdi mdi-notebook-outline"></i>
        <div>Agent Management</div>
      </div>
      <ul className="menu-sub">
        <SubItems value="Agent Type" to={"AgentManagement/Agent_Type"} />
        <SubItems value="Agent Profile" to={"AgentManagement/AgentProfile"} />
      </ul>
    </li>
  );
}

export default Agent;
