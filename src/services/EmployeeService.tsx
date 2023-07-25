import axios from "axios";

const Employee_BASE_REST_API_URL = "http://localhost:8082/employees"

const EMPLOYEE_ADD = "http://localhost:8082/employee"

class EmployeeService{

    getAllEmployee(){
        return axios.get(Employee_BASE_REST_API_URL);
    }

    createEmployee(employee:object){
     return axios.post(EMPLOYEE_ADD, employee);
    }

    getEmployeeById(employeeId:any){
       return axios.get(Employee_BASE_REST_API_URL+"/"+employeeId);
    }

    updateEmployee( employeeId:any ,employee:object){
       return axios.put(EMPLOYEE_ADD+"/"+employeeId, employee);
    }

    deleteEmployee(employeeId:any){
     return axios.delete( EMPLOYEE_ADD+"/"+employeeId);
    }

}


export default new EmployeeService();


