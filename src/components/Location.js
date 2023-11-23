import React, { useState } from "react";
import cityApi from "../api/api";

const Location = ({cityDetail}) => {
  
  return (
    <>

      <div className="text-center mt-20 w-1/5 mx-auto">
        {cityDetail &&
        <div className="text-2xl">
          <p>Country : {cityDetail.country}</p>
          <p>state : {cityDetail.places[0].state} </p>
          <p>place name : {cityDetail.places[0]["place name"]}</p>
        </div>}
          {!cityDetail &&
        <div className="text-2xl">
          <p > No Data </p>
        </div>
        }
      </div>
    </>
  );
};

export default Location;
