import React, { useState, useEffect } from 'react';
import Employees from './components/Employees.js';
import Header from './components/Header';
import db from './db.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(db);
  }, [])

  const getByDepartment = (e) => {
    console.log(e.target.value);
    const filteredDB = db.filter(employee => employee.department === e.target.value);
    console.log(filteredDB);
    setEmployees(filteredDB);
    if(e.target.value === 'all'){
      console.log('hello')
      setEmployees(db)
    }
  }

  return (
    <div className="App">
      <Header />
        <div className="drop-down-flex">
          <label className="label">Choose a Department</label>
          <select className="drop-down box" onChange={getByDepartment}>
            <option value="all">All</option>
            <option value="management">Management</option>
            <option value="sales">Sales</option>
            <option value="reception">Reception</option>
            <option value="accounting">Accounting</option>
            <option value="warehouse">Warehouse</option>
            <option value="quality assurance">Quality Assurance</option>
            <option value="supply and relations">Supply and Relations</option>
            <option value="customer service">Customer Service</option>
          </select>
        </div>
        <div className="flex">
          {employees.map(employee => (
            <Employees
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              department={employee.department}
              img={employee.image}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
