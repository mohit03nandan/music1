/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import phoneImage from "../Images/Phone.png";
import musicImage from "../Images/music.png";
import Home from "../Images/Home.png";
import Carting from "../Images/Cart.png";
import Login from "../Images/person.png";
import arrow from "../Images/arrow.png";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Checkout = (props) => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);

  const LoginClick = (e) => {
    e.preventDefault();
    navigate("/Login");
  };

  let finaltoal = props.sendtotalorder - 45;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileView(window.innerWidth <= 767);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="container-fluid p-0">
      {isMobileView ? (
        <>
          <div className={styles.mobileSearchBar}>
            <div className="ms-2 p-1">
              <img src={musicImage} alt="Logo" />
            </div>
            <div className={styles.musiccart}>MusicCart</div>
          </div>
          <div
            className="d-flex justify-content-between fixed-bottom"
            style={{
              marginBottom: "150px",
              backgroundColor: "white",
              border: "1px solid #C8C8C8",
            }}
          >
            <div className="p-2 align-items-center" onClick={()=>{navigate("/")}}>
              <img src={Home} alt="Logo"  />
              <div className={styles.Home} >Home</div>
            </div>
            <div className="p-2 align-items-center">
              <img src={Carting} alt="Logo" />
              <div className={styles.Home}>Cart</div>
            </div>
            <div className="p-2  align-items-center" onClick={LoginClick}>
              <img src={Login} alt="Logo" />
              <div className={styles.Home} >Logout</div>
            </div>
          </div>
          <div
            className={`${styles.navcolordown} p-2 w-100 fixed-bottom`}
            style={{ paddingBottom: "60px" }}
          >
            <hr />
            <div className="d-flex ">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginLeft: "20px",
                  color: "#B52B00",
                }}
              >
                Total order :
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginLeft: "20px",
                  color: "#B52B00",
                }}
              >
                ${props.sendtotalorder}
              </div>
            </div>
            <button
              className="btn btn-primary  mt-4"
              style={{
                backgroundColor: "#FFD600",
                width: "100%",
                color: "black",
                border: "none",
              }}
              onClick={() => {
                navigate("/Successfull");
              }}
            >
              Place Your Orders
            </button>
          </div>
        </>
      ) : (
        // Original content for larger screens displayed at top
        <div className="container-fluid p-0">
          <div
            className={`${styles.navcolor} p-2 d-flex justify-content-between w-100`}
          >
            <div className="p-2 d-flex align-items-center">
              <img src={phoneImage} alt="Logo" />
              <div className={styles.Phone}>912121131313</div>
            </div>
            <div className="p-2">Get 50% off on selected items | Shop Now</div>
            <div className="p-2 d-flex">
              <div className="me-2" onClick={LoginClick}>
                Logout
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobileView ? (
        <>
          <div className="container-fluid ">
            <div class="mt-2" onClick={()=>{navigate('/Cart')}}>
              <img src={arrow} alt="Logo" />
            </div>
            <div style={{ fontSize: "25px", fontWeight: "600" }}>Checkout</div>
            <div className="ms-5 mt-3">
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "500",

                  color: "#B52B00",
                }}
              >
                1. Delivery address
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#797979",
                }}
              >
                Akash Patel ,
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#797979",
                }}
              >
                104 kk hh nagar
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#797979",
                }}
              >
                Lucknow Uttar Pradesh 226025
              </div>
            </div>
            <hr />
            <div className="ms-5">
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "500",

                  color: "#B52B00",
                }}
              >
                2. Payment method
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "500",

                  color: "#797979",
                }}
              >
                Pay on delivery ( Cash/Card )
              </div>
            </div>
            <hr />
            <div div className="ms-5">
              <div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",

                    color: "#B52B00",
                  }}
                >
                  3. Review items and delivery
                </div>

                <div>
                  <div style={{ display: "inline-block", marginTop: "10px" }}>
                    <img
                      src={props.sendimages[0]}
                      className="img-fluid"
                      alt="Responsive"
                      style={{
                        width: "200px",
                        padding: "10px",
                        objectFit: "contain",
                        border: "2px solid black",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="ms-5 mt-3">
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                {props.sendFirstData.brandName}{" "}
                {props.sendFirstData.productName}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#A2A2A2",
                }}
              >
                color: {props.sendFirstData.color}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#A2A2A2",
                }}
              >
                {props.sendFirstData.available}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                }}
              >
                Estimated delivery :
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  paddingBottom: "200px",
                }}
              >
                Monday — FREE Standard Delivery
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container-fluid ">
          <div className="d-flex mt-3 d-flex align-items-end">
            <div>
              <img src={musicImage} alt="Logo" />
            </div>
            <div className={styles.musiccart}>MusicCart</div>
            <div className={styles.home}>Home/Checkout</div>
          </div>
          <button
            className="btn btn-primary  mt-4"
            style={{ backgroundColor: "#2E0052", width: "200px" }}
            onClick={() => {
              navigate("/Cart");
            }}
          >
            Back To Product
          </button>

          <div
            style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}
          >
            Checkout
          </div>
          <hr
            style={{
              width: "7%",
              margin: "auto",
              borderTop: "2px solid black",
            }}
          />

          <div class="d-flex">
            <div class="p-2 flex-grow-1">
              <div className="row">
                <div
                  className="col-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textAlign: "end",
                    color: "#B52B00",
                  }}
                >
                  1. Delivery address
                </div>
                <div
                  className="col-4"
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    textAlign: "end",
                    color: "#797979",
                  }}
                >
                  Akash Patel 104 kk hh nagar, Lucknow Uttar Pradesh 226025
                </div>
                <hr />
              </div>
              <div className="row">
                <div
                  className="col-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textAlign: "end",
                    color: "#B52B00",
                  }}
                >
                  2. Payment method
                </div>
                <div
                  className="col-4"
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    textAlign: "end",
                    color: "#797979",
                  }}
                >
                  Pay on delivery ( Cash/Card )
                </div>
              </div>
              <hr />
              <div className="row">
                <div
                  className="col-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textAlign: "end",
                    color: "#B52B00",
                  }}
                >
                  3. Review items and delivery
                </div>
                <div className="col-4 d-flex flex-column">
                  <div className="d-flex justify-content-end">
                    <div
                      style={{
                        border: "2px solid black",
                        borderRadius: "10px",
                        alignItems: "end",
                        justifyContent: "end",
                      }}
                    >
                      <img
                        src={props.sendimages[0]}
                        className="img-fluid"
                        alt="Responsive"
                        style={{
                          padding: "10px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div className="ms-3">
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        textAlign: "end",
                      }}
                    >
                      {props.sendFirstData.brandName}{" "}
                      {props.sendFirstData.productName}
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#A2A2A2",
                        textAlign: "end",
                      }}
                    >
                      color: {props.sendFirstData.color}
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#A2A2A2",
                        textAlign: "end",
                      }}
                    >
                      {props.sendFirstData.available}
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "black",
                        textAlign: "end",
                      }}
                    >
                      Estimated delivery :
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "black",
                        textAlign: "end",
                      }}
                    >
                      Monday — FREE Standard Delivery
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div
                style={{
                  border: "2px solid #E1E1E1",
                  borderRadius: "10px",
                  marginBottom: "50px",
                }}
              >
                <div className="row">
                  <div className="col-4 mb-5 ms-5">
                    {" "}
                    <button
                      className="btn btn-primary  mt-4"
                      style={{
                        backgroundColor: "#FFD600",
                        width: "200px",
                        color: "black",
                        border: "none",
                      }}
                      onClick={() => {
                        navigate("/Successfull");
                      }}
                    >
                      Place Your Orders
                    </button>
                  </div>
                  <div className="col-4">
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        textAlign: "end",
                        color: "#B52B00",
                      }}
                    >
                      Order Total : {props.sendtotalorder}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "black",
                        textAlign: "end",
                      }}
                    >
                      By placing your order, you agree to Musicart privacy
                      notice and conditions of use.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="p-2"
              style={{
                border: "2px solid #E1E1E1",
                borderRadius: "10px",
                height: "90%",
                marginTop: "120px",
              }}
            >
              <div>
                <button
                  className="btn btn-primary  mt-4 ms-4"
                  style={{
                    backgroundColor: "#FFD600",
                    width: "90%",
                    color: "black",
                    border: "none",
                  }}
                  onClick={() => {
                    navigate("/Successfull");
                  }}
                >
                  Place Your Orders
                </button>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "black",
                  textAlign: "end",
                  marginTop: "10px",
                }}
              >
                By placing your order, you agree to Musicart privacy notice and
                conditions of use.
              </div>
              <hr />
              <div style={{ fontSize: "25px", fontWeight: "500" }}>
                Order Summary
              </div>
              <div className="d-flex mt-4">
                <div
                  class="me-auto"
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#A2A2A2",
                    textAlign: "end",
                  }}
                >
                  Items :
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#A2A2A2",
                    textAlign: "end",
                  }}
                >
                  {finaltoal}
                </div>
              </div>
              <div className="d-flex mt-4">
                <div
                  class="me-auto"
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#A2A2A2",
                    textAlign: "end",
                  }}
                >
                  Delivery : $45
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#A2A2A2",
                    textAlign: "end",
                  }}
                >
                  45
                </div>
              </div>
              <hr />
              <div className="d-flex mt-4">
                <div
                  class="me-auto"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#B52B00",
                    textAlign: "end",
                  }}
                >
                  Order Total :
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#B52B00",
                    textAlign: "end",
                  }}
                >
                  ${props.sendtotalorder}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className={styles.footer}>
        <div className="text-center">Musicart | All rights reserved</div>
      </footer>
    </div>
  );
};

export default Checkout;
