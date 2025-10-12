import Benefits from "./components/benefits";
import ContactUs from "./components/contact";
import Home from "./components/home";
import NavBar from "./components/navbar";
import OurClasses from "./components/ourClasses";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <NavBar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
    </div>
  );
}

export default App;
