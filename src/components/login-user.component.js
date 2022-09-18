import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class LoginUser extends Component {
    url='https://foodmartbackend.herokuapp.com/api/';
  constructor(props) {
    super(props)
    // Setting up functions
  
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
 
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
    
      email: '',
   
      password:'',
    }
  }
 
  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }
 
  onChangeUserPassword(e) {
    this.setState({ password: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const userObject = {
     
      email: this.state.email,
    
      password:this.state.password
    };
    axios.post(this.url+'/signin-user', userObject)
      .then(res => console.log(res.data));
    this.setState({  email: '',password:'' })
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} />
        </Form.Group>
     

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" value={this.state.password} onChange={this.onChangeUserPassword} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Login
        </Button>
      </Form>
    </div>);
  }
}