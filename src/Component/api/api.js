import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function SignupApi(signupData) {
  <ToastContainer />;
  console.log("signupData", signupData);
  try {
    const reqUrl = "http://localhost:3001/signup";
    const result = await axios.post(reqUrl, signupData);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    if (error.response.status === 409) {
      toast.error("User already exists.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else {
      toast.error(
        "An error occurred while signing up. Please try again later.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return;
    }
  }
}

export async function LoginApi(LoginupData) {
  <ToastContainer />;

  console.log("LoginupData", LoginupData);
  try {
    const reqUrl = "http://localhost:3001/login";
    const result = await axios.post(reqUrl, LoginupData);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("email and password not matched!.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else {
      toast.error("An error occurred while login up. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
  }
}

export async function MusicData(Data) {
  <ToastContainer />;
  try {
    const reqUrl = "http://localhost:3001/application";
    const result = await axios.post(reqUrl, Data);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    if (error.response.status === 500) {
      toast.error("Failed To Fetching Data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
  }
}

export async function getTypeClickedApi(Type) {
  <ToastContainer />;
  try {
    const reqUrl = `http://localhost:3001/application/type/${Type}`;
    const result = await axios.post(reqUrl);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching Category up. Please try again later..",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return;
  }
}

export async function getCompanyClickedApi(Company) {
  <ToastContainer />;
  console.log("api", Company);
  try {
    const reqUrl = `http://localhost:3001/application/brand/${Company}`;
    const result = await axios.post(reqUrl);
    console.log(result);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching Category up. Please try again later..",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return;
  }
}

export async function getColorClickedApi(Color) {
  try {
    const reqUrl = `http://localhost:3001/application/color/${Color}`;
    const result = await axios.post(reqUrl);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching data. Please try again later.",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return null; // Return null or handle error as required
  }
}

export async function getPriceClickedApi(minPrice, maxPrice) {
  try {
    const reqUrl = "http://localhost:3001/application/price-range";
    const result = await axios.post(reqUrl, { minPrice, maxPrice });
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching data. Please try again later.",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return null; // Return null or handle error as required
  }
}

export async function getlowstPriceSortClickedApi() {
  <ToastContainer />;
  try {
    const reqUrl = `http://localhost:3001/application/sortlowestprice`;
    const result = await axios.post(reqUrl);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching sortcomment up. Please try again later",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return;
  }
}

export async function gethighestPriceSortClickedApi() {
  <ToastContainer />;
  try {
    const reqUrl = `http://localhost:3001/application/sorthighestprice`;
    const result = await axios.post(reqUrl);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching sortcomment up. Please try again later",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return;
  }
}

export async function getBrandNameAscSortClickedApi() {
  try {
    const reqUrl = `http://localhost:3001/application/sortbrandnameasc`;
    const result = await axios.post(reqUrl);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching sortcomment up. Please try again later",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return;
  }
}

export async function getBrandNameDescSortClickedApi() {
  try {
    const reqUrl = `http://localhost:3001/application/sortbrandnamedesc`;
    const result = await axios.post(reqUrl);
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching sortcomment up. Please try again later",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return;
  }
}

export async function searchProductApi(searchQuery) {
  try {
    const reqUrl = `http://localhost:3001/application/search`;
    const result = await axios.post(reqUrl, { searchQuery });
    if (result.data) {
      return result.data;
    }
  } catch (error) {
    toast.error(
      "An error occurred while fetching sortcomment up. Please try again later",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    return; // Handle error
  }
}
