import "./App.css";
import { EmployeeContainer } from "./components/EmployeeContainer/EmployeeContainer";
import { employeeData } from "../src/components/employeeData";
import { useState } from "react";

function App() {
  const [employee, setEmployee] = useState(employeeData);
  const filterEmployee = (person) => {
    const filteredList = employee.filter(
      (emp) => emp.first_name !== person.first_name
    );
    setEmployee(filteredList);
  };
  return (
    <div className="App">
      <h1>Employee Data</h1>
      <EmployeeContainer
        filterEmployee={filterEmployee}
        employeeData={employee}
      />
    </div>
  );
}

export default App;
