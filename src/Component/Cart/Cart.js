/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import phoneImage from "../Images/Phone.png";
import musicImage from "../Images/music.png";
import MyCart from "../Images/MyCart.png";
import Home from "../Images/Home.png";
import Carting from "../Images/Cart.png";
import Login from "../Images/person.png";
import arrow from "../Images/arrow.png";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Cart = (props) => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);
  const [quantity, setquantity] = useState(1);


  let baseprice = props.sendFirstData.price;
  baseprice = baseprice * quantity;
  let final = baseprice + 45;

  const LoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };


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
            <input placeholder="Search" type="text" />
          </div>

          <div
            className={`${styles.navcolordown} p-2 d-flex justify-content-between w-100 fixed-bottom`}
          >
            <div className="p-2 align-items-center" onClick={()=>{navigate("/")}}>
              <img src={Home} alt="Logo" />
              <div className={styles.Home} >Home</div>
            </div>
            <div className="p-2 align-items-center" onClick={()=>{navigate("/checkout")}}>
              <img src={Carting} alt="Logo" />
              <div className={styles.Home}>Cart</div>
            </div>
            <div className="p-2  align-items-center" onClick={LoginClick}>
              <img src={Login} alt="Logo" />
              <div className={styles.Home} >Logout</div>
            </div>
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
                logout
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobileView ? (
        <>
          <div className="container-fluid">
            <div>
              <div class="mt-2" onClick={() =>{navigate("/Description")}}>
                <img src={arrow} alt="Logo" />
              </div>
              <div style={{ backgroundColor: "#DBDBDB" }}>
                <div class="d-flex justify-content-around">
                  <div>
                    <img
                      src={props.sendimages[0]}
                      className="img-fluid"
                      alt="Responsive"
                      style={{
                        height:'250px',
                        width:'250px',
                        padding: "20px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="d-flex flex-column  ">
                    <div
                      class="  mt-5"
                      style={{ fontSize: "20px", fontWeight: "600" }}
                    >
                      <div>
                        {props.sendFirstData.brandName}
                        {props.sendFirstData.productName}
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      ${props.sendFirstData.price}
                    </div>
                    <div
                      className="mt-3"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      color : {props.sendFirstData.color}
                    </div>

                    <div
                      className="mt-3"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      {props.sendFirstData.available}
                    </div>

                    <div
                      className="mt-3"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Convenience Fee : $45
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        marginRight: "10px",
                      }}
                    >
                      Total : {final}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <hr />
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
                props.settotalorder(final);
                navigate("/Checkout");
              }}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <div className="container-fluid">
          <div className="d-flex mt-3 d-flex align-items-end">
            <div>
              <img src={musicImage} alt="Logo" />
            </div>
            <div className={styles.musiccart}>MusicCart</div>
            <div className={styles.home}>Home/ViewCart</div>
          </div>
          <button
            className="btn btn-primary  mt-4"
            style={{ backgroundColor: "#2E0052", width: "200px" }}
            onClick={() => {
              navigate("/Description");
            }}
          >
            Back To Product
          </button>
          <div className="d-flex justify-content-center align-items-center">
            <img className={styles.mycartimage} src={MyCart} alt="Logo" />
            <div className={styles.mycart}>My Cart</div>
          </div>
          <hr style={{ width: "75%", margin: "0", marginTop: "5px" }} />
          <div class="d-flex mt-2">
            <div class="p-2 flex-grow-1 d-flex flex-row justify-content-between">
              <div style={{ border: "2px solid black", borderRadius: "10px" }}>
                <img
                  src={props.sendimages[0]}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    height: "250px",
                    width:'250px',
                    padding: "20px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="ms-3">
                <div style={{ fontSize: "25px", fontWeight: "600" }}>
                  {props.sendFirstData.brandName}
                  {props.sendFirstData.productName}
                </div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "#A2A2A2",
                  }}
                >
                  color: {props.sendFirstData.color}
                </div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "#A2A2A2",
                  }}
                >
                  {props.sendFirstData.available}
                </div>
              </div>
              <div className="ms-3">
                <div style={{ fontSize: "22px", fontWeight: "600" }}>Price</div>
                <div style={{ fontSize: "22px", fontWeight: "400" }}>
                  ${props.sendFirstData.price}
                </div>
              </div>
              <div className="ms-3">
                <div style={{ fontSize: "25px", fontWeight: "600" }}>
                  Quantity
                </div>
                <div style={{ border: "1px solid black" }}>
                  <div
                    className="ms-2"
                    onClick={() => {
                      setquantity(1);
                    }}
                  >
                    1
                  </div>
                  <hr className="m-0" />
                  <div
                    className="ms-2"
                    onClick={() => {
                      setquantity(2);
                    }}
                  >
                    2
                  </div>
                  <hr className="m-0" />
                  <div
                    className="ms-2"
                    onClick={() => {
                      setquantity(3);
                    }}
                  >
                    3
                  </div>
                  <hr className="m-0" />
                  <div
                    className="ms-2"
                    onClick={() => {
                      setquantity(4);
                    }}
                  >
                    4
                  </div>
                  <hr className="m-0" />
                  <div
                    className="ms-2"
                    onClick={() => {
                      setquantity(5);
                    }}
                  >
                    5
                  </div>
                  <hr className="m-0" />
                  <div
                    className="ms-2"
                    onClick={() => {
                      setquantity(6);
                    }}
                  >
                    6
                  </div>
                  <hr className="m-0" />
                  <div
                    className="ms-2"
                    onClick={() => {
                      setquantity(7);
                    }}
                  >
                    7
                  </div>
                  <hr className="m-0" />
                  <div
                    className="ms-2"
                    onClick={() => {
                      setquantity(8);
                    }}
                  >
                    8
                  </div>
                </div>
              </div>
              <div
                className="vertical-line"
                style={{ border: "1px solid #E1E1E1", height: "300px" }}
              ></div>
              <div className="ms-3">
                <div style={{ fontSize: "25px", fontWeight: "600" }}>Total</div>
                <div style={{ fontSize: "18px", fontWeight: "500" }}>
                  ${baseprice}
                </div>
              </div>
            </div>
            <div class="p-2 ps-5">
              <div style={{ fontSize: "25px", fontWeight: "600" }}>
                Price Detail
              </div>
              <div className="d-flex">
                <div
                  class="me-auto p-2"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  Total MRP
                </div>
                <div
                  className="mt-2"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  ${baseprice}
                </div>
              </div>
              <div className="d-flex">
                <div
                  class="me-auto p-2"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  Discount on MRP
                </div>
                <div
                  className="mt-2"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  $0
                </div>
              </div>
              <div className="d-flex mb-5">
                <div
                  class="me-auto p-2"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  Convenience Fee
                </div>
                <div
                  className="mt-2"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  $45
                </div>
              </div>
              <div className="d-flex ">
                <div
                  class="me-auto p-2 "
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  Total Amount
                </div>
                <div
                  className="mt-2"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  ${final}
                </div>
              </div>
              <button
                className="btn btn-primary  mt-4"
                style={{
                  backgroundColor: "#FFD600",
                  width: "200px",
                  color: "black",
                  border: "none",
                }}
                onClick={() => {
                  props.settotalorder(final);
                  navigate("/Checkout");
                }}
              >
                Place Order
              </button>
            </div>
          </div>
          <hr style={{ width: "75%", margin: "0", marginTop: "5px" }} />
          <div className="row">
            <div
              className="col-4"
              style={{ fontSize: "20px", fontWeight: "400", textAlign: "end" }}
            >
              {quantity} Item
            </div>
            <div
              className="col-4"
              style={{ fontSize: "20px", fontWeight: "400", textAlign: "end" }}
            >
              ${baseprice}
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

export default Cart;
