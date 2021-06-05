import React, { useContext, useEffect, useState } from "react";
import { VinContext } from "../context/VinContext";

const VinInfo = () => {
  const { currentVin } = useContext(VinContext);
  const [infoDisplayed, setInfoDisplayed] = useState({});

  useEffect(() => {
    setInfoDisplayed({
      VIN: currentVin.VIN,
      Year: currentVin.ModelYear,
      Make: currentVin.Make,
      Model: currentVin.Model,
      Trim: currentVin.Trim,
      "Vehicle Type": currentVin.VehicleType,
    });
  }, [currentVin]);

  return infoDisplayed.VIN ? (
    <table className="table table-bordered text-center mt-3">
      <tbody>
        {Object.entries(infoDisplayed).map((rowData) => {
          return (
            <tr key={rowData[1]}>
              <th className="col-2">{rowData[0]}</th>
              <td className="col-3">{rowData[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;
};

export default VinInfo;
