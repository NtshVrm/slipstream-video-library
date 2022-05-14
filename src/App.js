import "./App.css";
import { Route, Routes } from "react-router";
import { ListingPage, Signin, Signup, SingleVideo } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ListingPage />} />
        <Route path="/Listing" element={<ListingPage />} />
        <Route path="/SingleVideo" element={<SingleVideo />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/SignIn" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
