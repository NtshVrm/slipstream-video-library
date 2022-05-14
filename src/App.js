import "./App.css";
import { Route, Routes } from "react-router";
import { ListingPage, SingleVideo } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ListingPage />} />
        <Route path="/Listing" element={<ListingPage />} />
        <Route path="/SingleVideo" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
