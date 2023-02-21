import React from 'react'
import {Container, Row } from 'react-bootstrap'

export default function NavbaRouter() {
  return (
    <div>
         <Container>
                <Row className='justify-content-between'>
                        <h1 style={{width:"90px"}}>Home</h1>
                        <h1>Table</h1>
                        <h1>Create</h1>
                </Row>
            </Container>
    </div>
  )
}
