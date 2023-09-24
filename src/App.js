import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Food from "./pages/Food";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "MarketConnect";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/support" element={<Support />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/food" element={<Food />} />
    </Routes>
  );
}
export default App;
