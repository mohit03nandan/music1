/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styles from "./Description.module.css";
import phoneImage from "../Images/Phone.png";
import musicImage from "../Images/music.png";
import Home from "../Images/Home.png";
import Cart from "../Images/Cart.png";
import Login from "../Images/person.png";
import arrow from "../Images/arrow.png";
import pic from "../Images/pic.png"
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";
import SimpleImageSlider from "react-simple-image-slider";

const Description = (props) => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);
  const [descriptionParts, setDescriptionParts] = useState([]);
  const [islogin, setislogin] = useState(false || props.pushRedirect);

  const LoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
    setislogin(false)
  };

  const images = [
    { url: props.sendimages[0] },
    { url: props.sendimages[1] },
    { url: props.sendimages[2] },
    { url: props.sendimages[3] },
  ];


  useEffect(() => {
    const description = props.sendFirstData.describe;
    const maxChunkSize = 200;
    const parts = [];

    let i = 0;
    while (i < description.length) {
      let chunk = description.substring(i, i + maxChunkSize);
      const lastSpaceIndex = chunk.lastIndexOf(" ");
      const lastPunctuationIndex = chunk.lastIndexOf(/[.!?,;:-]/);
      const lastIndex = Math.max(lastSpaceIndex, lastPunctuationIndex);
      if (lastIndex > 0) {
        chunk = chunk.substring(0, lastIndex + 1);
        i += lastIndex + 1;
      } else {
        i += maxChunkSize;
      }

      parts.push(chunk);
    }

    setDescriptionParts(parts);
  }, [props.sendFirstData.describe]);

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
          <div className="container-fluid">
            <div
              class="mt-2"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={arrow} alt="Logo" />
            </div>
            <button
              className="btn btn-primary d-block mx-auto mt-2"
              style={{
                backgroundColor: "#FFB800",
                width: "100%",
                border: "none",
              }}
              onClick={() => {
                navigate("/Cart");
              }}
            >
              Buy Now
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid black",
                objectFit: "cover",
                borderRadius: "25px",
                marginTop: "10px",
              }}
            >
              <SimpleImageSlider
                width={200}
                height={180}
                images={images}
                showBullets={true}
                showNavs={true}
              />
            </div>

            <div className={styles.describe1}>
              {props.sendFirstData.brandName} {props.sendFirstData.productName}
            </div>

            <div className={styles.describe2}>
              {" "}
              <ReactStars
                value={4.5}
                count={5} 
                size={24}
                activeColor="#ffd700"
                isHalf={true} 
                edit={false}
              />
              <div className="mt-2 ms-2">
                ({props.sendFirstData.rating} Customer reviews)
              </div>
            </div>

            <div className={styles.header}>{props.sendFirstData.header}</div>
            <hr style={{ margin: "0", marginTop: "3px" }} />
            <div
              className={`${styles.navcolordown} d-flex justify-content-between w-100 `}
            >
              <div
                className="align-items-center ms-2"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img src={Home} alt="Logo" />
                <div className={styles.Home}>Home</div>
              </div>
              <div className="align-items-center" onClick={()=>{navigate("/cart")}}>
                <img src={Cart} alt="Logo" />
                <div className={styles.Home}>Cart</div>
              </div>
              <div
                className="  align-items-center"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <img src={Login} alt="Logo" />
                <div className={styles.Home}>Logout</div>
              </div>
            </div>
            <hr style={{ margin: "0" }} />
            <div>
              {props.sendFirstData.color} |{props.sendFirstData.type}
            </div>

            <div className={styles.describe3}>About This Item</div>
            <ul className={styles.describe5}>
              {descriptionParts.map((part, index) => (
                <li key={index}>{part}</li>
              ))}
            </ul>

            <div className="d-flex">
              <div className={styles.describe0}>Available </div>
              <div className="mt-1"> : {props.sendFirstData.available}</div>
            </div>
            <div className="d-flex">
              <div className={styles.describe0}>Brand </div>
              <div class="mt-1"> : {props.sendFirstData.brandName}</div>
            </div>

            <button
              className="btn btn-primary d-block mx-auto mt-2"
              style={{
                backgroundColor: "#FFD600",
                width: "100%",
                border: "none",
              }}
              onClick={() => {
                navigate("/Cart");
              }}
            >
              Add to cart
            </button>

            <button
              className="btn btn-primary d-block mx-auto mt-2 mb-5"
              style={{
                backgroundColor: "#FFB800",
                width: "100%",
                border: "none",
              }}
              onClick={() => {
                navigate("/Cart");
              }}
            >
              Buy Now
            </button>
          </div>
        </>
      ) : (
        <div className="container-fluid ">
          <div className=" mt-2 d-flex">
            <img src={musicImage} alt="Logo" />
            <div className={styles.musiccart}>MusicCart</div>
            <div className="ms-2 mt-3">
              Home /{props.sendFirstData.brandName} /
              {props.sendFirstData.productName}
            </div>
            {islogin ? (<><div
                  className="d-flex ms-auto me-2 "
                  style={{
                    backgroundColor: "#1D7000",
                    width: "200px",
                    borderRadius: "30px",
                    border: "none",
                    height: "50px",
                  }}
                  onClick={() => {
                    navigate("/Cart");
                  }}
                >
                  <div className="mt-2 ms-4  p-0">
                    <img src={pic} alt="Logo" />
                  </div>
                  <div
                    className="mt-2 ms-3 p-0"
                    style={{ color: "white", fontSize: "20px" }}
                  >
                    view Cart
                  </div>
                </div></> ): (<></>)}
          </div>

          <button
            className="btn btn-primary  mt-4"
            style={{ backgroundColor: "#2E0052", width: "200px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Product
          </button>

          <div class="flex-grow-1 " className={styles.header}>
            {props.sendFirstData.header}
          </div>

          <div class="d-flex">
            <div class="flex-shrink-0">
              <div
                className="image-container  mt-3"
                style={{
                  borderRadius: "25px",
                  border: "3px solid #2E0052",
                  height: "400px",
                  width: "450px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={props.sendimages[0]}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    maxHeight: "200px",
                    maxWidth: "200px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <div class="flex-grow-1 container-fluid mt-4">
              <div className={styles.describe1}>
                {props.sendFirstData.brandName}{" "}
                {props.sendFirstData.productName}
              </div>
              <div className={styles.describe2}>
                {" "}
                <ReactStars
                  value={4.5}
                  count={5} // Total number of stars
                  size={24}
                  activeColor="#ffd700"
                  isHalf={true} // Enable half star selection
                  edit={false}
                />
                <div className="mt-2 ms-2">
                  ({props.sendFirstData.rating} Customer reviews)
                </div>
              </div>
              <div className={styles.describe0}>
                Price - ${props.sendFirstData.price}
              </div>
              <div className={styles.describe3}>
                {props.sendFirstData.color} | {props.sendFirstData.type}{" "}
              </div>
              <div className={styles.describe3}>About This Item</div>
              <ul className={styles.describe5}>
                {descriptionParts.map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
              <div className="d-flex">
                <div className={styles.describe0}>Available </div>
                <div className={styles.describe2}>
                  {" "}
                  : {props.sendFirstData.available}
                </div>
              </div>
              <div className="d-flex">
                <div className={styles.describe0}>Brand </div>
                <div className={styles.describe2}>
                  {" "}
                  : {props.sendFirstData.brandName}
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="flex-shrink-0">
              <div
                className="image-container  mt-3"
                style={{
                  borderRadius: "10px",
                  border: "3px solid black",
                  height: "150px",
                  width: "150px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={props.sendimages[1]}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div class="flex-shrink-0">
              <div
                className="image-container  mt-3 ms-3"
                style={{
                  borderRadius: "10px",
                  border: "3px solid black",
                  height: "150px",
                  width: "150px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={props.sendimages[2]}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div class="flex-shrink-0">
              <div
                className="image-container  mt-3 ms-3"
                style={{
                  borderRadius: "10px",
                  border: "3px solid black",
                  height: "150px",
                  width: "150px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={props.sendimages[3]}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div class="d-flex align-items-start flex-column mb-3">
                <div class="p-2">
                  {" "}
                  <button
                    className="btn btn-primary  mt-3 ms-5 "
                    style={{
                      backgroundColor: "#FFD600",
                      border: "none",
                      borderRadius: "40px",
                      width: "180%",
                    }}
                    onClick={() => {
                      navigate("/Cart");
                    }}
                  >
                    Add to cart
                  </button>
                </div>
                <div class="p-2">
                  <button
                    className="btn btn-primary  mt-2 ms-5"
                    style={{
                      backgroundColor: "#FFB800",
                      border: "none",
                      borderRadius: "40px",
                      width: "200%",
                    }}
                    onClick={() => {
                      navigate("/Cart");
                    }}
                  >
                    Buy Now
                  </button>
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

export default Description;
