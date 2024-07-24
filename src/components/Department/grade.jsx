import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Grade = () => {
  const [grades, setGrades] = useState([]);
  const [levels, setLevels] = useState([]);
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("true");
  const API_BASE_URL = process.env.REACT_APP_URL_BASE;
  useEffect(() => {
    const fetchAllGrades = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/department_grade_handler/`
        );
        console.log(response.data);
        if (response.data) {
          setGrades(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchAllLevels = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/department_label_handler/`
        );
        if (response.data) {
          setLevels(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllGrades();
    fetchAllLevels();
  }, []);
  const handleSubmit = async event => {
    event.preventDefault();
    if (!levels || !description) {
      return;
    }
    const formData = {
      label: level,
      grade_description: description,
      status: status,
    };
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/department_grade_handler/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        fetch(`${API_BASE_URL}/api/department_grade_handler/`)
          .then(response => response.json())
          .then(data => {
            setGrades(data);
          });
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h5 className="mb-1">
            <span className="text-muted fw-light">Department /</span> Grade
          </h5>
          <div className="mb-2 text-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalTop"
            >
              <span>
                <i className="mdi mdi-plus me-0 me-sm-1" />
              </span>{" "}
              Grade
            </button>
          </div>
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
              <h5 className="mb-0">Grade :</h5>
            </div>
            <div className="text-nowrap p-3">
              <div className="table-responsive">
                <table className="table table-bordered" id="all_request_table">
                  <thead className="table-secondary">
                    <tr>
                      <td>SL No</td>
                      <td>Level </td>
                      <td>Grade </td>
                      {/* <td>Status</td>
                      <td>Action</td> */}
                    </tr>
                  </thead>
                  <tbody>
                    {grades?.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.label}</td>
                        <td>{item.grade_description}</td>
                        <td>{item.status}</td>
                        <td>
                          <a
                            href=""
                            className="btn btn-text-primary btn-sm small py-1 px-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline" />
                          </a>
                          <a
                            href=""
                            className="btn btn-text-danger btn-sm small py-1 px-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Delete"
                          >
                            <i className="mdi mdi-trash-can" />
                          </a>
                        </td>
                      </tr>
                    ))}
                      {/* op */}
                <tr>
          <td>{grades+1}</td>
          <td>Level</td>
          <td>Grade</td>
          
          {/* <td>
            <a
              href=""
              className="btn btn-text-primary btn-sm small py-1 px-2"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Edit"
            >
              <i className="mdi mdi-pencil-outline" />
            </a>
            <a
              href=""
              className="btn btn-text-danger btn-sm small py-1 px-2"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Delete"
            >
              <i className="mdi mdi-trash-can" />
            </a>
          </td> */}
        </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div className="modal fade" id="modalTop" tabIndex={-1}>
            <div className="modal-dialog">
              <form className="modal-content" onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h4 className="modal-title" id="modalTopTitle">
                    Add Grade
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-2">
                    <div className="col-12 mb-2">
                      <label htmlFor="defaultInput" className="form-label">
                        Level
                      </label>
                      <div className="form-floating-outline">
                        <select
                          id=""
                          className="select2 form-select"
                          value={level}
                          onChange={e => setLevel(JSON.parse(e.target.value))}
                        >
                          <option value="">Select Menu</option>
                          {levels?.map((item, index) => (
                            <option value={item.id}>
                              {item.label_description}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12 mb-2">
                      <label htmlFor="defaultInput" className="form-label">
                        Description
                      </label>
                      <textarea
                        id="basic-default-message"
                        className="form-control"
                        placeholder=""
                        style={{ height: 60 }}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <label htmlFor="defaultInput" className="form-label">
                        Status
                      </label>
                      <div className="col">
                        <div className="form-check form-check-inline">
                          <input
                            name="status"
                            className="form-check-input"
                            type="radio"
                            value="true"
                            checked={status === "true"}
                            onChange={e => setStatus(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="collapsible-payment-cc"
                          >
                            Active
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            name="status"
                            className="form-check-input"
                            type="radio"
                            value="false"
                            checked={status === "false"}
                            onChange={e => setStatus(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="collapsible-payment-cash"
                          >
                            InActive
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grade;
