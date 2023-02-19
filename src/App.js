import { ConfigProvider } from "antd";
import "./App.css";
import FooterComponent from "./components/Footer/Footer.component";
import { GLOBAL_THEME_ANT } from "./style/global-ant.theme";
import "./style/global-ant.module.css";
import { LayoutContainer } from "./components/Layout/Layout.component";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HeaderContainer } from "./components/Header/Header.container";

import { Routing } from "./router/Routing";
import ChatBox from "./components/Chatbox/Chatbox.component";
import { useEffect } from "react";
import { getAllProduct } from "./api/product.api";

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
        <LayoutContainer>
          <HeaderContainer />
          <ChatBox />
          <Routing />
          <FooterComponent />
        </LayoutContainer>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
