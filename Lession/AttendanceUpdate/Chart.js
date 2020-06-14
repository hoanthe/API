import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import '../Lession.scss';
import { Link } from 'react-router-dom';
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
                <Row>
                    <Col>
                        <CardArrow className="border-0 p-0" typeArrow="two-arrows">
                            <Button color="primary" block>Did the student answer your call?</Button>
                        </CardArrow>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col sm={4}>
                        <CardArrow className="border-success">
                            <Button color="success" block><i className="icon-calendar"></i> STEP 02</Button>
                            <p>
                                Select and click those clickable yellow and whites bozes depending on the time you wish
                                Be sure that you are on the <span className="bg-success">Open</span>, <span className="bg-success">Open</span>, and <span className="bg-success">Open</span> tab.
                            </p>
                            <p className="tip tip-info">
                                <i className="icon-user icons font-sm mt-4 d-inline"></i>
                                <strong>Note:</strong> Previously 'CLOSED' 204 can only be re-opened</p>
                            <div className="text-center">
                                <Button color="primary"><i className="icon-home"></i> View Image</Button>
                            </div>
                        </CardArrow>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col sm={4}>
                        <CardArrow className="border-success">
                            <Button color="success" block><i className="icon-calendar"></i> STEP 03</Button>
                            <p>
                                Select and click those clickable yellow and whites bozes depending on the time you wish
                                Be sure that you are on the <span className="bg-success">Open</span>, <span className="bg-success">Open</span>, and <span className="bg-success">Open</span> tab.
                            </p>

                            <div className="text-center">
                                <Button color="primary"><i className="icon-home"></i> View Image</Button>
                            </div>
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