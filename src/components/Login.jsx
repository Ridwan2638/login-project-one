import React, { useState } from "react";
import myImage from "../assets/clip-message-sent.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let validationErrors = {};

    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "  (Email is Required!)";
    } else if (!/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(formData.email)) {
      isValid = false;
      validationErrors.email = "(Email is not valid)";
    }

    if (
      !/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(
        formData.password
      )
    ) {
      isValid = false;
      validationErrors.password = "  (Incorrect password)";
    }
   
    axios.get("http://localhost:8000/users")
      .then((result) => {
        
        result.data.map(user => {
          console.log(user)
          if(user.email === formData.email){
            if(user.password === formData.password){
              alert("Login Succesful");
              navigate("/Home");
            } else{
              isValid = false;
              validationErrors.email = "Correct Emails"
              validationErrors.password ="Wrong Password"
            }
            
          } else if(formData.email !== ""){
            if(user.email !== formData.email){
              isValid = false;
              // validationErrors.email = "Wrong Email"
            }
            
          }
        })

        setErrors(validationErrors);
        setValid(isValid);
        
      })
      .catch((err) => {});
    
  };

  return (
    <div>
      <div className="container">
        <div className="first-section">
          <div className="content">
            <h3 className="logo">Digital</h3>
            <h2 className="heading">
              Artificial Intelligence Driving 
              Results For The Travel Industry
            </h2>
            <p className="welcome">
              Welcome back! Please login to your account.
            </p>
            {
                valid? <></> :
                  <span style={{color: "red"}}>
                          {errors.email}, {errors.password}
                        </span>
            }
            <form>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={e=> setFormData({...formData, password: e.target.value})}
                required
              />

              <div className="space">
                <label className="remember-me">
                  <input type="checkbox" name="Remember me" />
                  Remember me
                </label>
                <a href="#">Forgot Password? </a>
              </div>
              <div className="btn">
                <button type="submit" className="colorfull" onClick={handleSubmit}>Login</button>
                <Link to="/Signup" style={{ textDecoration: "None" }}>
                  {" "}
                  <button className="second">Sign Up</button>
                </Link>
              </div>
            </form>
            <div className="others">
              <p>Or login with</p>
              <div className="social">
              <a href="www.facebook.com/login">Facebook</a>
              <a href="www.linkedin.com/login">LinkedIn</a>
              <a href="www.google.com/login">Google</a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-section">
          <nav>
            <p className="decor">Home</p>
            <p>About us</p>
            <p>Blog</p>
            <p>Pricing</p>
          </nav>

          <img src={myImage} alt="Ride on" />
        </div>
      </div>
    </div>
  );
};

export default Login;
