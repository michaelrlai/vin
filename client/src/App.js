import "./App.css";
import VinInfo from "./components/VinInfo";
import VinInput from "./components/VinInput";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">VIN Decoder</h1>
      <VinInput />
      <VinInfo />
    </div>
  );
};

export default App;
