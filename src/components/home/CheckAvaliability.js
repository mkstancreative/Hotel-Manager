import React from 'react'
import {Container, Col , Row } from 'react-bootstrap'
import "../styles/CheckAvaliability.css"

const CheckAvaliability = () => {
    return (
        <>
            <Container fluid className="check-avaliable-container">
                <h3>CHECK AVALIABILTY</h3>
                    <Col sm={12}>
                    <form action="">
                            <Row className="check-avaliable-row p-0 m-0">
                            <Col sm={2} className="check-input">
                                <label className="check-label" htmlFor="">Check In</label>
                                <input className="check-inp" type="date" />
                            </Col>
                            <Col sm={1} className="check-select">
                                <label className="check-label" htmlFor="">Night</label>
                                <select className="check-options">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </Col>
                            <Col sm={2} className="check-input">
                                <label className="check-label" htmlFor="">Check Out</label>
                                <input className="check-inp" type="date" />
                            </Col>
                            <Col sm={1} className="check-select">
                                <label className="check-label" htmlFor="">Adults</label>
                                <select className="check-options">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </Col>
                            <Col sm={1} className="check-select">
                                <label className="check-label" htmlFor="">Children</label>
                                <select className="check-options">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </Col>
                            <Col sm={2} className="check-submit">
                                <button type='submit' className="submit-now" > Check Avaliability</button>
                            </Col>
                            </Row>
                    </form>                   
                    </Col>
            </Container>

            
        </>
    )
}

export default CheckAvaliability
