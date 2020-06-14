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
                <Row className="d-flex justify-content-center">
                    <Col sm={6}>
                        <div className="h-100 d-flex flex-column">
                            <CardArrow className="border-0 py-0 border-danger">
                                <Button color="danger" block>NO</Button>
                            </CardArrow>
                            <CardArrow className="border-danger">
                                <Button color="danger" block><i className="icon-phone"></i> STEP 01</Button>
                                <p>
                                    Keep on contacting the student.
                            </p>
                            </CardArrow>
                            <CardArrow className="border-danger">
                                <Button color="danger" block><i className="icon-phone"></i> STEP 02</Button>
                                <p>
                                    If the student still doesn't answer, send this message.
                            </p>

                                <p>
                                    <Alert color="success"><small><em>Hi, ______-san. I am ______ and I am your tutor for today. How are you?"
                                “Your requested material is _______. Is that correct?</em></small></Alert>
                                </p>
                                <div className="text-center">
                                    <Button color="warning"><i className="icon-home"></i> Copy Message</Button>
                                </div>
                            </CardArrow>
                            <CardArrow className="border-danger">
                                <Button color="danger" block><i className="icon-phone"></i> STEP 03</Button>
                                <p>
                                    File a <strong>Student is Late</strong> Lesson Trouble Report through the ALTR system
                                    located on the right side of the Tutoring Notes.
                            </p>
                            </CardArrow>
                            <CardArrow className="border-danger">
                                <Button color="danger" block><i className="icon-phone"></i> STEP 04</Button>
                                <p>
                                    Call the student again to check his/her availability status.
                            </p>
                            </CardArrow>
                            <CardArrow className="border-danger">
                                <Button color="danger" block><i className="icon-phone"></i> STEP 05</Button>
                                <p>
                                    If the student is still not available 2 minutes before the lesson end time,  send this message to the student.
                                </p>
                                <p>
                                    <Alert color="success"><small><em>Hi! I have waited until the end of our lesson time but could not confirm your availability. I hope to be able to talk to you next time. Thank you very much and have a good day!</em></small></Alert>
                                </p>
                                <div className="text-center">
                                    <Button color="warning"><i className="icon-home"></i> Copy Message</Button>
                                </div>
                            </CardArrow>
                            <CardArrow className="border-danger">
                                <Button color="danger" block><i className="icon-phone"></i> STEP 06</Button>
                                <p>
                                    After the lesson end time, mark the student as absent on the tutoring notes.
                            </p>
                            </CardArrow>
                            <Row>
                                <Col>
                                    <CardArrow className="border-0 py-0 no-arrow">
                                        <Button className="bg-gray-500 rounded-pill px-3">End</Button>
                                    </CardArrow>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col>
                                <CardArrow className="border-0 py-0 border-primary">
                                    <Button color="primary" block>YES</Button>
                                </CardArrow>
                            </Col>
                        </Row>
                        <CardArrow className="border-primary">
                            <Button color="primary" block><i className="icon-phone"></i> 1st - 5th min</Button>
                            <p>
                                <strong>Introduction &amp; Confirmation of Requested Material</strong>
                                <br />
                                You may copy and send this message.
                            </p>
                            <p>
                                <Alert color="success"><small><em>Hi, ______-san. I am ______ and I am your tutor for today. How are you?"
                                “Your requested material is _______. Is that correct?</em></small></Alert>
                            </p>
                            <div className="text-center">
                                <Button color="warning"><i className="icon-home"></i> Copy Message</Button>
                            </div>
                        </CardArrow>
                        <CardArrow className="border-primary">
                            <Button color="primary" block><i className="icon-phone"></i>6th - 22nd min</Button>
                            <p>
                                <strong>Lesson Proper</strong><br />
                                Detect & correct the student's repetitive mistakes accurately, positively, and timely. Make sure to use the chat box as digital blackboard.
                            </p>
                        </CardArrow>
                        <CardArrow className="border-primary">
                            <Button color="primary" block><i className="icon-phone"></i>6th - 22nd min</Button>
                            <p>
                                <strong>Feedbackr</strong><br />
                                Give a wrap-up and a feedback that follows the sandwich method before ending the class.
                            </p>
                        </CardArrow>
                        <CardArrow className="border-primary">
                            <Button color="primary" block><i className="icon-phone"></i>23rd - 24th min</Button>
                            <p>
                                <strong>End Call</strong><br />
                            </p>
                            <p>
                                <Alert color="success"><small><em>Hi, ______-san. I am ______ and I am your tutor for today. How are you?"
                                “Your requested material is _______. Is that correct?</em></small></Alert>
                            </p>
                        </CardArrow>
                        <Row>
                            <Col>
                                <CardArrow className="border-0 py-0 no-arrow">
                                    <Button className="bg-gray-500 rounded-pill px-3">End</Button>
                                </CardArrow>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <h3 className="text-center">Tutor is Late</h3>
                <Row>
                    <Col>
                        <CardArrow className="border-0 py-0" typeArrow="three-arrows">
                            <Button color="success">You are late.</Button>
                        </CardArrow>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4}>
                        <CardArrow className="border-0 py-0 border-success">
                            <Button color="success" block>Less than 10 minutes lesson time left</Button>
                        </CardArrow>
                        <CardArrow className="border-success">
                            <Button color="success" block><i className="icon-phone"></i> STEP 01</Button>
                            <p>
                                Do not contact the student anymore.
                            </p>
                        </CardArrow>
                        <CardArrow className="border-success">
                            <Button color="success" block><i className="icon-phone"></i> STEP 02</Button>
                            <p>
                                File a Lesson Trouble Report.
                            </p>
                        </CardArrow>
                        <Row>
                            <Col>
                                <CardArrow className="border-0 py-0 no-arrow">
                                    <Button className="bg-gray-500 rounded-pill px-3">End</Button>
                                </CardArrow>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <CardArrow className="border-0 py-0 border-warning">
                            <Button color="warning" block>At least 10 minutes lesson time left</Button>
                        </CardArrow>
                        <CardArrow className="border-warning">
                            <Button color="warning" block><i className="icon-phone"></i> STEP 01</Button>
                            <p>
                                Call the student immediately.
                            </p>
                        </CardArrow>
                        <CardArrow className="border-warning">
                            <Button color="warning" block><i className="icon-phone"></i> STEP 02</Button>
                            <p>
                                Apologize to the student for being late.
                            </p>
                        </CardArrow>
                        <CardArrow className="border-warning">
                            <Button color="warning" block><i className="icon-phone"></i> STEP 03</Button>
                            <p>
                                Proceed with the lesson.
                            </p>
                        </CardArrow>
                        <CardArrow className="border-warning">
                            <Button color="warning" block><i className="icon-phone"></i> STEP 04</Button>
                            <p>
                                Apologize to the student again before you end the call.
                            </p>
                        </CardArrow>
                        <Row>
                            <Col>
                                <CardArrow className="border-0 py-0 no-arrow">
                                    <Button className="bg-gray-500 rounded-pill px-3">End</Button>
                                </CardArrow>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <CardArrow className="border-0 py-0 border-primary">
                            <Button color="primary" block>Student does not want to continue with the lesson</Button>
                        </CardArrow>
                        <CardArrow className="border-primary">
                            <Button color="primary" block><i className="icon-phone"></i> STEP 01</Button>
                            <p>
                                Do not contact the student anymore.
                            </p>
                        </CardArrow>
                        <CardArrow className="border-primary">
                            <Button color="primary" block><i className="icon-phone"></i> STEP 02</Button>
                            <p>
                                File a <strong>"less than 10 minutes"</strong> Lesson Trouble Report
                            </p>
                        </CardArrow>
                        <Row>
                            <Col>
                                <CardArrow className="border-0 py-0 no-arrow">
                                    <Button className="bg-gray-500 rounded-pill px-3">End</Button>
                                </CardArrow>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Chart;