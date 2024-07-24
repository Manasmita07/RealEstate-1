import React, { useState } from "react";
import "./Employee.css";

const Employee = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    alert(`User ID: ${userID}, Password: ${password}`);
    // Reset the form
    setUserID("");
    setPassword("");
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5>
          <span className="text-muted fw-light">Employee Management /</span>{" "}
          Employee ID
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 us">
            <label htmlFor="userID" className="form-label">
              User ID
            </label>
            <input
              type="text"
              className="form-control"
              id="userID"
              value={userID}
              onChange={e => setUserID(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Employee;
