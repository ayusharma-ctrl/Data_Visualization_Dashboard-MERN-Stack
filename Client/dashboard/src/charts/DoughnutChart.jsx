import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DoughnutChart = ({serverData}) => {

    let uniqueSectors = [];
    //using forEach because it doesn't return any array
    serverData.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })

    let uniqueTopics = [];
    serverData.forEach((i) => {
        if (!uniqueTopics.includes(i.topic) && i.topic !== "") {
            uniqueTopics.push(i.topic);
        }
    })

    let uniqueRegion = [];
    serverData.forEach((i) => {
        if (!uniqueRegion.includes(i.region) && i.region !== "") {
            uniqueRegion.push(i.region);
        }
    })

    let uniqueCountry = [];
    serverData.forEach((i) => {
        if (!uniqueCountry.includes(i.country) && i.country !== "") {
            uniqueCountry.push(i.country);
        }
    })

    let uniqueSource = [];
    serverData.forEach((i) => {
        if (!uniqueSource.includes(i.source) && i.source !== "") {
            uniqueSource.push(i.source);
        }
    })

    let uniquePestle = [];
    serverData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    })

    const label = ["Country", "Region", "Source", "Topic", "Sector", "Pestle"];
  return (
    <div style={{ height:'50vh', width: '45vw'}}>
            <Doughnut
                data={{
                    labels: label,
                    datasets: [
                        {
                            label: "Total: ",
                            data: [uniqueCountry.length, uniqueRegion.length, uniqueSource.length, uniqueTopics.length, uniqueSectors.length, uniquePestle.length],
                            borderWidth: 1,
                            hoverOffset: 5
                        },
                        
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true
                        },
                    }
                }}
                height={300}
            />
        </div>
  )
}

export default DoughnutChart