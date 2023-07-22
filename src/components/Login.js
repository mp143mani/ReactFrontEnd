import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import env from '../enviroinment';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import '../CSS/Login.css';
import Navbar1 from './Navbar1';
import { EmployeeContext } from '../Context';

function Login() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [toggle, setToggle] = useState(false);
  let [message, setMessage] = useState('');
  let navigate = useNavigate();
  const context1 = useContext(EmployeeContext);

  const handleLogin = async () => {
    setToggle(true);
    let res = await axios.post(`${env.apiurl}/users/signin`, {
      email,
      password,
    });

    if (res.data.statusCode === 200) {
      setToggle(false);
      localStorage.setItem('token', res.data.token);
      console.log(res.data.token);
      context1.leadLength();
      context1.requestLength();
      await handleVerify();
    } else {
      setToggle(false);
      setMessage(res.data.message);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  const handleVerify = async () => {
    let res3 = await axios.get(`${env.apiurl}/users/adminRoleAuth`);
    console.log(res3, '1');
    if (res3.data.data === 'Admin') {
      navigate('/Dashboard1');
    }
    if (res3.data.data === 'Employee' || res3.data.data === 'NEmployee') {
      navigate('/Dashboard');
    } else {
      alert('Only Admin has Access');
    }
  };

  const handleForgotpass = async () => {
    navigate('/Forgot');
  };

  return (
    <>
      <Navbar1 />
      <div className="container-fluid d-flex justify-content-center Cont-Center">
        <h1>Welcome to CRM</h1>
        <h5>Login to Continue</h5>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ maxWidth: '300px', margin: 'auto' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ maxWidth: '300px', margin: 'auto' }}
            />
          </Form.Group>

          <Button className="mx-2" variant="primary" onClick={() => handleLogin()}>
            Login
          </Button>
          {/* Rest of the code... */}
          <Button className="mx-2" variant="primary" onClick={() => handleForgotpass()}>
            Forgot Password
          </Button>
        </Form>
        
          
        {toggle ? <Spinner animation="border" variant="primary" /> : <></>}
        {message ? <div style={{ color: 'red', textAlign: 'center' }}>{message}</div> : <></>}
      </div>
    </>
  );
}

export default Login;
