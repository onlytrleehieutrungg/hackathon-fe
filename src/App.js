import { ConfigProvider } from "antd";
import "./App.css";
import FooterComponent from "./components/Footer/Footer.component";
import { GLOBAL_THEME_ANT } from "./style/global-ant.theme";
import "./style/global-ant.module.css";
import { LayoutContainer } from "./components/Layout/Layout.component";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HeaderContainer } from "./components/Header/Header.container";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Routing } from "./router/Routing";
import { useEffect } from "react";
import { getAllProduct, getProductDetailById } from "./api/product.api";
import { ChatboxContainer } from "./components/Chatbox/Chatbox.container";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: GLOBAL_THEME_ANT,
      }}
    >
      <Provider store={store}>
      <PayPalScriptProvider
      options={{ "client-id": "ASu-wt2OhrVpaB0btUN6Jz2DCMIcvVbTHQtjdFFUEG4W6pP4TZHYiIcS7N2A1qAfanzD-dsxBCgtwaiF", currency: "USD" }}
    >
        <LayoutContainer>
          <HeaderContainer />
          <ChatboxContainer />
          <Routing />
          <FooterComponent />
        </LayoutContainer>
        </PayPalScriptProvider>Ï
      </Provider>
    </ConfigProvider>
  );
}

export default App;
