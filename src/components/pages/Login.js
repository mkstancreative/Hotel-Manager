import React from 'react';
import { Container, Form, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseForms from '../Forms/UseForm';
import validate from '../Forms/ValidateInfo';
import cover from "../../assets/img/room .jpg"
import "../styles/Login.css"


const Login = ({submitForm}) => {

    const {handleChange, handleSubmit, errors} = UseForms(submitForm,validate);

    return (
        <>
            <Container fluid className="login-container">
                <Row>
                    <Col md={6} className="login-left"> 
                            <img className="sticky" id="cover" src={cover} alt="cover" />
                            <div className='form-header'>
                            <h1> WELCOME TO HOTEL MASTER </h1>
                            <p>Good Resorts & Hosipitality</p>
                            </div>
                    
                    </Col>

                    <Col md={6} className="login-right">
                        <Form className="form" onSubmit={handleSubmit}>
                            <h2>Login Here </h2>
                            <div className="form-inputs">
                                <label htmlFor="email" className="form-label"> Email: </label>
                                <input type="text" name="email" className="form-input" placeholder="Enter your Email" 
                                onChange={handleChange}
                                />
                                {errors.email && <p>{errors.email}</p>}
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="password" className="form-label"> Password: </label>
                                <input type="password" name="password" className="form-input" placeholder="Enter your Password"
                                onChange={handleChange}
                                />
                                {errors.password && <p>{errors.password}</p>}
                            </div>
                            <button type="submit" className="form-input-btn"> Login</button>
                            <div className="Message"> <Link className='next-page' to="/">  Forgot Password </Link></div>   
                        </Form>    
                    </Col>
                </Row>

            </Container>
            
        </>
    )
}

export default Login;
