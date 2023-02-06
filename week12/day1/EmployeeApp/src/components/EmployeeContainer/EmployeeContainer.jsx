import "./EmployeeContainer.css";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";

export const EmployeeContainer = ({ employeeData, filterEmployee }) => {
  return (
    <div className="EmployeeContainer">
      <EmployeeCard employee={employeeData} filterEmployee={filterEmployee} />
    </div>
  );
};
