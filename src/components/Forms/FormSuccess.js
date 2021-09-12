import React from 'react'
import {Link} from 'react-router-dom';
import success from '../../assets/img/success-transparent.png'

const FormSuccess = () => {
    return (
        <>
        <div className="form-content">
            <div className="form-success">
                <img className='success-logo' src={success} alt="" />
                <h1>You have Signed Up Successfully</h1>
                <Link to=""> Back to Home</Link> <Link>Go to Your DashBoard</Link>
                
            </div>
        </div>
            
        </>
    )
}

export default FormSuccess;
