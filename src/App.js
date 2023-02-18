import { ConfigProvider } from "antd";
import "./App.css";
import FooterComponent from "./components/Footer/Footer.component";
import HeaderComponent from "./components/Header/Header.component";
import { LayoutContainer } from "./components/Layout/Layout.component";
import LandingPage from "./page/LandingPage/LandingPage";
import "./style/global-ant.module.css";
import { GLOBAL_THEME_ANT } from "./style/global-ant.theme";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: GLOBAL_THEME_ANT,
      }}
    >
      <LayoutContainer>
        <div className="App">
          <HeaderComponent />
          <LandingPage />
          <FooterComponent />
        </div>
      </LayoutContainer>
    </ConfigProvider>
  );
}

export default App;
