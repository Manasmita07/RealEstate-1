import { useState } from "react";
import Buttons from "./../Buttons";
import { useGetDropDowns } from "../../../hooks/useGetDropDowns";

function Approval({ register }) {
  const [show, setShow] = useState(true);
  const { dropDowns } = useGetDropDowns("employee_management_handler");

  return (
    <>
      <h6 className="mt-3 mb-4 text-primary">Approvals</h6>
      {show && (
        <div data-repeater-list="group-a">
          <div data-repeater-item="">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="largeSelect" className="form-label">
                    Approval Body
                  </label>
                  <div className="position-relative">
                    <select
                      id="approvalBody"
                      {...register("approvalBody")}
                      className="select2 form-select select2-hidden-accessible"
                      multiple=""
                      data-select2-id="select2Primary"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="Approval Body">Approval Body</option>
                      <option value="BDA">BDA</option>
                      <option value="ORERA">ORERA</option>
                      <option value="BMC">BMC</option>
                    </select>
                    {/* <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="1"
                      style={{ width: "434.388px" }}>
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="-1"
                          aria-disabled="false"
                        >
                          <ul className="select2-selection__rendered">
                            <li className="select2-search select2-search--inline">
                              <input
                                className="select2-search__field"
                                type="search"
                                tabindex="0"
                                autocomplete="off"
                                autocorrect="off"
                                autocapitalize="none"
                                spellcheck="false"
                                role="searchbox"
                                aria-autocomplete="list"
                                placeholder="Select value"
                                style={{ width: "406.788px" }}
                              />
                            </li>
                          </ul>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Apply Date
                  </label>
                  <input
                    id="applyDate"
                    {...register("applyDate")}
                    className="form-control"
                    type="date"
                    placeholder="Apply Date"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="largeSelect" className="form-label">
                    Employee
                  </label>
                  <select
                    id="employee"
                    {...register("employee")}
                    className="form-select"
                  >
                    <option value="Employeet">Employee</option>
                    {dropDowns?.map(el => (
                      <option value={el.company_profile.empid}>
                        {el.company_profile.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Agency
                  </label>
                  <input
                    id="agency"
                    {...register("agency")}
                    className="form-control"
                    type="text"
                    placeholder="Agency"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Approval Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="approvalDate"
                    {...register("approvalDate")}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Validity No
                  </label>
                  <input
                    id="validity"
                    {...register("validity")}
                    className="form-control"
                    type="number"
                    placeholder="Validity No"
                    autocomplete="off"
                  />
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="formFileMultiple" className="form-label">
                    Upload Document
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="document"
                    {...register("document")}
                    multiple=""
                  />
                </div>
              </div>
              <Buttons show={show} setShow={setShow} />
            </div>
            <hr />
          </div>
        </div>
      )}
    </>
  );
}

export default Approval;
