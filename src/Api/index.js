import React from 'react'

const url = 'https://corona.lmao.ninja/v2';
export const fetchApi = async () => {
    const fetchApiUrl = `${url}/all`;
    const {active, deaths, recovered, updated} = await fetch(fetchApiUrl)
    .then((response)=> response.json());
    return {active, deaths, recovered, updated};
}

export const countryChangeApi = async (country)=>{
    const fetchApiUrl = `${url}/countries/${country}`;
    const {active, deaths, recovered, updated} = await fetch(fetchApiUrl)
    .then((response)=> response.json());
    return {active, deaths, recovered, updated, country};
}


export const fetchCountries = async ()=>{
    const fetchUri = `${url}/countries`;
    const allCountries = await fetch(fetchUri)
    .then((res)=> res.json());
    return allCountries;
}

export const fetchDailyData = async ()=>{
    try {
        const data = await fetch('https://covid19.mathdro.id/api/daily')
        .then((res)=> res.json());

        const modifiedData = data.map((daily)=>({
            confirmed: daily.confirmed.total,
            deaths: daily.deaths.total,
            date: daily.reportDate
        }))
        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}




