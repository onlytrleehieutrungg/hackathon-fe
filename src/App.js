import logo from "./mew.png";
import "./App.css";
import FooterComponent from "./components/Footer/Footer.component";
import HeaderComponent from "./components/Header/Header.component";
import { ConfigProvider } from "antd";
import { GLOBAL_THEME_ANT } from "./style/global-ant.theme";
import "./style/global-ant.module.css";
import { LayoutContainer } from "./components/Layout/Layout.component";
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
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Tụi tớ đang phát triển ứng dụng ạ....</p>
            <a
              className="App-link"
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xem tụi tớ!
            </a>
          </div>
          <FooterComponent />
        </div>
      </LayoutContainer>
    </ConfigProvider>
  );
}

export default App;
