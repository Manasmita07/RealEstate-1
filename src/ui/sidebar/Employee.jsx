import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Employee", to: "/employee/Employee" },
  { value: "Company Profile", to: "/employee/companyProfile" },
  { value: "Bank & Others", to: "/employee/bank" },
  { value: "Salary", to: "/employee/salary" },
  { value: "Document", to: "/employee/document" },
  { value: "KYC", to: "/employee/KYC" },
  // { value: "Profile", to: "/employee/Profile" },
];
function Employee() {
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
        <div>Employee Management</div>
      </div>
      <ul className="menu-sub">
        {array.map((el, index) => (
          <SubItems value={el.value} to={el.to} key={index} />
        ))}
      </ul>
    </li>
  );
}

export default Employee;
