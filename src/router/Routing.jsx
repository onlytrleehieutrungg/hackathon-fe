import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ShoppingPage } from "../pages/ShoppingPage/ShoppingPage";
import { NAVIGATE } from "../constants/link";
export const Routing = () => {
  return (
    <Routes>
      <Route path={NAVIGATE.HOME} element={<HomePage />} />
      <Route path={NAVIGATE.SHOP} element={<ShoppingPage />} />
    </Routes>
  );
};
