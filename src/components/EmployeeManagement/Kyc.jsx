import React, { useState } from "react";

import { Link } from "react-router-dom";

const Kyc = () => {
  const [status, setStatus] = useState("Pending");

  const handleSelectChange = event => {
    setStatus(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("Status:", status);
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h5>
        <span className="text-muted fw-light">Employee Management /</span> KYC
      </h5>
      <div className="col-12">
        <div className="card">
          <h5 className="card-header">KYC</h5>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-lg-6 col-xl-1 col-12 mb-0">
                  <div className="mt-2 pt-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="userManagementRead"
                      style={{
                        border: "2px solid #bbbcc4",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                  <div className="li-wrapper d-flex justify-content-start align-items-center">
                    <div className="list-content">
                      <h6 className="mb-1">Document Name</h6>
                      <p className="text-muted">Aadhar card</p>
                    </div>
                  </div>
                </div>
                <div className="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                  <div className="li-wrapper d-flex justify-content-start align-items-center">
                    <div className="list-content">
                      <h6 className="mb-1">Document Number</h6>
                      <p className="text-muted">458698753</p>
                    </div>
                  </div>
                </div>
                <div className="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                  <div className="li-wrapper d-flex justify-content-start align-items-center">
                    <div className="list-content">
                      <h6 className="mb-1">Validity</h6>
                      <p className="text-muted">05 / 11/ 2028</p>
                    </div>
                  </div>
                </div>
                <div className="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                  <div className="form-floating form-floating-outline">
                    <select
                      id="form-repeater-1-4"
                      className="form-select"
                      value={status}
                      onChange={handleSelectChange}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Document Missing">Document Missing</option>
                      <option value="Done">Done</option>
                    </select>
                    <label htmlFor="form-repeater-1-4">Verify</label>
                  </div>
                </div>
                <div className="mb-4 col-lg-3 col-12 mb-0 d-flex justify-content-end align-items-center">
                  <Link
                    to="/employee/profile"
                    className="btn btn-primary waves-effect waves-light me-2 fs-6"
                  >
                    <span className="mdi mdi-account"></span>Profile
                  </Link>
                  {/* <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light me-2"
                    onClick={handleProfileClick}
                  >
                    <span className="mdi mdi-account"></span> Profile
                  </button> */}
                  <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    <span className="mdi mdi-download"></span> Download
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
