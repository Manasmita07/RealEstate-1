import { Link } from "react-router-dom";
import { useGetBranch } from "../../hooks/systemAdmin/useGetCompanyDetails";
import Title from "./subItem/Title";
function CompanyInfo() {
  const {data}=useGetBranch();
  return (
    <>
      <Title value="Company" to="/systemAdmin/companyInfoForm" />
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Company Info :</h5>
        </div>

        <div className="card-body pt-0">
          <div className="table-responsive text-nowrap">
            <div
              id="companyinfo_table_wrapper"
              className="dataTables_wrapper dt-bootstrap5 no-footer"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div
                    className="dataTables_length"
                    id="companyinfo_table_length"
                  >
                    <label>
                      Show
                      <select
                        name="companyinfo_table_length"
                        aria-controls="companyinfo_table"
                        className="form-select form-select-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div
                    id="companyinfo_table_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="companyinfo_table"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row dt-row">
                <div className="col-sm-12">
                  <table
                    className="table table-bordered dataTable no-footer"
                    id="companyinfo_table"
                    aria-describedby="companyinfo_table_info"
                    style={{ width: "1354px" }}
                  >
                    <thead className="table-secondary">
                      <tr>
                        <td
                          className="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="SL No: activate to sort column descending"
                          style={{ width: "25.0px" }}
                        >
                          SL No.
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Company Name: activate to sort column ascending"
                          style={{ width: "100.2px" }}
                        >
                          Company Name
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Company ID: activate to sort column ascending"
                          style={{ width: "100.2px" }}
                        >
                          Company ID
                        </td>

                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Incorporation No: activate to sort column ascending"
                          style={{ width: "100.2px" }}
                        >
                          Incorporation No
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "100px" }}
                        >
                          Action
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data?.data?.length>0 && data?.data?.map((company,index)=>{
                          console.log(company);
                          return (
                            <tr key={index}>
                              <td className="sorting_1">{index+1}</td>
                              <td>{company.name}</td>
                              <td>{company.companyid}</td>
                              <td>{company.incorporation_no}</td>
                              <td>
                          <Link
                            to={{
                              pathname: `/systemAdmin/companyInfoDetails`,
                              state: {company}
                            }}
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i className="mdi mdi-eye"></i>
                          </Link>
                          <a
                            href=""
                            className="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                            </tr>
                        )})
                      }
                      
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="companyinfo_table_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 5 of 5 entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="companyinfo_table_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="companyinfo_table_previous"
                      >
                        <a
                          aria-controls="companyinfo_table"
                          aria-disabled="true"
                          role="link"
                          data-dt-idx="previous"
                          tabindex="0"
                          className="page-link"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="paginate_button page-item active">
                        <a
                          href="#"
                          aria-controls="companyinfo_table"
                          role="link"
                          aria-current="page"
                          data-dt-idx="0"
                          tabindex="0"
                          className="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next disabled"
                        id="companyinfo_table_next"
                      >
                        <a
                          aria-controls="companyinfo_table"
                          aria-disabled="true"
                          role="link"
                          data-dt-idx="next"
                          tabindex="0"
                          className="page-link"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyInfo;
