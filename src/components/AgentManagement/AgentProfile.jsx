import React, { useState, useRef } from "react";
import Select from "react-select";
import { apiFeetchCompanyProfile } from "../../services/EmpManagement/apiCompanyProfile";
import { useGetDropDowns } from "../../hooks/useGetDropDowns";

const AgentProfile = () => {
  const { dropDowns: designations } = useGetDropDowns(
    "department_designation_handler"
  );
  const { dropDowns: departmentName } = useGetDropDowns(
    "department_name_handler"
  );
  const { dropDowns: branchType } = useGetDropDowns(
    "system_branch_type_handler"
  );
  const { dropDowns: grades } = useGetDropDowns("department_grade_handler");
  const { dropDowns: levels } = useGetDropDowns("department_label_handler");

  const agentName = useRef(null);
  const agentId = useRef(null);
  const photo = useRef(null);
  const phoneNo = useRef(null);
  const whatsAppNo = useRef(null);
  const emailId = useRef(null);
  const emergencyContactNo = useRef(null);
  const dateofJoining = useRef(null);
  const dateofLeaving = useRef(null);
  const branch = useRef(null);
  const department = useRef(null);
  const designation = useRef(null);
  const level = useRef(null);
  const grade = useRef(null);
  const readRef = useRef(null);
  const editRef = useRef(null);
  const writeRef = useRef(null);
  const deleteRef = useRef(null);
  const permanentAddress = useRef(null);
  const permanentCountry = useRef(null);
  const permanentState = useRef(null);
  const permanentCity = useRef(null);
  const permanentZipCode = useRef(null);
  const presentAddress = useRef(null);
  const presentCountry = useRef(null);
  const presentState = useRef(null);
  const presentCity = useRef(null);
  const presentZipCode = useRef(null);
  const personalProfileNationality = useRef(null);
  const personalProfileGender = useRef(null);
  const personalProfileDob = useRef(null);
  const personalProfileMarital = useRef(null);
  const personalProfileAnniversary = useRef(null);
  const personalProfileReligion = useRef(null);
  const presentbloodgroup = useRef(null);
  const presentMedicalissue = useRef(null);

  const countries = [
    "Australia",
    "Bangladesh",
    "Belarus",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Israel",
    "Italy",
    "Japan",
    "Korea, Republic of",
    "Mexico",
    "Philippines",
    "Russian Federation",
    "South Africa",
    "Thailand",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];

  const [familyMembers, setFamilyMembers] = useState([
    {
      name: "",
      relation: "",
      dependency: "",
      gender: "",
      age: "",
      phone: "",
      email: "",
      dob: "",
      occupations: "",
      education: "",
      adhar: "",
    },
  ]);

  const handleAddMember = () => {
    setFamilyMembers([
      ...familyMembers,
      {
        name: "",
        relation: "",
        dependency: "",
        gender: "",
        age: "",
        phone: "",
        email: "",
        dob: "",
        occupations: "",
        education: "",
        adhar: "",
      },
    ]);
  };

  const handleRemoveMember = index => {
    const newFamilyMembers = [...familyMembers];
    newFamilyMembers.splice(index, 1);
    setFamilyMembers(newFamilyMembers);
  };

  const handleChangeMember = (index, event) => {
    const { name, value } = event.target;
    const newFamilyMembers = [...familyMembers];
    newFamilyMembers[index][name] = value;
    setFamilyMembers(newFamilyMembers);
  };

  const [educationFields, setEducationFields] = useState([
    {
      educationcourseName: "",
      educationboardName: "",
      educationyearsToComplete: "",
      educationacademicYear: "",
      educationmarkType: "",
      educationsecureMark: "",
      educationtotalMark: "",
      educationdivision: "",
      educationcertificate: "",
      educationmarklist: "",
    },
  ]);

  const handleAddField = () => {
    setEducationFields([
      ...educationFields,
      {
        educationcourseName: "",
        educationboardName: "",
        educationyearsToComplete: "",
        educationacademicYear: "",
        educationmarkType: "",
        educationsecureMark: "",
        educationtotalMark: "",
        educationdivision: "",
        educationcertificate: "",
        educationmarklist: "",
      },
    ]);
  };

  const handleRemoveFieldEducation = index => {
    const newFields = [...educationFields];
    newFields.splice(index, 1);
    setEducationFields(newFields);
  };

  const handleChangeEducation = (index, event) => {
    const { name, value } = event.target;
    const newFields = [...educationFields];
    newFields[index][name] = value;
    setEducationFields(newFields);
  };

  const [TrainingFormData, setTrainingFormData] = useState([
    { course: "", board: "", duration: "", certificateNumber: "", skills: "" },
  ]);

  const addFormItemTraining = () => {
    setTrainingFormData([
      ...TrainingFormData,
      {
        course: "",
        board: "",
        duration: "",
        certificateNumber: "",
        skills: "",
      },
    ]);
  };

  const deleteFormItemTraining = index => {
    const updatedFormData = TrainingFormData.filter(
      (_, itemIndex) => itemIndex !== index
    );
    setTrainingFormData(updatedFormData);
  };

  const handleInputChangeTraining = (index, event) => {
    const { name, value } = event.target;
    const updatedFormData = TrainingFormData.map((item, itemIndex) =>
      itemIndex === index ? { ...item, [name]: value } : item
    );
    setTrainingFormData(updatedFormData);
  };

  const [experiences, setExperiences] = useState([
    {
      organisationName: "",
      branchName: "",
      years: "",
      designation: "",
      salary: "",
      joiningLetter: null,
      experienceLetter: null,
      reportingPerson: "",
      reportingContact: "",
      reasonForLeaving: "",
    },
  ]);

  const handleChangeExperiences = (index, event) => {
    const { name, value, files } = event.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = files ? files[0] : value;
    setExperiences(newExperiences);
  };

  const handleAddExperiences = () => {
    setExperiences([
      ...experiences,
      {
        organisationName: "",
        branchName: "",
        years: "",
        designation: "",
        salary: "",
        joiningLetter: null,
        experienceLetter: null,
        reportingPerson: "",
        reportingContact: "",
        reasonForLeaving: "",
      },
    ]);
  };

  const handleDeleteExperiences = index => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillsOptions = [
    { value: "php", label: "PHP" },
    { value: "Wordpress", label: "Wordpress" },
    { value: "Laravel", label: "Laravel" },
    { value: "Figma", label: "Figma" },
    { value: "Illustrator", label: "Illustrator" },
    { value: "React", label: "React js" },
  ];

  const handleChangeSkills = selectedOptions => {
    setSelectedSkills(selectedOptions);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const permissions = {
      newCustomerSignup: {
        read: readRef.current?.checked,
        edit: editRef.current?.checked,
        write: writeRef.current?.checked,
        delete: deleteRef.current?.checked,
      },
    };

    const permissionsArray = Object.entries(permissions.newCustomerSignup)
      .filter(([key, value]) => value)
      .map(([key]) => key);

    const permissionsString = permissionsArray.join(", ");

    const commaSeparatedSkills = selectedSkills
      .map(skill => skill.value)
      .join(", ");

    const data = {
      company_profile: {
        empid: agentId.current?.value,
        name: agentName.current?.value,
        mobileno: phoneNo.current?.value,
        whatsapp: whatsAppNo.current?.value,
        email: emailId.current?.value,
        emergency_no: emergencyContactNo.current?.value,
        date_of_joining: dateofJoining.current?.value,
        date_of_leaving: dateofLeaving.current?.value,
        branch: branch.current?.value,
        department: department.current?.value,
        designation: designation.current?.value,
        level: level.current?.value,
        grade: grade.current?.value,
        role: permissionsString,
      },
      address: {
        present_add: presentAddress.current?.value,
        present_country: presentCountry.current?.value,
        present_state: presentState.current?.value,
        present_city: presentCity.current?.value,
        present_pincode: presentZipCode.current?.value,
        permanent_add: permanentAddress.current?.value,
        permanent_pincode: permanentZipCode.current?.value,
        permanent_city: permanentCity.current?.value,
        permanent_state: permanentState.current?.value,
        permanent_country: permanentCountry.current?.value,
        emp_id: agentId.current?.value,
      },

      personal_profile: {
        gender: personalProfileGender.current?.value,
        nationality: personalProfileNationality.current?.value,
        DOB: personalProfileDob.current?.value,
        marital_status: personalProfileMarital.current?.value,
        anniversary_date: personalProfileAnniversary.current?.value,
        religion: personalProfileReligion.current?.value,
        blood_group: presentbloodgroup.current?.value,
        any_medical_issues: presentMedicalissue.current?.value,
        agent_id: agentId.current?.value,
      },
      family_profile: {
        details: familyMembers,
        agent_id: agentId.current?.value,
      },
      education_profile: {
        details: educationFields,
        agent_id: agentId.current?.value,
      },
      training: {
        details: TrainingFormData,
        agent_id: agentId.current?.value,
      },
      experience: {
        details: experiences,
        agent_id: agentId.current?.value,
      },
      skill_level: {
        details: commaSeparatedSkills,
        agent_id: agentId.current?.value,
      },
    };

    apiFeetchCompanyProfile({ data });
  };
  console.log(departmentName);

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5>
          <span className="text-muted fw-light">Agent Management /</span> Agent
          Profile
        </h5>
        <div className="row">
          <div className="col-xl-12">
            <div className="card mb-4">
              <div className=" card-header p-0"></div>
              <div className="card-body">
                <div className="tab-content p-0">
                  <form onSubmit={handleSubmit}>
                    <div className="row mt-2 gy-4">
                      {[
                        {
                          label: "Agent Name",
                          type: "text",
                          ref: agentName,
                        },
                        {
                          label: "Agent ID",
                          type: "number",
                          ref: agentId,
                        },
                        { label: "Photo", type: "file", ref: photo },
                        { label: "Phone No", type: "number", ref: phoneNo },
                        {
                          label: "WhatsApp No",
                          type: "number",
                          ref: whatsAppNo,
                        },
                        { label: "Email ID", type: "email", ref: emailId },
                        {
                          label: "Emergency Contact No",
                          type: "number",
                          ref: emergencyContactNo,
                        },
                        {
                          label: "Date of Joining",
                          type: "date",
                          ref: dateofJoining,
                        },
                        {
                          label: "Date of Leaving",
                          type: "date",
                          ref: dateofLeaving,
                        },
                      ].map((field, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="form-floating form-floating-outline">
                            <input
                              className="form-control"
                              type={field.type}
                              id={field.label.replace(" ", "")}
                              placeholder={field.label}
                              ref={field.ref}
                            />
                            <label htmlFor={field.label.replace(" ", "")}>
                              {field.label}
                            </label>
                          </div>
                        </div>
                      ))}
                      {[
                        {
                          label: "Branch",
                          options: branchType,
                          ref: branch,
                        },
                        {
                          label: "Department",
                          options: departmentName,
                          ref: department,
                        },
                        {
                          label: "Designation",
                          options: designations,
                          ref: designation,
                        },
                        {
                          label: "Level",
                          options: levels,
                          ref: level,
                        },
                        {
                          label: "Grade",
                          options: grades,
                          ref: grade,
                        },
                      ].map((selectField, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="form-floating form-floating-outline">
                            <select
                              id={selectField.label.replace(" ", "")}
                              className="select2 form-select"
                              ref={selectField.ref}
                            >
                              <option value="">{selectField.label}</option>
                              {selectField.options?.map((el, index) => (
                                <option value={el.id} key={index}>
                                  {selectField.label === "Designation" &&
                                    el.designation}
                                  {selectField.label === "Branch" &&
                                    el.type_name}
                                  {selectField.label === "Department" &&
                                    el.name}
                                  {selectField.label === "Level" &&
                                    el.label_description}
                                  {selectField.label === "Grade" &&
                                    el.grade_description}
                                </option>
                              ))}
                            </select>
                            <label htmlFor={selectField.label.replace(" ", "")}>
                              {selectField.label}
                            </label>
                          </div>
                        </div>
                      ))}

                      <div className="col-md-12">
                        <div className="table-responsive border rounded">
                          <table className="table">
                            <thead className="table-light">
                              <tr>
                                <th className="text-nowrap w-50">Roles Type</th>
                                <th className="text-nowrap text-center w-25">
                                  Read
                                </th>
                                <th className="text-nowrap text-center">
                                  Edit
                                </th>
                                <th className="text-nowrap text-center w-25">
                                  Write
                                </th>
                                <th className="text-nowrap text-center">
                                  Delete
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-nowrap text-heading">
                                  New customer sign up
                                </td>
                                <td>
                                  <div className="form-check mb-0 d-flex justify-content-center">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      ref={readRef}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="form-check mb-0 d-flex justify-content-center">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      ref={editRef}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="form-check mb-0 d-flex justify-content-center">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      ref={writeRef}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="form-check mb-0 d-flex justify-content-center">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      ref={deleteRef}
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div>
                          {/* Permanent Address */}
                          <h5 className="card-header">Permanent Address</h5>
                          <div className="card-body pt-1">
                            <div className="row gy-3">
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="permanentAddress"
                                    name="permanentAddress"
                                    placeholder="Address"
                                    ref={permanentAddress}
                                  />
                                  <label htmlFor="permanentAddress">
                                    Address
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <select
                                    id="permanentCountry"
                                    className="select2 form-select"
                                    name="permanentCountry"
                                    ref={permanentCountry}
                                  >
                                    <option value="">Country</option>
                                    {countries.map(country => (
                                      <option key={country} value={country}>
                                        {country}
                                      </option>
                                    ))}
                                  </select>
                                  <label htmlFor="permanentCountry">
                                    Country
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="permanentState"
                                    name="permanentState"
                                    placeholder="State"
                                    ref={permanentState}
                                  />
                                  <label htmlFor="permanentState">
                                    {" "}
                                    State{" "}
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="permanentCity"
                                    name="permanentCity"
                                    placeholder="City"
                                    ref={permanentCity}
                                  />
                                  <label htmlFor="permanentCity">City</label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="permanentZipCode"
                                    name="permanentZipCode"
                                    placeholder="PIN Code"
                                    maxLength="6"
                                    ref={permanentZipCode}
                                  />
                                  <label htmlFor="permanentZipCode">
                                    PIN Code
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Present Address */}
                          <h5 className="card-header">Present Address</h5>
                          <div className="card-body pt-1">
                            <div className="row gy-3">
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="presentAddress"
                                    name="presentAddress"
                                    placeholder="Address"
                                    ref={presentAddress}
                                  />
                                  <label htmlFor="presentAddress">
                                    Address
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <select
                                    id="presentCountry"
                                    className="select2 form-select"
                                    name="presentCountry"
                                    ref={presentCountry}
                                  >
                                    <option value="">Country</option>
                                    {countries.map(country => (
                                      <option key={country} value={country}>
                                        {country}
                                      </option>
                                    ))}
                                  </select>
                                  <label htmlFor="presentCountry">
                                    Country
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="presentState"
                                    name="presentState"
                                    placeholder="State"
                                    ref={presentState}
                                  />
                                  <label htmlFor="presentState">State</label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="presentCity"
                                    name="presentCity"
                                    placeholder="City"
                                    ref={presentCity}
                                  />
                                  <label htmlFor="presentCity">City</label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="presentZipCode"
                                    name="presentZipCode"
                                    placeholder="PIN Code"
                                    maxLength="6"
                                    ref={presentZipCode}
                                  />
                                  <label htmlFor="presentZipCode">
                                    PIN Code
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="card-header">Personal Profile</h5>
                        <div className="card-body pt-1">
                          <div id="formValidationExamples" className="row g-3">
                            <div className="col-md-4">
                              <div className="form-floating form-floating-outline">
                                <select
                                  id="form-repeater-1-3"
                                  className="form-select"
                                  ref={personalProfileGender}
                                >
                                  <option value="M">Male</option>
                                  <option value="F">Female</option>
                                  <option value="O">Other</option>
                                </select>
                                <label htmlFor="form-repeater-1-3">
                                  Gender
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  className="form-control"
                                  id=""
                                  name="Nationality"
                                  placeholder="Nationality"
                                  ref={personalProfileNationality}
                                />
                                <label htmlFor="Nationality">Nationality</label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="date"
                                  className="form-control flatpickr-validation"
                                  name="formValidationDob"
                                  id="formValidationDob"
                                  placeholder="YYYY-MM-DD"
                                  ref={personalProfileDob}
                                />
                                <label htmlFor="formValidationDob">DOB</label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-floating form-floating-outline">
                                <select
                                  id="form-repeater-1-3"
                                  className="form-select"
                                  ref={personalProfileMarital}
                                >
                                  <option value="S">Single</option>
                                  <option value="M">Married</option>
                                  <option value="D">Divorced</option>
                                  <option value="W">Widowed</option>
                                </select>
                                <label htmlFor="form-repeater-1-3">
                                  Marital Status
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="date"
                                  className="form-control flatpickr-validation"
                                  name="AnniversaryDate"
                                  id="AnniversaryDate"
                                  placeholder="YYYY-MM-DD"
                                  ref={personalProfileAnniversary}
                                />
                                <label htmlFor="AnniversaryDate">
                                  Anniversary Date
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  className="form-control"
                                  id=""
                                  name="Religion"
                                  placeholder="Religion"
                                  ref={personalProfileReligion}
                                />
                                <label htmlFor="Religion">Religion</label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-floating form-floating-outline">
                                <select
                                  id="form-repeater-1-3"
                                  className="form-select"
                                  ref={presentbloodgroup}
                                >
                                  <option value="A+">A+</option>
                                  <option value="A-">A-</option>
                                  <option value="B+">B+</option>
                                  <option value="B-">B-</option>
                                  <option value="O+">O+</option>
                                  <option value="O-">O-</option>
                                  <option value="AB+">AB+</option>
                                  <option value="AB-">AB-</option>
                                </select>
                                <label htmlFor="form-repeater-1-3">
                                  Blood Group
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  className="form-control"
                                  id=""
                                  name="AnyMedicalIssues"
                                  placeholder="Any Medical Issues"
                                  ref={presentMedicalissue}
                                />
                                <label htmlFor="AnyMedicalIssues">
                                  Any Medical Issues
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="card-header">Family Profile</h5>
                      <div className="card-body">
                        <form className="form-repeater">
                          <div data-repeater-list="group-a">
                            {familyMembers.map((member, index) => (
                              <div data-repeater-item key={index}>
                                <div className="row">
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-name-${index}`}
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={member.name}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-name-${index}`}
                                      >
                                        Name
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-relation-${index}`}
                                        className="form-control"
                                        placeholder="Relation"
                                        name="relation"
                                        value={member.relation}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-relation-${index}`}
                                      >
                                        Relation
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-dependency-${index}`}
                                        className="form-control"
                                        placeholder="Dependency"
                                        name="dependency"
                                        value={member.dependency}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-dependency-${index}`}
                                      >
                                        Dependency
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <select
                                        id={`form-repeater-gender-${index}`}
                                        className="form-select"
                                        name="gender"
                                        value={member.gender}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      >
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                      </select>
                                      <label
                                        htmlFor={`form-repeater-gender-${index}`}
                                      >
                                        Gender
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        className="form-control"
                                        type="number"
                                        id={`form-repeater-age-${index}`}
                                        name="age"
                                        placeholder="Age"
                                        value={member.age}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-age-${index}`}
                                      >
                                        Age
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        className="form-control"
                                        type="text"
                                        id={`form-repeater-phone-${index}`}
                                        name="phone"
                                        placeholder="Phone No"
                                        value={member.phone}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-phone-${index}`}
                                      >
                                        Phone No
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        className="form-control"
                                        type="text"
                                        id={`form-repeater-email-${index}`}
                                        name="email"
                                        placeholder="Email ID"
                                        value={member.email}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-email-${index}`}
                                      >
                                        Email ID
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        className="form-control"
                                        type="date"
                                        id={`form-repeater-dob-${index}`}
                                        name="dob"
                                        value={member.dob}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-dob-${index}`}
                                      >
                                        DOB
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        className="form-control"
                                        type="text"
                                        id={`form-repeater-occupations-${index}`}
                                        name="occupations"
                                        placeholder="Occupations"
                                        value={member.occupations}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-occupations-${index}`}
                                      >
                                        Occupations
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        className="form-control"
                                        type="text"
                                        id={`form-repeater-education-${index}`}
                                        name="education"
                                        placeholder="Education"
                                        value={member.education}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-education-${index}`}
                                      >
                                        Education
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        className="form-control"
                                        type="number"
                                        id={`form-repeater-adhar-${index}`}
                                        name="adhar"
                                        placeholder="Adhar No"
                                        value={member.adhar}
                                        onChange={e =>
                                          handleChangeMember(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-adhar-${index}`}
                                      >
                                        Adhar No
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0">
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger"
                                      onClick={() => handleRemoveMember(index)}
                                    >
                                      <i className="mdi mdi-close me-1"></i>
                                      <span className="align-middle">
                                        Delete
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <hr />
                              </div>
                            ))}
                          </div>
                          <div className="mb-0">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleAddMember}
                            >
                              <i className="mdi mdi-plus me-1"></i>
                              <span className="align-middle">Add</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div>
                      <h5 className="card-header">Education Profile</h5>
                      <div className="card-body">
                        <form className="form-repeater">
                          <div data-repeater-list="group-a">
                            {educationFields.map((field, index) => (
                              <div data-repeater-item key={index}>
                                <div className="row">
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-courseName-${index}`}
                                        className="form-control"
                                        placeholder="Course Name"
                                        name="courseName"
                                        value={field.courseName}
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-courseName-${index}`}
                                      >
                                        Course Name
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-boardName-${index}`}
                                        className="form-control"
                                        placeholder="Board Name"
                                        name="boardName"
                                        value={field.boardName}
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-boardName-${index}`}
                                      >
                                        Board Name
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-yearsToComplete-${index}`}
                                        className="form-control"
                                        placeholder="Years to complete"
                                        name="yearsToComplete"
                                        value={field.yearsToComplete}
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-yearsToComplete-${index}`}
                                      >
                                        Years to complete
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-academicYear-${index}`}
                                        className="form-control"
                                        placeholder="Academic Year"
                                        name="academicYear"
                                        value={field.academicYear}
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-academicYear-${index}`}
                                      >
                                        Academic Year
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-markType-${index}`}
                                        className="form-control"
                                        placeholder="%"
                                        name="markType"
                                        value={field.markType}
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-markType-${index}`}
                                      >
                                        Mark Type
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-secureMark-${index}`}
                                        className="form-control"
                                        placeholder="Secure Mark"
                                        name="secureMark"
                                        value={field.secureMark}
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-secureMark-${index}`}
                                      >
                                        Secure Mark
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-totalMark-${index}`}
                                        className="form-control"
                                        placeholder="Total Mark"
                                        name="totalMark"
                                        value={field.totalMark}
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-totalMark-${index}`}
                                      >
                                        Total Mark
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="text"
                                        id={`form-repeater-division-${index}`}
                                        className="form-control"
                                        placeholder="Division"
                                        name="division"
                                        value={field.division}
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-division-${index}`}
                                      >
                                        Division
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="file"
                                        className="form-control"
                                        id={`form-repeater-certificate-${index}`}
                                        name="certificate"
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-certificate-${index}`}
                                      >
                                        Certificate
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                    <div className="form-floating form-floating-outline">
                                      <input
                                        type="file"
                                        className="form-control"
                                        id={`form-repeater-marklist-${index}`}
                                        name="marklist"
                                        onChange={e =>
                                          handleChangeEducation(index, e)
                                        }
                                      />
                                      <label
                                        htmlFor={`form-repeater-marklist-${index}`}
                                      >
                                        Marklist
                                      </label>
                                    </div>
                                  </div>
                                  <div className="mb-3 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0">
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger"
                                      onClick={() =>
                                        handleRemoveFieldEducation(index)
                                      }
                                    >
                                      <i className="mdi mdi-close me-1"></i>
                                      <span className="align-middle">
                                        Delete
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <hr />
                              </div>
                            ))}
                          </div>
                          <div className="mb-0">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleAddField}
                            >
                              <i className="mdi mdi-plus me-1"></i>
                              <span className="align-middle">Add</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div>
                      <h5 className="card-header">
                        Training & Education Certification
                      </h5>
                      <div className="card-body">
                        <form className="form-repeater">
                          {TrainingFormData.map((item, index) => (
                            <div key={index} data-repeater-item>
                              <div className="row">
                                <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                  <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      id={`form-repeater-${index}-course`}
                                      name="course"
                                      className="form-control"
                                      placeholder="Course Name"
                                      value={item.course}
                                      onChange={e =>
                                        handleInputChangeTraining(index, e)
                                      }
                                    />
                                    <label
                                      htmlFor={`form-repeater-${index}-course`}
                                    >
                                      Course Name
                                    </label>
                                  </div>
                                </div>
                                <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                  <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      id={`form-repeater-${index}-board`}
                                      name="board"
                                      className="form-control"
                                      placeholder="Board Name"
                                      value={item.board}
                                      onChange={e =>
                                        handleInputChangeTraining(index, e)
                                      }
                                    />
                                    <label
                                      htmlFor={`form-repeater-${index}-board`}
                                    >
                                      Board Name
                                    </label>
                                  </div>
                                </div>
                                <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                  <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      id={`form-repeater-${index}-duration`}
                                      name="duration"
                                      className="form-control"
                                      placeholder="Years to complete"
                                      value={item.duration}
                                      onChange={e =>
                                        handleInputChangeTraining(index, e)
                                      }
                                    />
                                    <label
                                      htmlFor={`form-repeater-${index}-duration`}
                                    >
                                      Years
                                    </label>
                                  </div>
                                </div>
                                <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                  <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      id={`form-repeater-${index}-certificateNumber`}
                                      name="certificateNumber"
                                      className="form-control"
                                      placeholder="Certificate No"
                                      value={item.certificateNumber}
                                      onChange={e =>
                                        handleInputChangeTraining(index, e)
                                      }
                                    />
                                    <label
                                      htmlFor={`form-repeater-${index}-certificateNumber`}
                                    >
                                      Certificate No
                                    </label>
                                  </div>
                                </div>
                                <div className="mb-3 col-lg-6 col-xl-4 col-12 mb-0">
                                  <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      id={`form-repeater-${index}-skills`}
                                      name="skills"
                                      className="form-control"
                                      placeholder="Skill Set"
                                      value={item.skills}
                                      onChange={e =>
                                        handleInputChangeTraining(index, e)
                                      }
                                    />
                                    <label
                                      htmlFor={`form-repeater-${index}-skills`}
                                    >
                                      Skill Set
                                    </label>
                                  </div>
                                </div>
                                <div className="mb-3 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0">
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    data-repeater-delete
                                    onClick={() =>
                                      deleteFormItemTraining(index)
                                    }
                                  >
                                    <i className="mdi mdi-close me-1"></i>
                                    <span className="align-middle">Delete</span>
                                  </button>
                                </div>
                              </div>
                              <hr />
                            </div>
                          ))}
                          <div className="mb-0">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-repeater-create
                              onClick={addFormItemTraining}
                            >
                              <i className="mdi mdi-plus me-1"></i>
                              <span className="align-middle">Add</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div>
                      <h5 className="card-header">Experience</h5>
                      <div className="card-body">
                        <form className="form-repeater">
                          {experiences.map((experience, index) => (
                            <div
                              key={index}
                              className="mb-3"
                              data-repeater-item
                            >
                              <div className="row">
                                {Object.entries(experience).map(
                                  ([key, value]) => (
                                    <div
                                      key={key}
                                      className="mb-3 col-lg-6 col-xl-4 col-12 mb-0"
                                    >
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          type={
                                            key === "joiningLetter" ||
                                            key === "experienceLetter"
                                              ? "file"
                                              : "text"
                                          }
                                          className="form-control"
                                          id={`${key}-${index}`}
                                          placeholder={key}
                                          name={key}
                                          value={
                                            typeof value === "string"
                                              ? value
                                              : undefined
                                          }
                                          onChange={e =>
                                            handleChangeExperiences(index, e)
                                          }
                                        />
                                        <label htmlFor={`${key}-${index}`}>
                                          {key
                                            .replace(/([A-Z])/g, " $1")
                                            .replace(/^./, str =>
                                              str.toUpperCase()
                                            )}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                )}
                                <div className="mb-3 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0">
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() =>
                                      handleDeleteExperiences(index)
                                    }
                                  >
                                    <i className="mdi mdi-close me-1"></i>
                                    <span className="align-middle">Delete</span>
                                  </button>
                                </div>
                              </div>
                              <hr />
                            </div>
                          ))}
                          <div className="mb-0">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleAddExperiences}
                            >
                              <i className="mdi mdi-plus me-1"></i>
                              <span className="align-middle">Add</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div>
                      <h5 className="card-header">Skill Level</h5>
                      <div className="card-body pt-1">
                        <div className="col-md-4">
                          <div className="form-floating form-floating-outline">
                            <Select
                              id="skill-level"
                              isMulti
                              options={skillsOptions}
                              value={selectedSkills}
                              onChange={handleChangeSkills}
                              className="basic-multi-select"
                              classNamePrefix="select"
                            />
                            <label htmlFor="skill-level"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button type="submit" className="btn btn-success me-2">
                        Submit
                      </button>
                      {/* <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleResetSkills}
                      >
                        Cancel
                      </button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentProfile;
