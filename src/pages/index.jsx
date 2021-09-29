import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button,
    Alert,
    Breadcrumb,
    Card,
    Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
    return (
        <div>
            <h3>Welcome to the React Router Tutorial!</h3>
            <small>Main Page</small>
            <Container>
                <form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="example@email.com"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email. Trust us.
                                </Form.Text>
                            </Form.Group>
                        </Col>
						<Col>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Button variant="secondary" type="submit">
                        Login
                    </Button>
                </form>
                <Card className="mb-3" style={{ color: "#000" }}>
                    <Card.Img src="https://picsum.photos/200/101" />
                    <Card.Body>
                        <Card.Title>Card Example</Card.Title>
                    </Card.Body>
                    <Card.Text>
                        This is an example of react bootstrap cards.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card>
                <Breadcrumb>
                    <Breadcrumb.Item>Test</Breadcrumb.Item>
                    <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                    <Breadcrumb.Item active="true">Test 3</Breadcrumb.Item>
                </Breadcrumb>
                <Alert variant="primary">This is an alert</Alert>
                <Button variant="secondary" href="./users">
                    View Users
                </Button>
                <Link to="./users">Show List of Users</Link>
            </Container>
        </div>
    );
};

export default MainPage;
