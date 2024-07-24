import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@mdi/font/css/materialdesignicons.min.css";
import "./css/rtl/core.css";
import "./css/rtl/theme-default.css";

import Dashboard from "./components/Dashboard/dashboard";
import RolesAndRights from "./components/Rolesandright/RolesAndRights";
import DepartmentName from "./components/Department/department_name";
import Designation from "./components/Department/designation";
import Level from "./components/Department/label";
import Grade from "./components/Department/grade";
import Organisation_str from "./components/Department/organisation_str";

import AppLayout from "./ui/AppLayout";

import SystemAdmin from "./components/system admin/SystemAdmin";
import CompanyForm from "./components/system admin/Forms/CompanyForm";
import BankInfoForm from "./components/system admin/Forms/BankInfoForm";
import Board from "./components/system admin/Forms/Board";
import BranchInfoForm from "./components/system admin/Forms/BranchInfoForm";
import BranchType from "./components/system admin/BranchType";
import Director from "./components/system admin/Director";
import BankInfo from "./components/system admin/BankInfo";
import BranchInfo from "./components/system admin/BranchInfo";
import CompanyInfo from "./components/system admin/CompanyInfo";

import ApprovalBody from "./components/Project/ApprovalBody";
import ProjectType from "./components/Project/ProjectType";
import RaiseCostType from "./components/Project/RaiseCostType";
import ProductType from "./components/Project/ProductType";
import AmenityMaster from "./components/Project/AmenityMaster";
import CommissionSetup from "./components/Project/CommissionSetup";
import NearbyMaster from "./components/Project/NearbyMaster";
import PaymentScheduleProject from "./components/Project/PaymentScheduleProject";
import Tax from "./components/Project/Tax";
import FacingMaster from "./components/Project/FacingMaster";
import ProjectList from "./components/Project/ProjectList";
import ProjectDetails from "./components/Project/ProjectDetails";
import ProjectHouseList from "./components/Project/ProjectHouseList";
import AddProduct from "./components/Project/AddProduct";
import AddPayment from "./components/Project/AddPayment";
import AddAmenity from "./components/Project/AddAmenity";
import AddCommission from "./components/Project/AddCommission";
import AddTaxOthers from "./components/Project/AddTaxOthers";

import Employee from "./components/EmployeeManagement/Employee";
import Document from "./components/EmployeeManagement/Document";
import Kyc from "./components/EmployeeManagement/Kyc";
import Salary from "./components/EmployeeManagement/Salary";
import Companyprofile from "./components/EmployeeManagement/Companyprofile";
import Bankothers from "./components/EmployeeManagement/Bankothers";

import PreProject from "./components/PreProject/PreProject";
import NewProject from "./components/PreProject/NewProject";
import ConfirmProject from "./components/PreProject/ConfirmProject";

import DeadTable from "./components/enquiryBucket/DeadTable";
import EnquiryTable from "./components/enquiryBucket/EnquiryTable";
import BuyerPersona from "./components/enquiryBucket/BuyerPersona";
import CustomerForm from "./components/enquiryBucket/customerForm";
import ActivityStatus from "./components/enquiryBucket/ActivityStatus";
import EnquiryStatus from "./components/enquiryBucket/EnquiryStatus";
import EnquiryStage from "./components/enquiryBucket/EnquiryStage";
import EnquiryType from "./components/enquiryBucket/EnquiryType";
import SourceType from "./components/enquiryBucket/SourceType";
import CommunicationType from "./components/enquiryBucket/CommunicationType";
import VisitType from "./components/enquiryBucket/VisitType";
import QuotationType from "./components/enquiryBucket/QuotationType";
// import AddCustomerForm from "./components/enquiryBucket/AddCustomerForm";

import PaymentReciept from "./components/Sales/PaymentReciept";
import PaymentSchedule from "./components/Sales/PaymentSchedule";
import SalesAgreement from "./components/Sales/SalesAgreement";
import AddSalesAgreement from "./components/Sales/AddSalesAgreement";
import AddPaymentRecipt from "./components/Sales/AddPaymentRecipt";
import AddPaymentSchedule from "./components/Sales/AddPaymentSchedule";

import Customer from "./components/Customer/Customer";
import AddCustomerForm from "./components/Customer/AddCustomerForm";

import TeamManagement from "./components/TeamManagement/TeamManagement";

import Quotation from "./components/FollowUp/Quotation";
import PreSalesEnquiry from "./components/FollowUp/PreSalesEnquiry";
import FollowUp from "./components/FollowUp/FollowUp";

import GoalAndTarget from "./components/Incentives/GoalAndTarget";

// import Module from "./components/Rolesandright/Module";
import Module from "./components/Rolesandright/Module/Module";
import SubModule from "./components/Rolesandright/Module/SubModule";
import Functionality from "./components/Rolesandright/Module/Functionality";

import Territory from "./components/BusinessManagement/Territory";
import Area from "./components/BusinessManagement/Area";
import Zone from "./components/BusinessManagement/Zone";
import Country from "./components/BusinessManagement/Location/Country";
import State from "./components/BusinessManagement/Location/State";
import City from "./components/BusinessManagement/Location/City";
import Village from "./components/BusinessManagement/Location/Village";
import AreaGram from "./components/BusinessManagement/Location/AreaGram";
import Pin from "./components/BusinessManagement/Location/Pin";
import { Toaster } from "react-hot-toast";

import Profile from "./components/EmployeeManagement/Profile";
import Agent_Type from "./components/AgentManagement/Agent_Type";
import AgentProfile from "./components/AgentManagement/AgentProfile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/businessManagement/territory"
              element={<Territory />}
            />
            <Route path="/businessManagement/area" element={<Area />} />
            <Route
              path="/businessManagement/zoneAndSegment"
              element={<Zone />}
            />
            <Route path="/businessManagement/country" element={<Country />} />
            <Route path="/businessManagement/state" element={<State />} />
            <Route path="/businessManagement/city" element={<City />} />
            <Route path="/businessManagement/village" element={<Village />} />
            <Route path="/businessManagement/areaGram" element={<AreaGram />} />
            <Route path="/businessManagement/pin" element={<Pin />} />
            <Route path="/rolesRight" element={<RolesAndRights />} />
            {/* <Route path="/rolesRight/moduleForm" element={<Module />} /> */}
            <Route path="/rolesRight/Module/moduleForm" element={<Module />} />
            <Route
              path="/rolesRight/Module/subModule"
              element={<SubModule />}
            />
            <Route
              path="/rolesRight/Module/Functionality"
              element={<Functionality />}
            />
            <Route element={<SystemAdmin />}>
              <Route path="systemAdmin/companyInfo" element={<CompanyInfo />} />
              <Route
                path="systemAdmin/companyInfoForm"
                element={<CompanyForm />}
              />
              <Route path="systemAdmin/branchType" element={<BranchType />} />
              <Route path="systemAdmin/boardDirectors" element={<Director />} />
              <Route path="systemAdmin/bankInfo" element={<BankInfo />} />
              <Route path="systemAdmin/branchInfo" element={<BranchInfo />} />
            </Route>
            <Route path="systemAdmin/bankInfoForm" element={<BankInfoForm />} />
            <Route
              path="systemAdmin/branchInfoForm"
              element={<BranchInfoForm />}
            />
            <Route path="systemAdmin/boardForm" element={<Board />} />
            <Route
              path="department/departmentName"
              element={<DepartmentName />}
            />
            <Route path="department/designation" element={<Designation />} />
            <Route path="department/level" element={<Level />} />
            <Route path="department/grade" element={<Grade />} />
            <Route
              path="department/organisationStr"
              element={<Organisation_str />}
            />
            <Route path="preProject/preProjectTable" element={<PreProject />} />
            <Route path="preProject/newProject" element={<NewProject />} />
            <Route
              path="preProject/confirmProject"
              element={<ConfirmProject />}
            ></Route>
            <Route path="enquiryBucket/deadTable" element={<DeadTable />} />
            <Route
              path="enquiryBucket/enquiryTable"
              element={<EnquiryTable />}
            />
            <Route
              path="enquiryBucket/buyerPersona"
              element={<BuyerPersona />}
            />
            <Route
              path="enquiryBucket/customerForm"
              element={<CustomerForm />}
            />
            <Route
              path="enquiryBucket/activityStatus"
              element={<ActivityStatus />}
            />
            <Route
              path="enquiryBucket/enquiryStatus"
              element={<EnquiryStatus />}
            />
            <Route
              path="enquiryBucket/enquiryStage"
              element={<EnquiryStage />}
            />
            <Route path="enquiryBucket/enquiryType" element={<EnquiryType />} />
            <Route path="enquiryBucket/sourceType" element={<SourceType />} />
            <Route
              path="enquiryBucket/communicationType"
              element={<CommunicationType />}
            />
            <Route path="enquiryBucket/visitType" element={<VisitType />} />
            <Route
              path="enquiryBucket/quotationType"
              element={<QuotationType />}
            />
            {/* <Route
              path="enquiryBucket/AddCustomer"
              element={<AddCustomerForm />}
            /> */}
            <Route path="sales/paymentRecipt" element={<PaymentReciept />} />
            <Route path="sales/paymentSchedule" element={<PaymentSchedule />} />
            <Route path="sales/salesAgreement" element={<SalesAgreement />} />
            <Route
              path="sales/addSalesAgreement"
              element={<AddSalesAgreement />}
            />
            <Route
              path="/sales/addPaymentReciept"
              element={<AddPaymentRecipt />}
            />
            <Route
              path="/sales/addPaymentSchedule"
              element={<AddPaymentSchedule />}
            />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/addCustomer" element={<AddCustomerForm />} />
            <Route path="/teamManagement" element={<TeamManagement />} />
            <Route
              path="/AgentManagement/Agent_Type"
              element={<Agent_Type />}
            />
            <Route
              path="/AgentManagement/AgentProfile"
              element={<AgentProfile />}
            />
            <Route path="/followUp" element={<FollowUp />} />
            <Route
              path="/followUp/preSalesEnquiry"
              element={<PreSalesEnquiry />}
            />
            <Route path="/followUp/Quotation" element={<Quotation />} />
            <Route
              path="/incentive/goalAndTarget"
              element={<GoalAndTarget />}
            />
            <Route path="/project/approvalBody" element={<ApprovalBody />} />
            <Route path="/project/projectType" element={<ProjectType />} />
            <Route
              path="/project/paymentSchedule"
              element={<PaymentScheduleProject />}
            />
            <Route path="/project/productType" element={<ProductType />} />
            <Route path="/project/raiseCostType" element={<RaiseCostType />} />
            <Route path="/project/amenityMaster" element={<AmenityMaster />} />
            <Route path="/project/nearbyMaster" element={<NearbyMaster />} />
            <Route path="/project/facingMaster" element={<FacingMaster />} />
            <Route
              path="/project/commisionSetup"
              element={<CommissionSetup />}
            />
            €
            <Route path="/project/tax" element={<Tax />} />
            <Route path="/project/" element={<ProjectList />} />
            <Route
              path="/project/projectdetails/:id"
              element={<ProjectDetails />}
            />
            <Route path="/project/addproduct/:id" element={<AddProduct />} />
            <Route path="/project/addpayment/:id" element={<AddPayment />} />
            <Route path="/project/addAmenity/:id" element={<AddAmenity />} />
            <Route
              path="/project/addCommission/:id"
              element={<AddCommission />}
            />
            <Route
              path="/project/addTaxOthers/:id"
              element={<AddTaxOthers />}
            />
            <Route
              path="/project/projecthouselist"
              element={<ProjectHouseList />}
            />
            <Route path="/employee/document" element={<Document />} />
            <Route path="/employee/bank" element={<Bankothers />} />
            <Route
              path="/employee/companyProfile"
              element={<Companyprofile />}
            />
            <Route path="/employee/employee" element={<Employee />} />
            <Route path="/employee/salary" element={<Salary />} />
            <Route path="/employee/KYC" element={<Kyc />} />
            <Route path="/employee/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
