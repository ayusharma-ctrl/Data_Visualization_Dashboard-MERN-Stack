import React from 'react'
import Card from 'react-bootstrap/Card';

// we are returning a dynamic bootstrap card
const CardsForData = ({ item }) => {
    return (
        <div className='cardDiv'>
            <Card bg='light' border='dark' style={{ width: '14rem', margin: '1.2rem' }}>
                <Card.Body>
                    <Card.Title>Project Details</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.sector ? item.sector : "Sector"}</Card.Subtitle>
                    <Card.Text className='cardText'>
                        <ul>
                            <li> {item.topic ? item.topic : "No Info"} </li>
                            <li> {item.title ? item.title : "No Info"} </li>
                            <li> {item.insight ? item.insight : "No Info"} </li>
                            <li> {item.url ? item.url : "No Info"} </li>
                            <li> {item.region ? item.region : "No Info"} </li>
                            <li> {item.country ? item.country : "No Info"} </li>
                            <li> {item.source ? item.source : "No Info"} </li>
                            <li> {item.pestle ? item.pestle : "No Info"} </li>
                            <li> {item.start_year ? item.start_year : "No Info"} </li>
                            <li> {item.end_year ? item.end_year : "No Info"} </li>
                            <li> {item.added ? item.added : "No Info"} </li>
                            <li> {item.published ? item.published : "No Info"} </li>
                            <li> {item.intensity ? item.intensity : "No Info"} </li>
                            <li> {item.likelihood ? item.likelihood : "No Info"} </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardsForData