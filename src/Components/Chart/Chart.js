import React, { useContext } from 'react';
import { GlobalState } from '../../ContextApi';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = () => {
    const {status : {active, deaths, recovered,updated}, countryValue, allCountries } = useContext(GlobalState);
    
     console.log(allCountries);
    const lineChart = (
         <Line
        data={{
            labels: allCountries.map(({country})=> country),
            datasets: [{
                data: allCountries.map(({active})=> active),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            }
            ,{
              data: allCountries.map(({recovered})=> recovered),
              label: 'Recovered',
              borderColor: 'green',
              //backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true
          }
            ,{
              data: allCountries.map(({deaths})=> deaths),
              label: 'Deaths',
              borderColor: 'red',
              //backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true
          }
          ]
           
        }}
        />
          
        
       );

      const doughnut = (
        <Doughnut data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                data: [active, recovered, deaths]
            }]
        }} />
      )
    const BarChart = (
        <Bar
        data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                data: [active, recovered, deaths]
            }]

        }}
        options={{
            legend: { display: false },
            title: { display: true, text: `Current State in ${countryValue}` }
        }}
        />
        
    );

    return (
        <div className={styles.container}>
             { (countryValue.length) ? BarChart : doughnut }
        </div>
    )
}

export default Chart;
