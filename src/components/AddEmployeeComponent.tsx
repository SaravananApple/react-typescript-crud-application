import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {

    const navigation = useNavigate();

    const [empId, setEmpId] = useState('');
    const [eName, setEname] = useState('');
    const [mobile, setMobile] = useState('');
    const [salary, setSalary] = useState('');

    const {id} = useParams();

  const  saveOrUpdateEmployee = (e:any) => {
    
       e.preventDefault();

       const employee = {empId, eName, mobile, salary}
       console.log(employee);

       if(id){

        EmployeeService.updateEmployee(id, employee).then((response) => {

            console.log(response.data)
            navigation('/employees');
    
           }).catch((error) => {
            console.log(error);
           })

       }
       else{
        EmployeeService.createEmployee(employee).then((response) => {

            console.log(response.data)
            navigation('/employees');
    
           }).catch((error) => {
            console.log(error);
           })
       }
     

       

      
  }


  useEffect(()=>{

    EmployeeService.getEmployeeById(id).then((response) => {
        
       setEmpId(response.data.empId);
       setEname(response.data.eName);
       setMobile(response.data.mobile);
       setSalary(response.data.salary);

    }).catch((error) => {
        console.log(error);
    })

  },[])
  

 const title = () => {
     if(id){
     return <h2 className='text-center'>Update Employee</h2>
     } 
     else{
        return <h2 className='text-center'>Add Employee</h2>
     }
  }

    return (
        <div>

          <br />
          <br />
            <div className="container">
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                       {
                          title()
                       }
                        <div className='car-body'>
                            <form >
                                <div className='form-group mb-2'>
                                    <label className='form-label'>EMPLOYEE ID</label>
                                    <input type="text" placeholder='ENTER THE ID' name='empId' className='form-control' value={empId} onChange={(event) => { setEmpId(event.target.value) }} />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>EMPLOYEE NAME</label>
                                    <input type="text" placeholder='ENTER THE NAME OF THE EMPLOYEE' name='eName' className='form-control' value={eName} onChange={(event) => { setEname(event.target.value) }} />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>EMPLOYEE MOBILE NUMBER</label>
                                    <input type="text" placeholder='ENTER THE MOBILE NUMBER' name='mobile' className='form-control' value={mobile} onChange={(event) => { setMobile(event.target.value) }} />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>EMPLOYEE SALARY</label>
                                    <input type="text" placeholder='ENTER THE SALARY' name='salary' className='form-control' value={salary} onChange={(event) => { setSalary(event.target.value) }} />
                                </div>

                                
                                
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                <Link to={'/employees'} className='btn btn-danger  '>Cancel</Link>
                                 
                                <br />


                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddEmployeeComponent;