 import React from 'react';
 import { Container, Form } from 'react-bootstrap'
 import {Link } from "react-router-dom";
 import "../styles/Signup.css";
 import UseForms from '../Forms/UseForm';
 import validate from '../Forms/ValidateInfo';

 const SignUp = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = UseForms(submitForm,validate);
     return (
         <>
             <Container className="form-container">
                 <Form className="form" onSubmit={handleSubmit}>
                    <div className='form-header'>
                    <h1>Welcome to Hotel Master <br /> Create your account today by  filling 
                    the <br /> information Below! </h1>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="firstname" className="form-label"> FirstName: </label>
                        <input type="text" 
                        name="firstname" 
                        className="form-input" 
                        placeholder="Firstname" 
                        value={values.firstname}
                        onChange={handleChange}
                        
                        />
                        {errors.firstname && <p>{errors.firstname}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="lastname" className="form-label"> LastName: </label>
                        <input type="text" name="lastname" className="form-input" placeholder="Lastname" 
                        value={values.lastname}
                        onChange={handleChange}
                        />
                        {errors.lastname && <p>{errors.lastname}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label"> Email Address: </label>
                        <input type="text" name="email" className="form-input" placeholder="Enter your Email" 
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password" className="form-label"> Password: </label>
                        <input type="password" name="password" className="form-input" placeholder="Enter your Password" 
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password2" className="form-label">Confirm Password: </label>
                        <input type="password" name="password2" className="form-input" placeholder="Confirm your Password" 
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button type="submit" className="form-input-btn"> Signup </button>
                    <div className="Message"> Already Have an Account? Login <Link className='next-page' to="/login">Here</Link></div>   
                </Form>
             </Container>
         </>
     )
 }
 
 export default SignUp;
 