import "./App.css";
import { Route, Routes } from "react-router";
import { ListingPage, Signin, Signup, SingleVideo, WatchLater } from "./pages";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ListingPage />} />
        <Route path="/Listing" element={<ListingPage />} />
        <Route path="/WatchLater" element={<WatchLater />} />
        <Route path="/SingleVideo" element={<SingleVideo />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/SignIn" element={<Signin />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
