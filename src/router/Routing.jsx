import {Routes, Route} from "react-router-dom";
import {ShoppingPage} from "../pages/ShoppingPage/ShoppingPage";
import {LandingPage} from "../pages/LandingPage/LandingPage";
import {NAVIGATE} from "../constants/link";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ViewCartPage from "../pages/ViewCartPage/ViewCartPage";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import PaymentPage from "../pages/PaymentPage/payment";
export const Routing = () => {
  return (
    <Routes>
      <Route path={NAVIGATE.HOME} element={<LandingPage />} />
      <Route path={NAVIGATE.SHOP} element={<ShoppingPage />} />
      <Route path={NAVIGATE.PRODUCTDETAIL} element={<ProductDetailPage />} />
      <Route path={NAVIGATE.VIEWCART} element={<ViewCartPage />} />
      <Route path={NAVIGATE.ABOUT_US} element={<AboutUsPage />} />
      <Route path={NAVIGATE.PAYMENT} element={<PaymentPage />} />
    </Routes>
  );
};
