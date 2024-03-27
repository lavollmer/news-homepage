import "./App.css"; // Import the App.css file
import Icon from "./components/Icon"; //import the Icon component
import NavBar from "./components/NavBar"; // Import the NavBar component
import SplashPage from "./components/SplashPage";// Import the SplashPage component
import NewSection from "./components/NewSection"; // Import the NewSection component

function App() {
  return (
    <div>
      <div className="flex flex-row">
        <Icon />
        <NavBar />
      </div>
      <SplashPage />
      <NewSection />
    </div>
  );
}

export default App;
