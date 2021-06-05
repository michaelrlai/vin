import "./App.css";
import VinInfo from "./components/VinInfo";
import VinInput from "./components/VinInput";
import VinImages from "./components/VinImages";

const App = () => {
  return (
    <div className="container col-md-4">
      <h1 className="text-center mt-3">VIN Decoder</h1>
      <VinInput />
      <VinImages />
      <VinInfo />
    </div>
  );
};

export default App;
