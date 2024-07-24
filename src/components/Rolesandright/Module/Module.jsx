function Module() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="col-xxl">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-3">
            <h5 className="mb-0">Module Form :</h5>
          </div>
          <div className="card-body">
            <form action="">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label for="defaultInput" className="form-label">
                      Navigation Name
                    </label>
                    <input
                      id="defaultInput"
                      className="form-control"
                      type="text"
                      placeholder="Navigation Name"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    URL
                  </label>
                  <div className="col mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        name="yes"
                        className="form-check-input"
                        type="radio"
                        value=""
                        id=""
                        checked=""
                      />
                      <label
                        className="form-check-label"
                        for="collapsible-payment-cc"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        name="no"
                        className="form-check-input"
                        type="radio"
                        value=""
                        id=""
                      />
                      <label
                        className="form-check-label"
                        for="collapsible-payment-cash"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label for="defaultInput" className="form-label">
                      Navigation URL
                    </label>
                    <input
                      id=""
                      className="form-control"
                      type="text"
                      placeholder="Navigation URL"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Parent Navigation
                  </label>
                  <div className="form-floating-outline">
                    <select id="" className="select2 form-select">
                      <option value="">Select Menu</option>
                      <option value="Australia">Australia</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Canada">Canada</option>
                      <option value="China">China</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <div className="form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Navigation Icon"
                        id="flatpickr-date"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary ms-auto d-block waves-effect waves-light">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module;
