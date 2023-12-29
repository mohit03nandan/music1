/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import phoneImage from "../Images/Phone.png";
import musicImage from "../Images/music.png";
import headphoneimage from "../Images/headphone.png";
import Home from "../Images/Home.png";
import Cart from "../Images/Cart.png";
import Login from "../Images/person.png";
import grid from "../Images/grid.png";
import list from "../Images/list.png";
import pic from "../Images/pic.png";
import { MusicData } from "../api/api";
import {getTypeClickedApi} from "../api/api"
import {getCompanyClickedApi} from "../api/api"
import { getColorClickedApi } from "../api/api";
import {getPriceClickedApi} from "../api/api"
import {getlowstPriceSortClickedApi} from "../api/api"
import {gethighestPriceSortClickedApi} from "../api/api"
import {getBrandNameDescSortClickedApi} from "../api/api"
import {getBrandNameAscSortClickedApi} from "../api/api"
import {searchProductApi} from "../api/api"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = (props) => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);
  const [MusicDataState, setMusicDataState] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [islogin, setislogin] = useState(false || props.pushRedirect);

console.log("isloginlist",islogin)

  const LoginClick = (e) => {
    e.preventDefault();
    setislogin(false)
    navigate("/login");
  };

  const Signupclick = (e) => {
    e.preventDefault();
    navigate("/Signup");
  };

  const handleItemClick = async (item) => {
    await props.setfirst({
      productName: item.headphoneProductName,
      brandName: item.headphoneBrandName,
      header: item.headphoneHeaderData,
      rating: item.headphoneRating,
      price: item.headphonePrice,
      color: item.headphoneColor,
      type: item.headphoneType,
      describe: item.headphoneDescription,
      available: item.headphoneAvailable,
    });
    props.setimages(item.headphoneImages);
    navigate("/Description");
  };

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  async function getMusicData() {
    try {
      const data = await MusicData();
      setMusicDataState(data);
    } catch (error) {
      alert("Error fetching products:", error);
    }
  }

  const handleTypeClick = async (Type) => {
    try {
      const data = await getTypeClickedApi(Type);
      setMusicDataState(data);
    } catch (error) {
      toast.error("Error updating application : try again later", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleCompanyClick = async (Company) => {
    try {
      const data = await getCompanyClickedApi(Company);
      setMusicDataState(data);
    } catch (error) {
      toast.error("Error updating application : try again later", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleColorClick = async (Color) => {
    try {
      const data = await getColorClickedApi(Color);
      setMusicDataState(data);
    } catch (error) {
      toast.error("Error updating application : try again later", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handlePriceClick = async (minPrice, maxPrice) => {
    try {
      console.log(minPrice, maxPrice)
      const data = await getPriceClickedApi(minPrice, maxPrice);
      setMusicDataState(data);
    } catch (error) {
      toast.error("Error updating application : try again later", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const lowestPriceSort = async () =>{
    try {
     
      const data = await getlowstPriceSortClickedApi();
      setMusicDataState(data);
    } catch (error) {
      toast.error("Error updating application : try again later", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  
  const highestPriceSort = async () =>{
    try {
     
      const data = await gethighestPriceSortClickedApi();
      setMusicDataState(data);
    } catch (error) {
      toast.error("Error updating application : try again later", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  const highestbrandSort = async () =>{
    try {
     
      const data = await getBrandNameAscSortClickedApi();
      setMusicDataState(data);
    } catch (error) {
      toast.error("Error updating application : try again later", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  const lowestbrandSort = async () =>{
    try {
     
      const data = await getBrandNameDescSortClickedApi();
      setMusicDataState(data);
    } catch (error) {
      toast.error("Error updating application : try again later", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        const data = await searchProductApi(searchQuery);
              setMusicDataState(data);
      } catch (error) {
        toast.error("Error updating application : try again later", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  useEffect(() => {
    getMusicData();
  }, []);
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
    <ToastContainer/>
      {isMobileView ? (
        <>
          <div className={styles.mobileSearchBar}>
            <input placeholder="Search" type="text" value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}/>
          </div>

          <div
            className={`${styles.navcolordown} p-2 d-flex justify-content-between w-100 fixed-bottom`}
          >
            <div className="p-2 align-items-center"  onClick={scrollToTop}>
              <img src={Home} alt="Logo" />
              <div className={styles.Home}>Home</div>
            </div>
            <div className="p-2 align-items-center">
              {islogin ? (
                <>
                  <div
                    onClick={() => {
                      navigate("/Cart");
                    }}
                  >
                    <img src={Cart} alt="Logo" />
                    <div className={styles.Home}>Cart</div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={() => {
                      toast.error("please login first then see cart ", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                    }}
                  >
                    <img src={Cart} alt="Logo" />
                    <div className={styles.Home}>Cart</div>
                  </div>
                </>
              )}
            </div>
            <div className="p-2  align-items-center" onClick={LoginClick}>
              <img src={Login} alt="Logo" />
              {islogin ? (
                <>
                  <div className={styles.Home} >logout</div>
                </>
              ) : (
                <>
                  <div className={styles.Home}>Login</div>
                </>
              )}
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
            {islogin ? (
                <>
                  <div className="me-2" onClick={LoginClick}>
                    logout
                  </div>
                </>
              ) : (
                <>
                  <div className="me-2" onClick={LoginClick}>
                    login
                  </div>
                  <div onClick={Signupclick}>Signup</div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {isMobileView ? (
        <>
          <div className={styles.imageBox}>
            <div className="d-flex">
              <div className={` d-flex flex-column ${styles.leftColumn}`}>
                <div className={styles.p1}>
                  Grab upto 50% off on Selected headphones
                </div>
                <button className={styles.p2}>Buy Now</button>
              </div>
              <div
                className={`d-flex align-items-end justify-content-end ${styles.rightColumn}`}
              >
                <img
                  className={styles.headphoneimage}
                  src={headphoneimage}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          <div className=" container-fluid">
            <div class="d-flex mb-3">
              <div class="me-auto p-2 ">
                {" "}
                <div class="dropdown ">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#FFFFFF",
                      border: "2px solid #E1E1E1",
                    }}
                  >
                    Sort by
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={()=>{lowestPriceSort()}}>
                      <a class="dropdown-item">Price : Lowest</a>
                    </li>
                    <li onClick={()=>{highestPriceSort()}}>
                      <a class="dropdown-item">Price : Highest</a>
                    </li>
                    <li onClick={()=>{lowestbrandSort()}}>
                      <a class="dropdown-item">Name : (A-Z)</a>
                    </li>
                    <li onClick={()=>{highestbrandSort()}}>
                      <a class="dropdown-item">Name : (Z-A)</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                class="p-2 "
                className={`d-flex ${styles.dropdownContainer}`}
              >
                {" "}
                <div class="dropdown " className={styles.dropdown}>
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#D9D9D9",
                      border: "none",
                    }}
                  >
                    headphone Type
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={() => handleTypeClick("In-ear HeadPhone")}>
                      <a class="dropdown-item" href="#">
                        In-Ear headphone
                      </a>
                    </li>
                    <li onClick={() => handleTypeClick("On-ear HeadPhone")}>
                      <a class="dropdown-item" href="#">
                        On-Ear headphone
                      </a>
                    </li>
                    <li onClick={() => handleTypeClick("Over-ear HeadPhone")}>
                      <a class="dropdown-item" href="#">
                        Over-Ear headphone
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown ms-2" className={styles.dropdown}>
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#D9D9D9",
                      border: "none",
                    }}
                  >
                    Company
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={() => handleCompanyClick("JBL")}>
                      <a class="dropdown-item">JBL</a>
                    </li>
                    <li onClick={() => handleCompanyClick("Sony")}>
                      <a class="dropdown-item">SONY</a>
                    </li>
                    <li onClick={() => handleCompanyClick("Boat")}>
                      <a class="dropdown-item" href="#">
                        BOAT
                      </a>
                    </li>
                    <li onClick={() => handleCompanyClick("Marshal")}>
                      <a class="dropdown-item" href="#">
                        MARSHALL
                      </a>
                    </li>
                    <li onClick={() => handleCompanyClick("Zebronic")}>
                      <a class="dropdown-item" href="#">
                        ZEBRONIC
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown ms-2" className={styles.dropdown}>
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#D9D9D9",
                      border: "none",
                    }}
                  >
                    Color
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={() => handleColorClick("Red")}>
                      <a class="dropdown-item">Red</a>
                    </li>
                    <li onClick={() => handleColorClick("White")}>
                      <a class="dropdown-item">White</a>
                    </li>
                    <li onClick={() => handleColorClick("Green")}>
                      <a class="dropdown-item">Green</a>
                    </li>
                    <li onClick={() => handleColorClick("Black")}>
                      <a class="dropdown-item">Black</a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown ms-2" className={styles.dropdown}>
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#D9D9D9",
                      border: "none",
                    }}
                  >
                    Price
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={() => handlePriceClick(99,99)}>
                      <a class="dropdown-item">$0 - $1000</a>
                    </li>
                    <li onClick={() => handlePriceClick(99,999)}>
                      <a class="dropdown-item">$1000 - $10000</a>
                    </li>
                    <li onClick={() => handlePriceClick(1000,20000)}>
                      <a class="dropdown-item">$10000-$20000</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="container-fluid ">
              <div class="row p-0">
                {MusicDataState.map((item, index) => (
                  <div key={index}>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div
                          className="image-container  mt-3"
                          style={{
                            backgroundColor: "#D4E5FF",
                            height: "200px",
                            width: "200px",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={item.headphoneImages[0]}
                            className="img-fluid"
                            alt="Responsive"
                            style={{
                              maxHeight: "150px",
                              maxWidth: "150px",
                              objectFit: "contain",
                            }}
                             onClick={() => handleItemClick(item)}
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <div className="ms-5 ">
                          <p
                            class="text-start m-0"
                            className={styles.textmusicprodname}
                          >
                            {item.headphoneProductName}
                          </p>
                          <p
                            class="text-start m-0"
                            className={styles.textmusicData}
                          >
                            Price - ${item.headphonePrice}
                          </p>
                          <p
                            class="text-start m-0"
                            className={styles.textmusicData}
                          >
                            {item.headphoneColor} | {item.headphoneType}
                          </p>
                          <p
                            class="text-start m-0"
                            className={styles.textmusicData}
                          >
                            {item.headphoneHeaderData}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="container-fluid d-flex mt-3 ms-3">
            <div className="ms-3">
              <img src={musicImage} alt="Logo" />
            </div>
            <div className={styles.musiccart}>MusicCart</div>
            <div className={styles.home}>Home</div>
            {islogin ? (
              <>
                {" "}
                <div
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
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.imageBox}>
            <div className="row">
              <div
                className={`col-md-6 d-flex flex-column ${styles.leftColumn}`}
              >
                <div className={styles.p1}>
                  Grab upto 50% off on Selected headphones
                </div>
                <button className={styles.p2}>Buy Now</button>
              </div>
              <div
                className={`col-md-6 d-flex align-items-end justify-content-end ${styles.rightColumn}`}
              >
                <img
                  className={styles.headphoneimage}
                  src={headphoneimage}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <input
              type="text"
              id="text"
              className={styles.searchbar}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="container-fluid" style={{ width: "95%" }}>
            <div class="d-flex mb-3">
              <div class="p-2 d-flex">
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img src={grid} alt="Logo" style={{ height: "40px" }} />
                </div>
                <div>
                  <img src={list} alt="Logo" style={{ height: "40px" }} />
                </div>
              </div>
              <div class="p-2 d-flex">
                <div class="dropdown ">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#D9D9D9",
                      border: "none",
                    }}
                  >
                    headphone Type
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#" onClick={() => handleTypeClick("In-ear HeadPhone")}>
                        In-Ear headphone
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onClick={() => handleTypeClick("On-ear HeadPhone")}>
                        On-Ear headphone
                      </a>
                    </li>
                    <li onClick={() => handleTypeClick("Over-ear HeadPhone")}>
                      <a class="dropdown-item" href="#">
                        Over-Ear headphone
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown ms-2">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#D9D9D9",
                      border: "none",
                    }}
                  >
                    Company
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={() => handleCompanyClick("JBL")}>
                      <a class="dropdown-item">JBL</a>
                    </li>
                    <li onClick={() => handleCompanyClick("Sony")}>
                      <a class="dropdown-item">SONY</a>
                    </li>
                    <li onClick={() => handleCompanyClick("Boat")}>
                      <a class="dropdown-item" href="#">
                        BOAT
                      </a>
                    </li>
                    <li  onClick={() => handleCompanyClick("Marshal")}>
                      <a class="dropdown-item" href="#">
                        MARSHALL
                      </a>
                    </li>
                    <li onClick={() => handleCompanyClick("Zebronic")}>
                      <a class="dropdown-item" href="#">
                        ZEBRONIC
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="dropdown ms-2">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#D9D9D9",
                      border: "none",
                    }}
                  >
                    Color
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={() => handleColorClick("Red")}>
                      <a class="dropdown-item">Red</a>
                    </li>
                    <li onClick={() => handleColorClick("White")}>
                      <a class="dropdown-item">White</a>
                    </li>
                    <li onClick={() => handleColorClick("Green")}>
                      <a class="dropdown-item">Green</a>
                    </li>
                    <li onClick={() => handleColorClick("Black")}>
                      <a class="dropdown-item">Black</a>
                    </li>
                  </ul>
                </div>

                <div class="dropdown ms-2">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#D9D9D9",
                      border: "none",
                    }}
                  >
                    Price
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={() => handlePriceClick(99,99)}>
                      <a class="dropdown-item">$0 - $1000</a>
                    </li>
                    <li onClick={() => handlePriceClick(99,999)}>
                      <a class="dropdown-item">$1000 - $10000</a>
                    </li>
                    <li onClick={() => handlePriceClick(1000,20000)}>
                      <a class="dropdown-item">$10000-$20000</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="ms-auto p-2">
                <div class="dropdown ">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      borderRadius: "34px",
                      color: "black",
                      backgroundColor: "#FFFFFF",
                      border: "2px solid #E1E1E1",
                    }}
                  >
                    Sort by: Feature
                  </button>
                  <ul class="dropdown-menu">
                    <li onClick={()=>{lowestPriceSort()}}>
                      <a class="dropdown-item">Price : Highest</a>
                    </li>
                    <li nClick={()=>{highestPriceSort()}}>
                      <a class="dropdown-item">Price : lowest</a>
                    </li>
                    <li onClick={()=>{highestbrandSort()}}>
                      <a class="dropdown-item">Name : (A-Z)</a>
                    </li>
                    <li onClick={()=>{lowestbrandSort()}}>
                      <a class="dropdown-item">Name : (Z-A)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="container-fluid ">
              <div class="row p-0">
                {MusicDataState.map((item, index) => (
                  <div key={index}>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div
                          className="image-container  mt-3"
                          style={{
                            backgroundColor: "#D4E5FF",
                            height: "200px",
                            width: "200px",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={() => handleItemClick(item)}
                        >
                          <img
                            src={item.headphoneImages[0]}
                            className="img-fluid"
                            alt="Responsive"
                            style={{
                              maxHeight: "150px",
                              maxWidth: "150px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <div className="ms-5 ">
                          <p
                            class="text-start m-0"
                            className={styles.textmusicprodname}
                          >
                            {item.headphoneProductName}
                          </p>
                          <p
                            class="text-start m-0"
                            className={styles.textmusicData}
                          >
                            Price - ${item.headphonePrice}
                          </p>
                          <p
                            class="text-start m-0"
                            className={styles.textmusicData}
                          >
                            {item.headphoneColor} | {item.headphoneType}
                          </p>
                          <p
                            class="text-start m-0"
                            className={styles.textmusicData}
                          >
                            {item.headphoneHeaderData}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
