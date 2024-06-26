import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";


import myImage from "../assets/clip-message-sent.png";
const Signup = () => {

  const [formData, setFormData]= useState({
    fName:"",
    mobile:"",
    email:"",
    password:"",
    cPassword:""
  })

  const [errors, setErrors]= useState({});
  const [valid, setValid] =useState(true);
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();

    let isValid = true;
    let validationErrors = {};
    
    if(formData.fName === "" || formData.fName === null){
      isValid =false;
      validationErrors.fName ="  (Full Name is Required!)"
    }
    if(formData.mobile === "" || formData.mobile === null){
      isValid =false;
      validationErrors.mobile = "  (Mobile Number is Required!)";
    }
    if(formData.email === "" || formData.email === null){
      isValid = false;
      validationErrors.email = "  (Email is Required!)";
    } else if(!/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(formData.email)){
      isValid = false;
      validationErrors.email = "  (Email is not valid)";
    }

    if(!/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(formData.password)){
      isValid = false;
      validationErrors.password = "  (should have Upper and Lower Case, numbers and char and not less than 6)";
    }
    if(formData.cPassword !== formData.password){
      isValid = false;
      validationErrors.cPassword = "  (Password does not match)"
    }

    setErrors(validationErrors);
    setValid(isValid);
    if(Object.keys(validationErrors).length === 0){
      
      fetch('http://localhost:8000/users', {
        method:"POST",
        headers: {"Content-Type": "application/db.json"},
        body: JSON.stringify(formData)
      }).then((result)=>{
        alert("Regitration is Succesful")
        navigate('/')
      }).catch(err => {
        
      })
      
    }
  }

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="first-section">
            <form onSubmit={handleSubmit}>
              <h3 className="heading">Sign Up</h3>
              <p>Please fill your informations below</p>
              <legend>Full Name 
                {
                valid? <></> :
                  <span style={{color: "red"}}>
                          {errors.fName}
                        </span>
              }
              </legend>
              <input
                type="text"
                style={{ height: "20px", padding: "5px" }}
                onChange={e=> setFormData({...formData, fName: e.target.value})}
                // required
              />

              <legend>Mobile
                {
                  valid? <></> :
                    <span style={{color: "red"}}>
                            {errors.mobile}
                          </span>
                }
              </legend>
              <input
                type="number"
                style={{ height: "20px", padding: "5px" }}
                onChange={e=> setFormData({...formData, mobile: e.target.value})}
                // required
              />

              <legend>Email

                {
                  valid? <></> :
                    <span style={{color: "red"}}>
                            {errors.email}
                          </span>
                }
              </legend>
              <input type="email" style={{ height: "20px", padding: "5px" }} 
                onChange={e=> setFormData({...formData, email: e.target.value})}
              
              />

              <legend>Password
                {
                  valid? <></> :
                    <span style={{color: "red"}}>
                            {errors.password}
                          </span>
                }
              </legend>
              <input
                type="password"
                style={{ height: "20px", padding: "5px" }}
                onChange={e=> setFormData({...formData, password: e.target.value})}
                // required
              />

              <legend>Confirm Password
                {
                  valid? <></> :
                    <span style={{color: "red"}}>
                            {errors.cPassword}
                          </span>
                }
              </legend>
              <input
                type="password"
                style={{ height: "20px", padding: "5px" }}
                onChange={e=> setFormData({...formData, cPassword: e.target.value})}
                // required
              />
              <button className="colorfull color">Submit</button>
            </form>
            <hr />
            <div
              className="haveAcc"
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between", 
                marginRight: "50px",
              }}
            >
              <p>Already have an account?</p>
              <Link to="/" style={{textDecoration:"none"}}>
                <p>Login to your account</p>
              </Link>
            </div>
            <div className="others">
              <p>Or login with</p>
              <a href="www.facebook.com/login">Facebook</a>
              <a href="www.linkedin.com/login">LinkedIn</a>
              <a href="www.google.com/login">Google</a>
            </div>
          </div>
        </div>
        <div className="second-section">
          <img src={myImage} alt="Ride In" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
