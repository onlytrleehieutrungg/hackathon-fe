import { Routes, Route } from "react-router-dom";
import { ShoppingPage } from "../pages/ShoppingPage/ShoppingPage";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { NAVIGATE } from "../constants/link";
export const Routing = () => {
  return (
    <Routes>
      <Route path={NAVIGATE.HOME} element={<LandingPage />} />
      <Route path={NAVIGATE.SHOP} element={<ShoppingPage />} />
    </Routes>
  );
};
