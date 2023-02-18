import logo from "../../img/mew.png";
export const HomePage = () => {
  return (
    <div className="App">
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
    </div>
  );
};
