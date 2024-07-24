import { useState } from "react";
import Buttons from "./../Buttons";

function Cost({ register }) {
  const [show, setShow] = useState(true);
  return (
    <>
      <h6 className="mt-3 mb-4 text-primary">Expenses</h6>
      {show && (
        <div data-repeater-list="group-a">
          <div data-repeater-item="">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="largeSelect" className="form-label">
                    Expense Head
                  </label>
                  <div className="position-relative">
                    <select
                      id="ExpenseHead"
                      {...register("ExpenseHead")}
                      className="select2 form-select select2-hidden-accessible"
                      multiple=""
                      data-select2-id="select2Primary"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="Expense Head">Expense Head</option>
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
                    Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    {...register("date")}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Cost
                  </label>
                  <input
                    id="cost"
                    {...register("cost")}
                    className="form-control"
                    type="number"
                    placeholder="Cost"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Next Followup Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="nextDate"
                    {...register("nextDate")}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    {" "}
                    Talking Point
                  </label>
                  <textarea
                    id="talkingPoint"
                    {...register("talkingPoint")}
                    className="form-control"
                    type="text"
                    placeholder=" Talking Point"
                    autocomplete="off"
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

export default Cost;
