import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [tokenState, setTokenState] = useState(false);
  const signUpHandler = async (info) => {
    try {
      const response = await axios.post(`/api/auth/signup`, info);
      localStorage.setItem("token", response.data.encodedToken);

      if (response.status === 201 || 200) {
        navigate("/signin");
        alert("Created User!, Please login");
      }
    } catch (error) {
      console.log(error);
      alert("User already exists, please login!");
    }
  };
  const signInHandler = async (loginDetail) => {
    try {
      const response = await axios.post(`/api/auth/login`, loginDetail);
      if (response.status === 200) {
        localStorage.setItem(
          "login",
          JSON.stringify({ token: response.data.encodedToken })
        );
        navigate("/Listing");
      }
      if (response.status === 201) {
        alert("Wrong Password");
      }
    } catch (error) {
      console.log(error);
      alert("No User found with the entered email");
    }
  };

  return (
    <AuthContext.Provider
      value={{ signUpHandler, signInHandler, tokenState, setTokenState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
