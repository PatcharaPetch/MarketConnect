import React, { useState, useEffect } from 'react';
import './Verify.scoped.css';
import { Link } from 'react-router-dom';

function Verify() {
  const [otp, setOtp] = useState(['', '', '', '','','']);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    
    // Validate the input and move focus to the next input
    if (/^\d+$/.test(value) && value.length === 1) {
      newOtp[index] = value;
      if (index < 5) {
        document.getElementById(`input${index + 2}`).focus();
      }
    } else if (value === '' && index > 0) {
      // Handle backspace/delete key
      newOtp[index] = value;
      document.getElementById(`input${index}`).focus();
    } else {
      // Clear the input if it's not a digit
      newOtp[index] = '';
    }

    setOtp(newOtp);
  };

  useEffect(() => {
    // Focus the first input when the component mounts
    document.getElementById('input1').focus();
  }, []);

  return (
    <div className="container">
        <section>
        <div className="title">
            <img src="sendotp.png" alt="" />
        </div>
        <div className="title">Verification Code</div>
        <p>We have sent a verification code to your Email</p>
        <div id="inputs">
            {otp.map((value, index) => (
            <input
                key={index}
                id={`input${index + 1}`}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleInputChange(e, index)}
            />
            ))}
        </div>
        <div className='footer'>
            <Link className="resend">Resend Code</Link>
            <Link to={"/login"}><button>Submit</button></Link>
        </div>
        </section>
    </div>
  );
}

export default Verify;
