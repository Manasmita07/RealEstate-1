import { Link, useNavigate } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import Approval from "./Forms/Approval";
import Cost from "./Forms/Cost";
import DocumentHistory from "./Forms/DocumentHistory";
import { useForm } from "react-hook-form";
import { useNewProject } from "../../hooks/preProject/useNewProject";
import "bootstrap-icons/font/bootstrap-icons.css";

function NewProject() {
  const navigate = useNavigate();
  const { isPending, newProject } = useNewProject();

  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    newProject(data, { onSuccess: () => reset() });
    console.log(data);
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Pre - Project /</span> Add New
          Project Development
        </h5>
        <div className="mb-2 text-end">
          <Link
            to={navigate("/preProject/preProjectTable")}
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span className="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>

      <div className="row">
        {/* <!-- FormValidation --> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-xl-12 col-md-12">
            <div className="card">
              <h5 className="card-header">Pre - Project</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="defaultInput" className="form-label">
                        Project Location
                      </label>
                      <input
                        id="project_location"
                        {...register("project_location")}
                        className="form-control"
                        type="text"
                        placeholder="Project Location"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="largeSelect" className="form-label">
                        Ownership Type
                      </label>
                      <select
                        id="ownership_type"
                        {...register("ownership_type")}
                        className="form-select"
                      >
                        <option>Ownership Type</option>
                        <option value="OWN"> Owned</option>
                        <option value="REN">Rented</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="largeSelect" className="form-label">
                        Project Segment
                      </label>
                      <select
                        id="project_segment"
                        {...register("project_segment")}
                        className="form-select"
                      >
                        <option>Project Segment</option>
                        <option value="RES">Residential</option>
                        <option value="COM">Commerical</option>
                        <option value="IND">Industrial</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="defaultInput" className="form-label">
                        Project Name
                      </label>
                      <input
                        id="project_name"
                        {...register("project_name")}
                        className="form-control"
                        type="text"
                        placeholder="Project Name"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="largeSelect" className="form-label">
                        Project Type
                      </label>
                      <select
                        id="project_type"
                        {...register("project_type")}
                        className="form-select"
                      >
                        <option>Project Type</option>
                        <option value="NEW">New Construction</option>
                        <option value="REN">Renovation</option>
                        <option value="EXT">Extension</option>
                      </select>
                    </div>
                  </div>

                  {/* <ProjectDetails/> */}
                  <div className="col-md-12 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="defaultInput" className="form-label">
                        Project Area
                      </label>
                      <input
                        id="project_area"
                        {...register("project_area")}
                        className="form-control"
                        type="text"
                        placeholder="Project Area"
                        autocomplete="off"
                      />
                    </div>
                  </div>

                  {/* New add */}
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="defaultInput" className="form-label">
                        Address
                      </label>
                      <input
                        id="project_name"
                        {...register("project_name")}
                        className="form-control"
                        type="text"
                        placeholder="Address"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="defaultInput" className="form-label">
                        Lat/Long
                      </label>
                      <input
                        id="project_name"
                        {...register("project_name")}
                        className="form-control"
                        type="text"
                        placeholder="Lat/Long"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="defaultInput" className="form-label">
                        Measurement
                      </label>
                      <input
                        id="project_name"
                        {...register("project_name")}
                        className="form-control"
                        type="text"
                        placeholder="Measurement"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="defaultInput" className="form-label">
                        Project Description
                      </label>
                      <textarea
                        id="project_description"
                        {...register("project_description")}
                        className="form-control"
                        type="text"
                        placeholder="Project Description"
                        autocomplete="off"
                      ></textarea>
                    </div>
                  </div>

                  <Approval register={register} />

                  <Cost register={register} />

                  <DocumentHistory register={register} />

                  <h6 className="mt-3 mb-4 text-primary">Agreement</h6>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="formFileMultiple" className="form-label">
                        Generate Agreement (Buyer)
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        accept="image/*"
                        id="generate_agreement"
                        {...register("generate_agreement")}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label for="formFileMultiple" className="form-label">
                        Upload (Signed Document)
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        accept="image/*"
                        id="upload_document"
                        {...register("upload_document")}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 col-12">
                    <div style={{ margin: "30px 0 0 30px" }}>
                      <button className="btn btn-outline-danger waves-effect">
                        <i class="bi bi-x-lg" style={{ fontSize: "15px" }}></i>{" "}
                        <span style={{ marginLeft: "5PX" }}>REJECT</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 col-12">
                    <div style={{ marginTop: "30px" }}>
                      <button
                        type="submit"
                        className="btn btn-success waves-effect waves-light"
                      >
                        <i
                          class="bi bi-check2"
                          style={{ fontSize: "15px" }}
                        ></i>{" "}
                        <span style={{ marginLeft: "5PX" }}>CONFIRM</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 justify-content-end mt-4">
                  <button className="btn btn-outline-primary waves-effect">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProject;
