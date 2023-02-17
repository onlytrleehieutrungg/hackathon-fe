import logo from "./mew.png";
import "./App.css";
import FooterComponent from "./components/HeaderFooter/Footer";
import Header from "./components/HeaderFooter/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
  );
}

export default App;
