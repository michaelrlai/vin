import React, { useContext, useState } from "react";
import GetVinInfo from "../apis/GetVinInfo";
import { VinContext } from "../context/VinContext";

const VinInput = () => {
  const [input, setInput] = useState();
  const { currentVin, useCurrentVin } = useContext(VinContext);

  const handleSubmit = async () => {
    if (input === "" || input === null || input === undefined) return;
    try {
      const response = await GetVinInfo.get(`/${input}`);
      console.log(response.data.Results[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="row mt-3">
      <div className="col"></div>
      <div className="col-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Vehicle VIN"
            aria-describedby="button-addon2"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Button
          </button>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default VinInput;
