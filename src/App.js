import "./App.css";
import Icon from "./components/Icon"; //import the Icon component
import NavBar from "./components/NavBar"; // Import the NavBar component
import SplashPage from "./components/SplashPage";// Import the SplashPage component
import Button from "./components/Button";

function App() {
  return (
    <div>
      <div className="flex flex-row">
        <Icon />
        <NavBar />
      </div>
      <SplashPage />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
