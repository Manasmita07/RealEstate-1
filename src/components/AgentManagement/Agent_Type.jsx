import { useForm } from "react-hook-form";
import { useAddTeam } from "../../hooks/teamManagement/useAddTeam";
import { useGetTeam } from "../../hooks/teamManagement/useGetTeam";
import { useGetDropDowns } from "../../hooks/useGetDropDowns";

function Agent_Type() {
  const { isPending, mutate } = useAddTeam();
  const { isLoading, team } = useGetTeam();
  const { dropDowns } = useGetDropDowns("department_name_handler");
  const { dropDowns: dropDownTeam } = useGetDropDowns(
    "employee_management_handler"
  );
  console.log(dropDowns);
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    mutate(data, { onSuccess: () => reset() });
    console.log(data);
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h5>
        <span className="text-muted fw-light">Agent Management /</span> Agent
        Management
      </h5>

      <div className="row">
        {/* <!-- FormValidation --> */}
        <div className="col-xl-12 col-md-12">
          <div className="card">
            <h5 className="card-header"></h5>
            <div className="card-body pt-1">
              <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <div className="col-md-4 mb-4">
                  <div className="form-floating form-floating-outline">
                    <select
                      id="department"
                      {...register("department")}
                      className="select2 form-select form-select-lg"
                      data-allow-clear="true"
                    >
                      <option>department</option>
                      {dropDowns?.map(el => (
                        <option value={el.id}>{el.name}</option>
                      ))}
                    </select>
                    <label htmlFor="Department">Department</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="team_name"
                      {...register("team_name")}
                      placeholder="Team Name"
                    />
                    <label htmlFor="Team Name">Agent Name</label>
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="team_leader"
                      {...register("team_leader")}
                      placeholder="Team Leader"
                    />
                    <label htmlFor="Team Leader">Team Leader</label>
                  </div>
                </div> */}

                {/* <div className="col-md-4 mb-4">
                  <div className="form-floating form-floating-outline form-floating-select2">
                    <div className="position-relative">
                      <select
                        id="team_members"
                        {...register("team_members")}
                        className="select2 form-select select2-hidden-accessible"
                        multiple=""
                        data-select2-id="1"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <optgroup label="Team Members">
                          <option value="TM">Agent Members</option>
                          {dropDownTeam?.map(el => (
                            <option value={el.company_profile.empid}>
                              {el.company_profile.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2"
                        style={{ width: "439.987px" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex="-1"
                            aria-disabled="false"
                          >
                           
                          </span>
                        </span>
                        <span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div> */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary me-2 waves-effect waves-light"
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    className="btn btn-outline-secondary waves-effect"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent_Type;
