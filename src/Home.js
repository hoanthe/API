import React, { Component } from 'react';
import { Alert, Col, Table, Button, ButtonGroup, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Row } from 'reactstrap';


class ListGroups extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 1
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="animated fadeIn">

                <Alert color="success">
                    {/*eslint-disable-next-line*/}
                    <Row>
                        <Col xs="9" md="10">
                            This is a success alert with an example link. Give it a click if you like.

                                </Col>
                        <Col xs="3" md="2">
                            <Button block color="success">Success</Button>

                        </Col>

                    </Row>
                </Alert>


                <Row>
                    <Col xs="8" md="9">
                        <Alert color="success">
                            {/*eslint-disable-next-line*/}
                            <Row>
                                <Col xs="9" md="10">
                                    This is a success alert with an example link. Give it a click if you like.

                                </Col>
                                <Col xs="3" md="2">
                                    <Button block color="success">Success</Button>

                                </Col>

                            </Row>
                        </Alert>
                        <Row>
                            <Col xs="4" md="4">
                                <Table striped >
                                    <thead style={{ backgroundColor: "orange" }}>
                                        <tr >
                                            <th style={{ textAlign: "right" }}>
                                                <i className="cui-star icons font-xl d-block mt-4"></i>

                                            </th>
                                            <th style={{ textAlign: "left", color: "white" }}>Morning</th>
                                        </tr>

                                    </thead>
                                    <tbody className="text-center">
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>

                            <Col xs="4" md="4">
                                <Table striped >
                                    <thead style={{ backgroundColor: "orange" }}>
                                        <tr >
                                            <th style={{ textAlign: "right" }}>
                                                <i className="cui-sun icons font-xl d-block mt-4"></i>

                                            </th>
                                            <th style={{ textAlign: "left", color: "white" }}>Afternoon</th>
                                        </tr>

                                    </thead>
                                    <tbody className="text-center">
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>

                            <Col xs="4" md="4">
                                <Table striped >
                                    <thead style={{ backgroundColor: "orange" }}>
                                        <tr >
                                            <th style={{ textAlign: "right" }}>
                                                <i className="cui-moon icons font-xl d-block mt-4"></i>
                                            </th>
                                            <th style={{ textAlign: "left", color: "white" }}>Evening</th>
                                        </tr>

                                    </thead>
                                    <tbody className="text-center">
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr >
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>


                        </Row>

                        <Alert color="success">
                            {/*eslint-disable-next-line*/}
                            <Row>
                                <Col xs="9" md="10">
                                    This is a success alert with an example link. Give it a click if you like.

                                </Col>
                                <Col xs="3" md="2">
                                    <Button block color="success">Success</Button>

                                </Col>

                            </Row>
                        </Alert>

                    </Col>

                    <Col xs="4" md="3">

                        <Button style={{width: "100%"}} size="lg" className="btn-facebook btn-brand mr-1 mb-1"><i className="item-left fa fa-facebook"></i><span>Facebook</span></Button>

                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Notifications</strong>
                            </CardHeader>
                            <CardBody>
                                <ListGroup>
                                    <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                                    <ButtonGroup size="lg">
                                        <Button size="lg" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
                                    </ButtonGroup>
                                    <ButtonGroup size="lg">
                                        <Button size="lg" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
                                    </ButtonGroup>
                                    <ButtonGroup size="lg">
                                        <Button size="lg" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
                                    </ButtonGroup>
                                    <ButtonGroup size="lg">
                                        <Button size="lg" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
                                    </ButtonGroup>
                                    <ButtonGroup size="lg">
                                        <Button size="lg" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
                                    </ButtonGroup>


                                </ListGroup>
                                <p />
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default ListGroups;
