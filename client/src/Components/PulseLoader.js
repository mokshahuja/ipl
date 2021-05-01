import React from "react";

function PulseLoader() {
  return (
    <div className="w-4/5 border rounded mr-2 sm:mr-5 ml-auto mb-2">
      <div className={`animate-pulse grid grid-cols-2 m-1 p-1 sm:m-5 sm:p-3`}>
        <div className=" space-y-3">
          <p className="h-10 bg-green-400 w-3/4"></p>
          <p className="h-6 bg-green-400 w-1/4 "></p>
          <p className="h-6 bg-green-400 w-3/5"> </p>
          <p className="h-6 bg-green-400 w-1/2"></p>
          <p className=""></p>
        </div>
        <div className="space-y-3">
          <p className="h-1  "></p>
          <p className="h-6 bg-green-400 w-4/5"> </p>
          <p className="h-6 bg-green-400 w-3/4"> </p>
          <p className="h-6 bg-green-400 w-4/5"> </p>
          <p className="h-6 bg-green-400 w-1/2"> </p>
        </div>
      </div>
    </div>
  );
}

export default PulseLoader;
