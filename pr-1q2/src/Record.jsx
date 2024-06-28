import React from "react";
const Record = ({ employeeData }) => {
  console.log(employeeData);
  return (
    <div>
      <nav className="navbar navbar-dark bg-warning mb-1">
        <div className="container-fluid">
          <span className="navbar-brand mx-auto fs-3">Employee data</span>
        </div>
      </nav>
      <table className="table table-striped table-warning">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone.no</th>
            <th scope="col">Address</th>
            <th scope="col">Degree</th>
            <th scope="col">Salary</th>
            <th scope="col">Deparment</th>
          </tr>
        </thead>
        <tbody>
          {
            employeeData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.empid}</td>
                  <td>{e.empname}</td>
                  <td>{e.empemail}</td>
                  <td>{e.empphone}</td>
                  <td>{e.empaddress.area} , {e.empaddress.city} , {e.empaddress.state} , {e.empaddress.country}</td>
                  <td>{e.empdeg}</td>
                  <td>{e.empsalary}</td>
                  <td>{e.empdepartment}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default Record;