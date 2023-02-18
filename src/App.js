import "./App.css";
import FooterComponent from "./components/Footer/Footer.component";
import { ConfigProvider } from "antd";
import { GLOBAL_THEME_ANT } from "./style/global-ant.theme";
import "./style/global-ant.module.css";
import { LayoutContainer } from "./components/Layout/Layout.component";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HeaderContainer } from "./components/Header/Header.container";
import { Routing } from "./router/Routing";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <ConfigProvider
      theme={{
        token: GLOBAL_THEME_ANT,
      }}
    >
      <Provider store={store}>
        <LayoutContainer>
          <HeaderContainer />
          <Routing />
          <FooterComponent />
        </LayoutContainer>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
