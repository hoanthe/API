import React, { Component } from 'react';
import { Alert, Col, Table, Button, ButtonGroup, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Row } from 'reactstrap';


class Colors extends Component {

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

              <Button color="success" size="lg" block>
                <img alt="" src="https://cdn.rarejob.com/ph/assets/png/tutor-img-118.png"></img>
                <span style={{ fontSize: "20px" }}>GOLDEN WEEK OPEN FOR ALL REMINDER: ALL 5:00 AM to 11:55 PM slots are available to open for all tutors from May 4 to May 8, 2020!</span>
              </Button>
            </Col>
            <Col xs="3" md="2">
              <Button block color="success">
                <img alt="" src="https://cdn.rarejob.com/ph/assets/png/tutor-img-232.png"></img>
              </Button>

            </Col>

          </Row>
        </Alert>


        <Row>
          <Col xs="8" md="9">
            <Alert color="success">
              {/*eslint-disable-next-line*/}
              <Row>
                <Col xs="9" md="10">
                  <img alt="" src="https://s3-ap-northeast-1.amazonaws.com/rarejob-cache/ph/assets/png/tutor-img-356.png"></img>
                  <span>Your schedule for May 06, 2020</span>
                </Col>
                <Col xs="3" md="2">
                  <Button block color="success">Refresh</Button>
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
                      <td>5:00 AM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>5:30 AM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>6:00 AM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>6:30 AM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>7:00 AM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>7:30 AM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>8:00 AM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>8:30 AM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>9:00 AM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>9:30 AM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>10:00 AM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>10:30 AM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <td>11:00 AM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>11:30 AM</td>
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
                      <td>12:00 PM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>12:30 PM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>1:00 PM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>1:30 PM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2:00 PM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>2:30 PM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>3:30 PM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>4:00 PM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>4:30 PM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>5:00 PM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>5:30 PM</td>
                      <td>@fat</td>
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
                      <td>6:00 PM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>6:30 PM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>7:00 PM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>7:30 PM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>8:00 PM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>8:30 PM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>9:00 PM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>9:30 PM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>10:00 PM</td>
                      <td>@twitter</td>
                    </tr>
                    <tr >
                      <td>10:30 PM</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>11:00 PM</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>11:30 PM</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Alert color="success"
              style={{
                backgroundImage: `url(https://cdn.rarejob.com/ph/assets/png/tutor-img-898.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "1000px 70px"
              }}
            >
              {/*eslint-disable-next-line*/}
              <Row>
                <Col style={{ color: "white", left: "200px", fontSize: "20px" }} xs="9" md="10" >
                  Starting your first lesson and you have no idea what to do?
                </Col>
                <Col xs="3" md="2">
                  <Button block color="danger">
                    Click Here
                    </Button>
                </Col>
              </Row>
            </Alert>
          </Col>
          <Col xs="4" md="3">

            <Button block color="success">
              <img alt="" src="https://d1atgierv9op2.cloudfront.net/ph/assets/png/tutor-img-421.png"></img>
              <span>Take a Tour</span>
            </Button>

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

export default Colors;
