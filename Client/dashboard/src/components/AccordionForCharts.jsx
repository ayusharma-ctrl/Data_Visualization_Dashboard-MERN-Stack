import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

//import from files
import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';

const AccordionForCharts = ({ data }) => {
    // defaultActiveKey="0"
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Polar Area and Doughnut Charts - represents number of countries, sectors, topics, pestles, sources, etc are involved</Accordion.Header>
                    <Accordion.Body>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <PolarChart serverData={data} />
                            <DoughnutChart serverData={data} />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Bar Chart- represents number of projects in each sector</Accordion.Header>
                    <Accordion.Body>
                        <BarChart serverData={data} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Line Chart- represents number of projects as per pestle</Accordion.Header>
                    <Accordion.Body>
                        <LineChart serverData={data} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Radar and Pie Charts- represents number of projects as per pestle</Accordion.Header>
                    <Accordion.Body>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <RadarChart serverData={data} />
                            <PieChart serverData={data} />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}

export default AccordionForCharts