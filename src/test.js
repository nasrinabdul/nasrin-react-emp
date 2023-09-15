import React from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from "react-hook-form";

const function App() {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async  data => { console.log(data); };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: "Plesdase enter your first name." })} // custom message
      />
      <input type="submit" />
    </form>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<EmployeeForm/>);
root.render(<App/>);
