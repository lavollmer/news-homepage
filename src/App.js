import "./App.css"; // Import the App.css file
import Icon from "./components/Icon"; //import the Icon component
import NavBar from "./components/NavBar"; // Import the NavBar component
import SplashPage from "./components/SplashPage"; // Import the SplashPage component
import NewSection from "./components/NewSection"; // Import the NewSection component
import CountdownCa from "./components/CountdownCa";

function App() {
  return (
    <div className="bg-[#FEFDF9]">
      <div className="flex flex-row px-60 pt-10 justify-between items-center">
          <Icon />
          <NavBar />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-60">
        <SplashPage span="col-span-2" />
        <NewSection span="col-span-1"/>
      </div>
      <div className="grid grid-cols-1 gap-4 px-60 py-10">
        <CountdownCa />
      </div>
    </div>
  );
}

export default App;
