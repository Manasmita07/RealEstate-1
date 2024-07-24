import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Department Name", to: "/department/departmentName" },
  { value: "Designation", to: "/department/designation" },
  // { value: "Level", to: "/department/level" },
  { value: "Grade", to: "/department/grade" },
  { value: "Organisation Structure", to: "department/organisationStr" },
];
function Depart() {
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
        <div>Department</div>
      </div>
      <ul className="menu-sub">
        {array.map((el, index) => (
          <SubItems value={el.value} to={el.to} key={index} />
        ))}
      </ul>
    </li>
  );
}

export default Depart;
