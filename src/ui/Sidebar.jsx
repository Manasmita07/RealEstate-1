import Board from "./sidebar/Board";
import Bucket from "./sidebar/Bucket";
import Customer from "./sidebar/Customer";
import FollowUp from "./sidebar/FollowUp";
import Incentive from "./sidebar/Incentive";
import PostSales from "./sidebar/PostSales";
import PreProject from "./sidebar/PreProject";
import Project from "./sidebar/Project";
import Roles from "./sidebar/Roles";
import SystemAdmin from "./sidebar/SystemAdmin";
import Depart from "./sidebar/Depart";
import Employee from "./sidebar/Employee";
import Stock from "./sidebar/Stock";
import Finance from "./sidebar/Finance";
import Sales from "./sidebar/Sales";
// import Business from "./sidebar/Business";
import Agent from "./sidebar/Agent";
import Team from "./sidebar/Team";
import Assigment from "./sidebar/Assigment";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme sidebar sidebar-container"
        data-bg-class="bg-menu-theme"
        // style={{
        //   touchAction: "none",
        //   userSelect: "none",
        //   WebkitUserDrag: "none",
        //   WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        // }}
      >
        <div className="app-brand demo">
          <a href="index.php" className="app-brand-link">
            <span className="app-brand-logo demo">
              <img src="navlogo.png" width="60px" alt="" />
            </span>

            <span className="app-brand-text demo menu-text fw-bold ms-2">
              Real Estate
            </span>
          </a>

          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4854 4.88844C11.0081 4.41121 10.2344 4.41121 9.75715 4.88844L4.51028 10.1353C4.03297 10.6126 4.03297 11.3865 4.51028 11.8638L9.75715 17.1107C10.2344 17.5879 11.0081 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96672 11.8638C7.48942 11.3865 7.48942 10.6126 7.96672 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z"
                fill="currentColor"
                fill-opacity="0.6"
              ></path>
              <path
                d="M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1192 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0778 11.8638C13.6005 11.3865 13.6005 10.6126 14.0778 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1192 4.41121 16.3455 4.41121 15.8683 4.88844Z"
                fill="currentColor"
                fill-opacity="0.38"
              ></path>
            </svg>
          </a>
        </div>
        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1 overflow-auto">
          <Board />
          <Roles />
          <SystemAdmin />
          <Depart />
          <Employee />
          <Team />
          <Agent />
          {/* <Business /> */}
          <Assigment />
          <PreProject />
          <Project />
          <Bucket />
          <FollowUp />
          <Incentive />
          <Sales />
          <PostSales />
          <Customer />
          <Stock />
          <Finance />
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
