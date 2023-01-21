import React from 'react';
import './App.css';
import {useFormik} from 'formik';


function App() {
  const formik = useFormik({
    initialValues:{
      username: '',
      password: '',
      submit: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    alert ("Login Successful");
    },
  
      validate: values => {
      let errors= {};

      if (!values.username) {
        errors.username = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
        errors.username = 'Username should be an email';
      }
      if(!values.password) errors.password = 'Field Required';
      return errors;
   } 

 });

  return (
    <div>
       <form onSubmit = {formik.handleSubmit}>
        <div><h1>Sign In</h1></div>
        <div className="name">Username</div>
        <input  className="email" id="emailField" name="username" type="email" onChange={formik.handleChange} 
        value={formik.values.username}/>
        {formik.errors.username ? <div id="emailError" style={{color: 'red'}}>{formik.errors.username}</div>: null}

        <div className="psw">Password</div>
        <input className="password" id="pswField" name="password" type="text" onChange={formik.handleChange} 
        value={formik.values.password} />
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div>: null}


        <button className="button" id="submitBtn" type="submit">Submit</button>
      </form>
    </div>

)};
export default App;
