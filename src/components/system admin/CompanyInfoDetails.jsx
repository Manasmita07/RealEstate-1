import { useLocation } from "react-router-dom";
import { useGetBranch } from "../../hooks/systemAdmin/useGetCompanyDetails";
import Title from "./subItem/Title";
function CompanyInfoDetails() {
  const {data}=useGetBranch();
  const location = useLocation();
  const company  = location.state || {};
  console.log(company);
  return (
    <>
      <Title value="Company" to="/systemAdmin/companyInfoDetails" />
      <div className="container-xxl flex-grow-1 container-p-y">
  <div className="card-header d-flex justify-content-between align-items-center py-2">
    <h5><span className="text-muted fw-light">System Admin /</span> Company Info Details</h5>
  </div>
  <div className="card">
    <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
      <h5 className="mb-0">Company Info:</h5>
      <a href="javascript: history.go(-1)" className="ms-2 btn  btn-primary btn-sm waves-effect waves-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Back to list"><span className="mdi mdi-keyboard-backspace" /></a>
    </div>
    <div className="card-body">
      <h6 className="text-primary">01: Details</h6>
      <hr />
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Company Name:</label>
            <span className="text-black">ADITYA Nayak</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Alias:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Company ID:</label>
            <span className="text-black">eq-660264</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Company Type:</label>
            <span className="text-black">Corporate Office</span>
          </div>
        </div>
        <div className="col-md-4 col-12">   
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Incorporation No:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">TAX Certificate Details:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">PAN Details:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Country:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">City:</label>
            <span className="text-black">Bhubaneswar</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">PAN:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label htmlFor="defaultInput" className="fw-semibold">Incorporation Certificate:</label>
            <img src="assets/img/customizer/border.svg" width={150} className="thumbnail ezoom" height={100} alt="Logo" />   
          </div>
        </div>
      </div>
      <div className="divider text-start">
        <div className="divider-text fs-6 text-primary">02: Brand Info</div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="mb-3">
            <label htmlFor="defaultInput" className="fw-semibold">Upload Logo:</label>
            <img src="assets/img/branding/brand-img-light.png" className="thumbnail ezoom" alt="Logo" />   
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="mb-3">
            <label htmlFor="defaultInput" className="fw-semibold">Favicon:</label>
            <img src="assets/img/branding/logo.png" className="thumbnail ezoom" alt="Logo" />   
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="mb-3">
            <label htmlFor="defaultInput" className="fw-semibold">Header (Letterhead):</label>
            <img src="assets/img/branding/brand-img-light.png" className="thumbnail ezoom" alt="Logo" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="mb-3">
            <label htmlFor="defaultInput" className="fw-semibold">Header (Letterhead):</label>
            <img src="assets/img/branding/brand-img-light.png" alt="Logo" />   
          </div>
        </div>
      </div>
      <div className="divider text-start">
        <div className="divider-text fs-6 text-primary">03: Business Details</div>
      </div>
      <div className="row">
        <div className="col-md-12 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Address:</label>
            <span className="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
          </div>
        </div>
      </div>
      <div className="divider text-start">
        <div className="divider-text fs-6 text-primary">04: Contact Info</div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Name:</label>
            <span className="text-black">ADITYA Nayak</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Designation:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Role:</label>
            <span className="text-black">eq-660264</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Email Id:</label>
            <span className="text-black"><a href="mailto:devnaditya@gmail.com">devnaditya@gmail.com</a></span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Phone No:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
        <div className="col-md-4 col-12">   
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">WhatsApp No:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
      </div>
      <div className="divider text-start">
        <div className="divider-text fs-6 text-primary">05: Social Details</div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Name:</label>
            <span className="text-black">ADITYA Nayak</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">URL:</label>
            <span className="text-black">http://localhost/real_estate_crm/company</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label htmlFor="defaultInput" className="fw-semibold">Favicon:</label>
            <img src="assets/img/branding/logo.png" className="thumbnail ezoom" alt="Logo" />   
          </div>
        </div>
      </div>
      <div className="divider text-start">
        <div className="divider-text fs-6 text-primary">06: Other Details</div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Name:</label>
            <span className="text-black">ADITYA Nayak</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="mb-3">
            <label className="fw-semibold" htmlFor="exampleFormControlReadOnlyInputPlain1">Example textarea:</label>
            <span className="text-black">Not Available</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default CompanyInfoDetails;
