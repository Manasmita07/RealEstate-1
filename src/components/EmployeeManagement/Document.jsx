import axios from "axios";
import React, { useState } from "react";

const Document = () => {
  const [documents, setDocuments] = useState([
    { file: null, name: "", document_no: "", validity: "", issued_by: "" },
  ]);

  const handleAdd = () => {
    setDocuments([
      ...documents,
      { file: null, name: "", document_no: "", validity: "", issued_by: "" },
    ]);
  };

  const handleDelete = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
  };

  const handleChange = (index, field, value) => {
    const updatedDocuments = documents.map((document, i) =>
      i === index ? { ...document, [field]: value } : document
    );
    setDocuments(updatedDocuments);
  };
  console.log(documents);

  const handleSubmit = async (event, documents) => {
    try {
      console.log(documents);
      event.preventDefault();
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_URL_BASE}/api/employee_document_handler/`,
        data: documents,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      const errorMessage = Object.keys(error.response).join(",");
      // throw new Error(`Please provide ${errorMessage}`);
    }
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h5>
        <span className="text-muted fw-light">Employee Management /</span>{" "}
        Document
      </h5>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form
                className="form-repeater"
                onSubmit={(e) => handleSubmit(e, documents)}
              >
                {documents.map((document, index) => (
                  <div key={index} data-repeater-item>
                    <div className="row mt-2 gy-4">
                      <div className="col-md-4">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) =>
                              handleChange(index, "file", e.target.files[0])
                            }
                            required
                          />
                          <label htmlFor={`upload-file-${index}`}>
                            Uploads
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating form-floating-outline">
                          <input
                            className="form-control"
                            type="text"
                            value={document.name}
                            onChange={(e) =>
                              handleChange(index, "name", e.target.value)
                            }
                            placeholder="Document Name"
                          />
                          <label htmlFor={`document-name-${index}`}>
                            Document Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating form-floating-outline">
                          <input
                            className="form-control"
                            type="text"
                            value={document.document_no}
                            onChange={(e) =>
                              handleChange(index, "document_no", e.target.value)
                            }
                            placeholder="Document No"
                          />
                          <label htmlFor={`document-no-${index}`}>
                            Document No
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating form-floating-outline">
                          <input
                            className="form-control"
                            type="date"
                            value={document.validity}
                            onChange={(e) =>
                              handleChange(index, "validity", e.target.value)
                            }
                            placeholder="Validity"
                          />
                          <label htmlFor={`validity-${index}`}>Validity</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating form-floating-outline">
                          <input
                            className="form-control"
                            type="text"
                            value={document.issued_by}
                            onChange={(e) =>
                              handleChange(index, "issued_by", e.target.value)
                            }
                            placeholder="Issued By"
                          />
                          <label htmlFor={`issued-by-${index}`}>
                            Issued By
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 d-flex align-items-center mb-0">
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(index)}
                        >
                          <i className="mdi mdi-close me-1"></i>
                          <span className="align-middle">Delete</span>
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
                <div className="col-12 d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAdd}
                  >
                    <i className="mdi mdi-plus me-1"></i>
                    <span className="align-middle">Add</span>
                  </button>
                  <button type="submit" className="btn btn-primary btn-submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
