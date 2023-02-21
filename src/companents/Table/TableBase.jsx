import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import axios from 'axios'
import '../Table/TableBase.css'

const TableBase = () => {
  const [name, setName] = useState([])
  const [value, SetValue] = useState("")


  const getAllData = () => {
    axios.get('https://my-json-server-production-10a0.up.railway.app/data')
      .then((data) => {
        setName(data.data)

      })
  }

  const delete_func = (id) => {
    axios.delete(`https://my-json-server-production-10a0.up.railway.app/data/${id}`)
      .then((res) => {
        alert(res.statusText)
      })
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    < div style={{backgroundColor:'rgb(233, 253, 255)'}}>
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col xs={8}>
            <Form.Group className=" justify-content-center mb-3">
              <Form.Label>Search information</Form.Label>
              <Form.Control placeholder="Search" onChange={(e) => SetValue(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-center mt-5 '  >
          <Col xs={7}>
            <Table striped bordered hover>
              {name.filter((res) => {
                console.log(res.name);
                return res.name.toLocaleLowerCase() === "" ? value : res.name.toLocaleLowerCase().includes(value)
              })
                .map((data) => {
                  return (
                    <>
                      <tbody>
                        <tr>
                          <div style={{ marginBottom: "30px" }} key={data.id}>
                            <th style={{ paddingRight: "15px", fontSize: "23px" }}>#: </th>
                            <td style={{ color: "gray" }}>{data.id}</td>
                            <br />
                            <th style={{ paddingRight: "15px", fontSize: "23px" }}>Name: </th>
                            <td style={{ color: "gray" }}>{data.name}</td>
                            <br />
                            <th style={{ paddingRight: "15px", fontSize: "23px" }}>Locatsia: </th>
                            <td style={{ color: "gray" }}>{data.location}</td>
                            <br />
                            <th style={{ paddingRight: "15px", fontSize: "23px" }}>price: </th>
                            <td style={{ color: "gray" }}>{data.price}</td>
                            <br />
                            <th style={{ paddingRight: "15px", fontSize: "23px" }}>sale: </th>
                            <td style={{ color: "gray" }}>{data.sale}</td>
                            <br />
                            <th style={{ paddingRight: "15px", fontSize: "23px", paddingBottom: "20px" }}>img: </th>
                            <td style={{ color: "gray" }}>{data.img}</td>

                            <div className="bothbtn">
                              <button className='deletbtn' onClick={() => delete_func(data.id)}>delet</button>
                              <button className='editbtn'>Edite</button>
                            </div>
                          </div>
                        </tr>
                      </tbody>
                    </>
                  )
                })}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default TableBase;