import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

const Filters = ({ tempData, setMainData }) => {

    const handleSelect = (eventKey, event) => {
        getDataFromDB(event.target.innerText)
    };

    const getDataFromDB = async(year) => {
        try{
            const response = await axios.get(`https://dashboard-6bfs.onrender.com/api/data/year/${year}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }

    const handleReset = async() => {
        try{
            const response = await axios.get("https://dashboard-6bfs.onrender.com/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
       
    }

    return (
        <div className='tabsClass' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

            <Dropdown onSelect={handleSelect}>

                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter By Year
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1" >2014</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >2015</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >2016</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >2017</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >2018</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >2019</Dropdown.Item>
                    <Dropdown.Item eventKey="7" >2020</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Button variant="danger" onClick={handleReset} style={{ marginLeft: '1vw', width: '10rem' }}>Reset Filters</Button>
        </div>
    )
}

export default Filters