import { employeeData } from "../employeeData";
import { useState } from "react";
import "./EmployeeCard.css";

const isActive = (item) => {
  if (item.currently_active === true) {
    return "Active";
  } else {
    return "Inactive";
  }
};

export const EmployeeCard = ({ employee, filterEmployee }) => {
  return employee.map((emp) => (
    <div className="Employee">
      <div className="Pic">
        <img src={emp.profile_picture} alt="profilepic" />
      </div>
      <div className="Info">
        <h3>
          {emp.first_name} {emp.last_name}
        </h3>
        <p>email: {emp.email}</p>
        <p>sector: {emp.sector}</p>
        <p>IP address: {emp.ip_address}</p>
        <p>Active: {emp.currently_active.toString()}</p>
        <p>{emp.currently_active ? "Active" : "Inactive"}</p>
        <p>{isActive(emp)}</p>
      </div>
      <button onClick={() => filterEmployee(emp)}>Remove Employee</button>
    </div>
  ));
};
