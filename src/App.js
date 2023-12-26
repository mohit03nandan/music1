import Grid from "./Component/Grid/Grid";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import List from "./Component/List/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Grid/>} />
          <Route  path="/List" element={<List/>} />
          <Route
            path="/Signup"
            element={<Signup  />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;