import React, { useContext } from "react";
import { VinContext } from "../context/VinContext";

const VinInfo = () => {
  const { currentVin, useCurrentVin } = useContext(VinContext);

  return (
    <div className="row mt-3">
      <div className="col"></div>
      <div className="col-6">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default VinInfo;
