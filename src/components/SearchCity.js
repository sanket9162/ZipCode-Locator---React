import cityApi from "../api/api";
import React,{useState} from "react";
import { Search } from 'react-feather'
import Location from './Location'



const SearchCity = () => {


  const [city, setCity] = useState("");
  const [detail, setDetail] = useState();
  
  const getCityDetail = async () => {
    const cityData = await cityApi(city);
    setDetail(cityData);
    setCity("");
    console.log(cityData)
  };
  return (
    <>
      <div className="text-center mt-32">
        <div className="my-10">
          <p className="text-4xl">Search City by PinCode</p>
        </div>
        <div>
          
        </div>
        <div className="flex justify-center items-center bg-purple text-white w-1/4 mx-auto py-4 rounded-full" >
        <Search/>
        <input type="number" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search..." className=" mx-2 py-1 px-2 text-xl bg-purple outline-0	placeholder-white"></input>
        <button onClick={()=>getCityDetail()} className=" bg-white text-purple outline-0 rounded-full py-2 px-8 text-lg shadow-lg shadow-black hover:bg-gray-100 ">Go</button>

        </div>
      </div>
      
      <Location cityDetail ={detail}/>
      
    </>
  );
};

export default SearchCity;
