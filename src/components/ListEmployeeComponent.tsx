import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import Employee from '../module/Employee';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {


    const employeeList: Employee[] = [];

    const [employees, setEmployees] = useState(employeeList);

    


    
    useEffect(() => {
 
        getEmployee();
     

    },[])

    const getEmployee = () => {
        EmployeeService.getAllEmployee().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
         }).catch(error => {console.log(error)})
    }

 const  deleteEmployee = (employeeId:number) => {
        console.log(employeeId);
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            
            console.log(response.data);
            getEmployee();
         }).catch(error => {console.log(error)})

    }

  return (
    <div className="container">
       <h2 className="text-center">List Employees</h2>
       <Link to={'/add-employee'} className="btn btn-primary mb-2">Add Employee</Link>
       <table className="table table-bordered table-striped">
        <thead>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee Mobile No</th>
            <th>Employee Salary</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {
                employees.map(
                    employee => 
                    
                        <tr key={employee.empId}>
                            <td>{employee.empId}</td>
                            <td>{employee.eName}</td>
                            <td>{employee.mobile}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <Link to={`/edit-employee/${employee.empId}`} className='btn btn-info'>Update</Link>
                                <button className='btn btn-danger' onClick={() => deleteEmployee(employee.empId)} style={{marginLeft:"10px"}} >Delete</button>
                            </td>
                            
                        </tr>
                    
                )
            }
        </tbody>
       </table>
    </div>
  )
}

export default ListEmployeeComponent;