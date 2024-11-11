import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import illustration from '../assets/images/illustration.png';

const HomeContent = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h1 style={{fontWeight: 'bold'}}>The Tools for Your Goals</h1>
          <p style={{fontSize:'1.2rem'}}>
            Trying to lose weight, tone up, lower your BMI, or invest in your
            overall health? We give you the right features to get there.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4" style={{ height:'15rem', width: '18rem', padding: '20px', color: '#fff', backgroundColor:'#03346E' }}>
            <Card.Body>
              <Card.Title style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Learn. Track. Improve.</Card.Title>
              <Card.Text style={{fontSize: '1.2rem'}}>
                Keeping a food diary helps you understand your habits and
                to hit your goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4" style={{ height:'15rem', width: '18rem', padding: '20px', color: '#fff', backgroundColor:'#03346E' }}>
            <Card.Body>
              <Card.Title style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Logging Simplified.</Card.Title>
              <Card.Text style={{fontSize: '1.2rem'}}>
                Save meals and use Quick Tools for
                fast and easy food tracking.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4" style={{ height:'15rem', width: '18rem', padding: '20px', color: '#fff', backgroundColor:'#03346E' }}>
            <Card.Body>
              <Card.Title style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Stay Motivated.</Card.Title>
              <Card.Text style={{fontSize: '1.2rem'}}>
                Join the World's Largest Fitness Community for advice, tips, and
                support 24/7.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="align-items-center" style={{marginTop: '70px'}}>
        <Col md={6}>
          <h1 style={{fontWeight: 'bold'}}>Start your fitness journey today!</h1>
          <p style={{fontSize:'1.2rem'}}>
            Sign up for Fitness Tracker and get started on your path to a healthier
            lifestyle.
          </p>
          <Button
            variant="success"
            className="me-2 navlink px-4"
            as={Link}
            to="/pages/register"
          >
            Register
          </Button>
          <Button variant="outline-primary"  className="me-2 navlink px-4" as={Link} to="/pages/login">
            Login
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={illustration}
            alt="Banner"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
