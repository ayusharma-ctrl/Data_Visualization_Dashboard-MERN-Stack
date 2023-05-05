import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import from files
import Header from './components/Header';
import Tabsrow from './components/Tabsrow';


function App() {

  const [mainData, setMainData] = useState([]);    

    const getDataFromDB = async() => {
        try{
            const response = await axios.get("http://localhost:8001/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getDataFromDB();
    },[])

    useEffect(()=>{
      console.log(mainData.length)
    },[mainData])

    const tempData = mainData;

  return (
    <div>
      <Header/>
      <Tabsrow data={mainData} setMainData={setMainData} tempData={tempData}/>
    </div>
  );
}

export default App;
