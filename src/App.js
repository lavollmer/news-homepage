import "./App.css"; // Import the App.css file
import Icon from "./components/Icon"; //import the Icon component
import NavBar from "./components/NavBar"; // Import the NavBar component
import SplashPage from "./components/SplashPage"; // Import the SplashPage component
import NewSection from "./components/NewSection"; // Import the NewSection component
import Countdown from "./components/Countdown"; // Import the Countdown component

function App() {
  return (
    <div>
      <div className="flex flex-row p-20 justify-between items-center">
          <Icon />
          <NavBar />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 py-10">
        <SplashPage />
        <NewSection />
      </div>
      <div className="grid grid-cols-1 gap-4 px-20 py-10">
        <Countdown />
      </div>
    </div>
  );
}

export default App;
