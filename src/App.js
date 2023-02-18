import "./App.css";
import FooterComponent from "./components/Footer/Footer.component";
import HeaderComponent from "./components/Header/Header.component";
import { ConfigProvider } from "antd";
import { GLOBAL_THEME_ANT } from "./style/global-ant.theme";
import "./style/global-ant.module.css";
import { LayoutContainer } from "./components/Layout/Layout.component";
import { RouterProvider } from "react-router-dom";
import { routerResult } from "./router/Routing";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: GLOBAL_THEME_ANT,
      }}
    >
      <LayoutContainer>
        <HeaderComponent />
        <RouterProvider router={routerResult} />
        <FooterComponent />
      </LayoutContainer>
    </ConfigProvider>
  );
}

export default App;
