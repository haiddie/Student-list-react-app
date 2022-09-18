
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'
import RegisterUser from './components/register-user.component'
import LoginUser from './components/login-user.component'

function App() {

  function NavHome(){
    window.location.href="/student-list"
  }
  function createStudent(){
    window.location.href="/create-student"
  }

  function registerUser(){
    window.location.href="/register-user"
  }
  return (
    <div className="App">
    <Router>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={'/student-list'} className="nav-link" >
                React MERN Stack App
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={'/create-student'} className="nav-link" onClick={createStudent}>
                  Create Student
                </Link>
              </Nav>

              <Nav>
                <Link to={'/register-user'} className="nav-link" onClick={registerUser}>
                  Create User
                </Link>
              </Nav>

              <Nav>
                <Link to={'/student-list'} className="nav-link" onClick={NavHome}>
                  Student List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={(props) => <StudentList {...props} />}
                />
                <Route
                  exact
                  path="/create-student"
                  component={(props) => <CreateStudent {...props} />}
                />
                 <Route
                  exact
                  path="/register-user"
                  component={(props) => <RegisterUser {...props} />}
                />
                  <Route
                  exact
                  path="/login-user"
                  component={(props) => <LoginUser {...props} />}
                />
                <Route
                  exact
                  path="/edit-student/:id"
                  component={(props) => <EditStudent {...props} />}
                />
                <Route
                  exact
                  path="/student-list"
                  component={(props) => <StudentList {...props} />}
                />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  </div>
  );
}



export default App;
