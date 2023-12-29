import { useState } from "react";
import Grid from "./Component/Grid/Grid";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import List from "./Component/List/List";
import Description from "./Component/Description/Description";
import Cart from "./Component/Cart/Cart";
import Checkout from "./Component/Checkout/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Successfull from "./Component/Successfull/Successfull";
const App = () => {
  const [rediect, setrediect] = useState(false);
  const [first, setfirst] = useState({
    productName: "",
    brandName: "",
    header: "",
    rating: "",
    price: "",
    color: "",
    type: "",
    describe: "",
    available: "",
  });
  const [images, setimages] = useState([])
   const [totalorder, settotalorder] = useState(0 || 0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Grid setfirst={setfirst}  setimages={setimages} pushRedirect={rediect}/>} />
          <Route path="/List" element={<List  setfirst={setfirst}  setimages={setimages} pushRedirect={rediect}/>} />
          <Route
            path="/Description"
            element={<Description sendFirstData={first}  sendimages={images} pushRedirect={rediect}/>}
          />
          <Route path="/Cart" element={<Cart  sendFirstData={first}  sendimages={images} settotalorder={settotalorder}/>} />
          <Route path="/Checkout" element={<Checkout  sendFirstData={first}  sendimages={images} sendtotalorder={totalorder}/>} />
          <Route path="/Successfull" element={<Successfull />} />
          <Route path="/Signup" element={<Signup setrediect={setrediect} /> } />
          <Route path="/login" element={<Login  setrediect={setrediect} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
