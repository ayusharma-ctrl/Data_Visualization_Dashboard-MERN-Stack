import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// we are using bootstrap navbar
const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>Data Virtualization Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header