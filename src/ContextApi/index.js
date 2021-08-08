import React, {createContext, useState, useEffect} from 'react';
import {fetchApi, fetchCountries , countryChangeApi, fetchDailyData} from '../Api';



export const GlobalState = createContext([]);

export const GlobalProvider = ({children})=>{

  const [status, setStatus] = useState([]);

  const [allCountries, setAllCountries] = useState([]);

  const [countryValue, setCountryValue] = useState({});

  const [dailyData, setDailyData] = useState({});
  
    useEffect(() => {
      const fetchData = async ()=>{
        setAllCountries(await fetchCountries());
        setStatus(await fetchApi());
        setDailyData(await fetchDailyData());
      }
      
      fetchData();
    }, [setStatus]);
    
   
    const CountryChange = async (country)=>{
      
        (country.length) ? setStatus(await countryChangeApi(country)) : setStatus(await fetchApi())
        setCountryValue(country);   
    }

     
    const allStatus = {
      status,
      allCountries,
      CountryChange,
      countryValue,
      dailyRecords: dailyData
    }

    return(
    <GlobalState.Provider value={allStatus }>
        {children}
    </GlobalState.Provider>
    )

}