/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import styles from "./Signup.module.css";
import musicImage from "../Images/music.png";
import {SignupApi} from "../api/api"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = (props) => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);

  const [signup, setsignup] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  function signupNameChange(e) {
    setsignup({ ...signup, name: e.target.value });
  }

  function signupEmailChange(event) {
    setsignup({ ...signup, email: event.target.value });
  }

  function signupMobileChange(event) {
    setsignup({ ...signup, mobile: event.target.value });
  }

  function signupPasswordChange(event) {
    setsignup({ ...signup, password: event.target.value });
  }

  const signupSubmit = async (e) => {
    if (
      signup.name === "" ||
      signup.email === "" ||
      signup.mobile === "" ||
      signup.password === ""
    ) {
      toast.error("please fill all the feilds", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Validate email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signup.email)) {
      toast.error("Please enter a valid email address: xyz@gmail.com", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Validate mobile field
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(signup.mobile)) {
      toast.error("Please enter  10 digit mobile number.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const response = await SignupApi({
        name: signup.name,
        email: signup.email,
        mobile: signup.mobile,
        password: signup.password,
      });

      if (response) {
        toast.success("Signup successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        props.setrediect(true);
        navigate("/")
      }
    } catch (error) {
      toast.error("Signup Failed", {
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
     <ToastContainer />
      <div className="d-flex justify-content-center align-items-center mt-4">
        <img src={musicImage} alt="Logo" />
      </div>
      <div className="card mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          {isMobileView ? (
            <span className={styles.cardtitle}>
              Create Account <h6 className="m-0">Don't have an account?</h6>
            </span>
          ) : (
            <h5 className={styles.cardtitle}>Create Account</h5>
          )}
          <div className="mb-3">
            <label htmlFor="name" className={styles.formlabel}>
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={signup.name}
              onChange={signupNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className={styles.formlabel}>
              Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={signup.mobile}
              onChange={signupMobileChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className={styles.formlabel}>
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={signup.email}
              onChange={signupEmailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className={styles.formlabel}>
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={signup.password}
              onChange={signupPasswordChange}
            />
          </div>
          <div className={styles.bottomtext}>
            By enrolling your mobile phone number, you consent to receive
            automated security notifications via text message from Musicart.
            Message and data rates may apply
          </div>
          <button
            className="btn btn-primary d-block mx-auto mb-3"
            style={{ backgroundColor: "#2E0052", width: "100%" }}
            onClick={signupSubmit}
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
        Already Have an account ? <a className={styles.anchor} onClick={()=>{navigate("/login")}}>Sign In</a>
      </div>
      <footer className={styles.footer}>
        <div className="text-center">Musicart | All rights reserved</div>
      </footer>
    </div>
  );
};

export default Signup;
