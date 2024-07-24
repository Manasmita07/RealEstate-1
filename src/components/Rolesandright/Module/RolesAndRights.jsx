import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import './vendor/css/rtl/core.css'
const RolesAndRights = () => {
  const [show, setShow] = useState(false);
  const handleclick = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <div className="content-wrapper">
        {/* <!-- Content --> */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h5>
            <span className="text-muted fw-light">System Admin /</span> Roles
            &amp; Right
          </h5>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 4 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Vinnie Mostowy"
                        data-bs-original-title="Vinnie Mostowy"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/5.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Allen Rieske"
                        data-bs-original-title="Allen Rieske"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/1.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Julee Rossignol"
                        data-bs-original-title="Julee Rossignol"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/6.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Administrator</h4>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal"
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 7 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Jimmy Ressula"
                        data-bs-original-title="Jimmy Ressula"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/4.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="John Doe"
                        data-bs-original-title="John Doe"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/1.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Kristi Lawker"
                        data-bs-original-title="Kristi Lawker"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/2.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Manager</h4>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal"
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 5 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Andrew Tye"
                        data-bs-original-title="Andrew Tye"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/6.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Rishi Swaat"
                        data-bs-original-title="Rishi Swaat"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/8.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Rossie Kim"
                        data-bs-original-title="Rossie Kim"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/2.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Users</h4>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal "
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 3 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Kim Karlos"
                        data-bs-original-title="Kim Karlos"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/3.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Katy Turner"
                        data-bs-original-title="Katy Turner"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/7.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Peter Adward"
                        data-bs-original-title="Peter Adward"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/5.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Support</h4>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal"
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 2 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Kim Merchent"
                        data-bs-original-title="Kim Merchent"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/1.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Sam D'souza"
                        data-bs-original-title="Sam D'souza"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/3.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Nurvi Karlos"
                        data-bs-original-title="Nurvi Karlos"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/5.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Restricted User</h4>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal"
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card h-100">
                <div className="row h-100">
                  <div className="col-5">
                    <div className="d-flex align-items-end h-100 justify-content-center">
                      <img
                        src="images/cards/add-new-role-illustration.png"
                        className="img-fluid"
                        alt="Image"
                        width={70}
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="card-body text-sm-end text-center ps-sm-0">
                      <button
                        onClick={handleclick}
                        data-bs-target="#addRoleModal"
                        data-bs-toggle="modal"
                        className="btn btn-primary mb-3 text-nowrap add-new-role waves-effect waves-light"
                      >
                        Add Role
                      </button>
                      <p className="mb-0">Add role, if it does not exist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default RolesAndRights;
