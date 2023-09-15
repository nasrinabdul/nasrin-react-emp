import React from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from 'react-hook-form';
import { addNewEmployee } from './services/empData.js'


 const EmployeeForm = () => {
    let apiErrorMsg = "";
     const { register, handleSubmit, formState : {errors}} = useForm({

             defaultValues : {
                employeeName : "",
                emailId : "",
                employeeDOB : "",
                joiningDate : ""
             }

     });

     console.log(errors);



     const handleEntry = (data, event) => {
        event.preventDefault();
        console.log(data);
        apiErrorMsg = null;

        try {
            addNewEmployee(data);
            document.getElementById('idDiv').hidden=false;
            //this.state.setData(data);
        }
        catch(e) {
            console.log(e);
            this.state.setApiErrorMessage(e);
        }

        //data.preventDefault();
     }


     const errorMsg = {
         employeeName : { required : {
            value: true,
            message : "Employee Name is required"
            },
         },
         emailId : { required : "Email Id is required"},
         employeeDOB : { required : "Date of Birth is mandatory"},
         joiningDate : { required : "Joining Date is mandatory"}
     };

     return(
        <form id="employee-form" onSubmit={handleSubmit(handleEntry)}>
         <div id="idDiv" hidden="true">
         <p>{ apiErrorMsg }</p>
           <label>Employee Id</label><br/>
            <input {...register("empId")} />
         </div>
         <div>
         <label>Employee Name</label><br/>
         <input {...register("employeeName", errorMsg.employeeName)} />
        <small className="text-danger">
                                  {errors?.employeeName && errors.employeeName.message}
                                </small>
         </div>
         <hr/>
         <div>
                 <label>Employee EmailId</label><br/>
         <input name="emailId" type="text" {...register("emailId",  errorMsg.emailId)}/>
           <small className="text-danger">
                          {errors?.emailId && errors.emailId.message}
                        </small>
         </div>
         <hr/>
         <div>
                 <label>Employee Date Of Birth</label><br/>
                   <input name="employeeDOB" type="date" {...register("employeeDOB", errorMsg.employeeDOB)}/>
                <small className="text-danger">
                          {errors?.employeeDOB && errors.employeeDOB.message}
                        </small>
         </div>
         <hr/>
         <div>
             <label>Employee Joining Date</label><br/>
             <input name="joiningDate" type="date" {...register("joiningDate", errorMsg.joiningDate)}/>
                <small className="text-danger">
                          {errors?.joiningDate && errors.joiningDate.message}
                        </small>
         </div>
         <hr/>
         <button type="submit">Submit</button>
        </form>

     );
 }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EmployeeForm/>);
