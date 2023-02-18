import "./App.css";
import FooterComponent from "./components/Footer/Footer.component";
import HeaderComponent from "./components/Header/Header.component";
import { ConfigProvider } from "antd";
import { GLOBAL_THEME_ANT } from "./style/global-ant.theme";
import "./style/global-ant.module.css";
import { LayoutContainer } from "./components/Layout/Layout.component";
import { RouterProvider } from "react-router-dom";
import { routerResult } from "./router/Routing";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
          <HeaderComponent />
          <RouterProvider router={routerResult} />
          <FooterComponent />
        </LayoutContainer>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
