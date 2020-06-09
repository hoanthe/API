import React, { Component } from 'react';
import { Button, Col, Row, Container, Alert } from 'reactstrap';
import './Lession.scss';
import { Link } from 'react-router-dom';
import CardArrow from './CardArrow';

class Chart extends Component {

    onAlert = () => {
        // let element = <Card>
        //     <CardHeader>
        //         Manage Schedule Page
        //     </CardHeader>
        //     <CardBody>
        //         <image src="https://cdn.rarejob.com/ph/assets/jpg/tutor-img-210v2.jpg"></image>
        //     </CardBody>
        // </Card>
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
                            <Button color="success" block><i className="icon-calendar"></i> STEP 01</Button>
                            <p>
                                Go to<br />
                                <Link to="">Schedule > Manage Schedule Page.</Link><br />
                                Be sure that you are on the <span className="bg-success">Open</span> tab.
                            </p>
                            <div className="text-center">
                                <Button color="primary"><i className="icon-home"></i> View Image</Button>
                            </div>
                        </CardArrow>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardArrow className="border-0 py-0" typeArrow="two-arrows">
                            <Button color="primary" block>Did the student answer your call?</Button>
                        </CardArrow>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col sm={6}>
                    <div className="h-100 d-flex flex-column">
                    <CardArrow className="border-0 py-0">
                                    <Button color="danger" block>NO</Button>
                                </CardArrow>
                        <CardArrow className="border-danger">
                            <Button color="danger" block><i className="icon-calendar"></i> STEP 01</Button>
                            <p>
                                Keep on contacting the student.
                            </p>
                        </CardArrow>
                    </div>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col>
                                <CardArrow className="border-0 py-0">
                                    <Button color="primary" block>YES</Button>
                                </CardArrow>
                            </Col>
                        </Row>
                        <CardArrow className="border-primary">
                            <Button color="primary" block><i className="icon-calendar"></i> STEP 01</Button>
                            <p>
                                <strong>Introduction &amp; Confirmation of Requested Material</strong>
                                <br />
You may copy and send this message.
<Alert color="success"><small><em>Hi, ______-san. I am ______ and I am your tutor for today. How are you?"
“Your requested material is _______. Is that correct?</em></small></Alert>
                            </p>
                            <div className="text-center">
                                <Button color="warning"><i className="icon-home"></i> Copy Message</Button>
                            </div>
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
            </Container>
            // <React.Fragment>
            //     <div className=" container justify-content-md-center d-flex">
            //         <Col col="2" sm="4" md="2">
            //             <Button className="rounded-pill d-inline" block color="success">Success</Button>
            //             <div className="w-5 h-10 bg-success m-auto"></div>
            //             <div className="arrow m-auto"></div>
            //         </Col>
            //     </div>

            //     <div className=" container justify-content-md-center  m-auto">
            //         <div className="w-25 f-box border border-success rounded-lg d-block" >
            //             <Button color="success">
            //                 <i className="icon-user icons d-inline "></i>
            //                 &nbsp;
            //                 Step 1
            //             </Button>
            //             <p>Go to<br />
            //                 <Link to="">Schedule > Manage Schedule Page.</Link><br />
            //             Be sure that you are on the <span className="bg-success">Open</span> tab.</p>
            //             <Col className="mb-3 rounded-pill">
            //                 <Button className="justify-content-md-center  m-auto" color="primary" onClick={this.onAlert}>
            //                     <i className="icon-user icons d-inline "></i>&nbsp;
            //                     <span className="d-inline">View Image</span>
            //                 </Button>
            //             </Col>
            //         </div>
            //         <div className="m-auto d-block">
            //             <div block className="w-5 h-10 bg-success m-auto"></div>
            //             <div block className="arrow m-auto"></div>
            //         </div>
            //     </div>

            //     <div className=" container justify-content-md-center  m-auto">
            //         <div className="w-25 f-box border border-success rounded-lg d-block" >
            //             <Button color="success">
            //                 <i className="icon-user icons d-inline "></i>
            //                 &nbsp;
            //                 Step 2
            //             </Button>
            //             <p>Go to<br />
            //                 <Link to="">Schedule > Manage Schedule Page.</Link><br />
            //             Be sure that you are on the <span className="bg-success">Open</span> tab.</p>
            //             <Col className="mb-3 rounded-pill">
            //                 <Button className="justify-content-md-center  m-auto" color="primary" onClick={this.onAlert}>
            //                     <i className="icon-user icons d-inline "></i>&nbsp;
            //                     <span className="d-inline">View Image</span>
            //                 </Button>
            //             </Col>
            //         </div>
            //         <div className="m-auto d-block">
            //             <div block className="w-5 h-10 bg-success m-auto"></div>
            //             <div block className="arrow m-auto"></div>
            //         </div>
            //     </div>
            // </React.Fragment>
        )
    }
}

export default Chart;