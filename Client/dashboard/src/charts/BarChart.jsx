import React from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const BarChart = ({serverData}) => {

    let uniqueSectors = [];
    
    //using forEach because it doesn't return any array and we are adding unique sector names to an array
    serverData.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })

    // counting the total number of projects in each sector uniquely
    const sectorCount = uniqueSectors.map((item) => {
        return {
            sector: item,
            count: serverData.filter((i) => i.sector === item).length
        }
    })
    

    return (
        <div style={{ height:'50vh'}}>
            <Bar
                data={{
                    labels: uniqueSectors.map(e=>e),
                    datasets: [
                        {
                            label: 'Total Projects',
                            data: sectorCount.map(e=>e.count),
                            borderWidth: 1,
                        },
                        // {
                        //     label: 'Quantity',
                        //     data: [7, 26, 111, 22, 11, 56]
                        // }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    }
                }}
                height={300}
                
            />
        </div>
    )
}

export default BarChart