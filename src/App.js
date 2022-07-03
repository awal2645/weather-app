import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import React ,{useState,useEffect} from "react";
import './App.css';

function App() {
const apiKey="7ed0bd5d0bf60668f3972966ca4a7b81"
const [data, setData] = useState({});
const [inpuCity, setInputCity] = useState("")

const getWetherDetails=(cityName)=>{
  if(!cityName)return
  const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey;
  axios.get(apiURL).then((res)=>{
    console.log('response' ,res.data);
    setData(res.data)
  }).catch((err)=>{
    console.log('err',err);
    
  })
}

const  handelChangeInput=(e)=>{
 
 
  console.log("value" , e.target.value);
  setInputCity(e.target.value);
}
const handelSearch=()=>{
  getWetherDetails(inpuCity)
}



useEffect(() => {
 
getWetherDetails("");

}, [])


  return (
   <>
   <div className="col-md-12">
   <div className="weatherBg">
   <h1 className="heading">weather app</h1>
   <div className="d-grid col-4 mt-4 gap-3">
   <input type="text" className="  form-control" onChange={handelChangeInput} value={inpuCity}/>
   <button className="btn btn-primary" type="submit" onClick={handelSearch}>Search</button>
   </div>
   </div>

   <div className="col-md-12 text-center mt-5">
    <div className="shadow rounded  weatherResualt">
    <img src="http://store-images.s-microsoft.com/image/apps.10595.14397430983184912.cfdf6f70-0a34-4999-b494-936559d822c3.7355576f-baf9-4be3-8b34-27bdc6ac1bd2" alt="img"  className="weatherIcon"/>

    <h5 className="weatherCity">{data?.name}</h5>
    <h6 className="weatherTmp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
    </div>
   </div>

   </div>
        
     
    </>
  );
}

export default App;
