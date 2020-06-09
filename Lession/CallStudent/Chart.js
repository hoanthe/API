import React, { Component } from 'react';
import { Button, Col, Row, Container, Alert } from 'reactstrap';
import '../Lession.scss';
import CardArrow from '../CardArrow';

class Chart extends Component {

    onAlert = () => {
        alert(<image src="https://cdn.rarejob.com/ph/assets/jpg/tutor-img-210v2.jpg"></image>)
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <CardArrow className="border-0 py-0">
                            <Button color="success">Start</Button>
                        </CardArrow>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col sm={4}>
                        <CardArrow className="border-success">
                            <Button color="success" block><i className="icon-phone"></i> STEP 01</Button>
                            <p>
                                Add your student on skpe 3 minutes before the lession.
                            </p>

                        </CardArrow>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col sm={4}>
                        <CardArrow className="border-success">
                            <Button color="success" block><i className="icon-phone"></i> STEP 02</Button>
                            <p>
                                Copy and send this message.
                            </p>
                            <p>
                            <Alert color="success"><small><em>Hi, ______-san. I am ______ and I am your tutor for today. How are you?"
                            “Your requested material is _______. Is that correct?</em></small></Alert>
                            </p>
                            <div className="text-center">
                                <Button color="warning"><i className="icon-home"></i> Copy Message</Button>
                            </div>
                        </CardArrow>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col sm={4}>
                        <CardArrow className="border-success">
                            <Button color="success" block><i className="icon-phone "></i> STEP 03</Button>
                            <p>
                                Once the lesson time starts, call the student immediately.
                            </p>
                        </CardArrow>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardArrow className="border-0 p-0" typeArrow="two-arrows">
                            <Button color="primary" block>Did the student answer your call?</Button>
                        </CardArrow>
                    </Col>
                </Row>




                <Row>
                    <Col>
                        <CardArrow className="border-0 py-0 no-arrow">
                            <Button className="bg-gray-500 rounded-pill px-3">End</Button>
                        </CardArrow>
                    </Col>
                </Row>

            </Container>

        )
    }
}

export default Chart;