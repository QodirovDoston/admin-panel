import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import createData from '../DinamicAxios/DinamicAxios'
import "../Section/Section.css"

const CreateData = () => {

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [sale, setSale] = useState('')
  const [img, setImg] = useState('')
  const navigate = useNavigate('')

  const createAllData = async () => {
    let data = {
      name: name,
      location: location,
      price: price,
      sale: sale,
      img: img,
    }
    let url = ' http://localhost:3004/data'
    await createData(url, data)
      .then((res) => {
        if (res.status === 201) {
          alert("seccess")
          setName("")
          setLocation("")
          setPrice("")
          setSale("")
          setImg("")
          navigate("/table")
        }
      })
  }
  return (
    < div style={{ backgroundColor: 'rgb(246, 249, 228)' }}>
      <Container>
        <Row className='justify-content-center mt-1'>
          <Col xs={8}>
            <h1 style={{ textAlign: "center" }}>hello create</h1>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='name'>Name</Form.Label>
                <Form.Control type="text" placeholder="town name" onChange={(e) => setName(e.target.value)} />
                {name.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>Lotatsia</Form.Label>
                <Form.Control type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)} />
                {location.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>price</Form.Label>
                <Form.Control type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} />
                {price.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>sale</Form.Label>
                <Form.Control type="text" placeholder="sale" onChange={(e) => setSale(e.target.value)} />
                {sale.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>img</Form.Label>
                <Form.Control type="text" placeholder="img" onChange={(e) => setImg(e.target.value)} />
                {img.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>
              {name.length  < 2 ?
               <Button style={{width:"100%" }}variant="primary"> Submit </Button>:<Button style={{width:"100%"}} variant="primary" onClick={createAllData}>
              Submit
            </Button> 
          }
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default CreateData;