import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import musicImage from "../Images/music.png";
import { ToastContainer, toast } from "react-toastify";
import {LoginApi} from "../api/api"
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);

  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  function LoginEmailChange(event) {
    setLogin({ ...Login, email: event.target.value });
  }

  function LoginPasswordChange(event) {
    setLogin({ ...Login, password: event.target.value });
  }

  const Loginsubmit = async (e) => {
    if (Login.email === "" || Login.password === "") {
      toast.error("please fill all the feilds", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;

    if (!emailRegex.test(Login.email) && !mobileRegex.test(Login.email)) {
      toast.error("Please enter a valid email address (e.g., xyz@gmail.com) or a 10-digit mobile number.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const response = await LoginApi({
        email: Login.email,
        password: Login.password,
      });
      
      if (response) {
        props.setrediect(true);
        toast.success("login successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        
        navigate("/")
        
      }
    } catch (error) {
      toast.error("Login Failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid">
    <ToastContainer/>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <img src={musicImage} alt="Logo" />
      </div>
      <div className="card mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <div className="card-body">
        {isMobileView ? (
          <div className="d-flex">
          <span className={styles.cardtitle}>
              Sign In 
            </span>
            <span><h6 className="ps-3 mt-2">Already a customer?</h6></span>
          </div>
            
          ) : (
            <h5 className={styles.cardtitle}>Create Account</h5>
          )}
          <div className="mb-3">
            <label htmlFor="name" className={styles.formlabel}>
              Enter your email or mobile number
            </label>
            <input type="text" className="form-control" id="name" value={Login.email}
                        onChange={LoginEmailChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className={styles.formlabel}>
              Password
            </label>
            <input type="text" className="form-control" id="name"   value={Login.password}
                        onChange={LoginPasswordChange}/>
          </div>
          <div className={styles.bottomtext}>
            By enrolling your mobile phone number, you consent to receive
            automated security notifications via text message from Musicart.
            Message and data rates may apply
          </div>
          <button
            className="btn btn-primary d-block mx-auto mb-3"
            style={{ backgroundColor: "#2E0052", width: "100%" }}
            onClick={Loginsubmit}
          >
            Continue
          </button>
          <div className={styles.bottommosttext}>
            By continuing, you agree to Musicart privacy notice and conditions
            of use.
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <div style={{ width: "25rem ", display: "flex" }}>
          <hr className={styles.horizontalLine} /> New to Musiccart{" "}
          <hr className={styles.horizontalLine} />
        </div>
      </div>
      <div className="card mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <div className="d-flex justify-content-center align-items-center pt-3 pb-3 fs-5" onClick={()=>{navigate("/Signup")}}>
          {" "}
          Create your Musicart account
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="text-center">Musicart | All rights reserved</div>
      </footer>
    </div>
  );
};

export default Login;
