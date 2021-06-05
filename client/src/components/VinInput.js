import React, { useContext, useState } from "react";
import GetVinInfo from "../apis/GetVinInfo";
import { VinContext } from "../context/VinContext";

const VinInput = () => {
  const [input, setInput] = useState("");
  const { setCurrentVin, setCurrentImages } = useContext(VinContext);

  const handleSubmit = async () => {
    if (input === "" || input === null || input === undefined) return;
    try {
      const response = await GetVinInfo.get(`/${input}`);
      setCurrentVin(response.data.data.Results[0]);
      setCurrentImages(response.data.images);
      //   setInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="input-group input-group-sm mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Vehicle VIN"
        aria-describedby="button-addon2"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default VinInput;
