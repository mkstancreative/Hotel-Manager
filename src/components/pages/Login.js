import React from 'react';
import { Container, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseForms from '../Forms/UseForm';
import validate from '../Forms/ValidateInfo';

const Login = ({submitForm}) => {

    const {handleChange, handleSubmit, errors} = UseForms(submitForm,validate);

    return (
        <>
            <Container>
                <Form className="form" onSubmit={handleSubmit}>
                    <h2>Welcome Back to Hotel Master <br /> Login Now! </h2>
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

            </Container>
            
        </>
    )
}

export default Login;
