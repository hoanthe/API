import React, { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import '../Lession.scss'
import Chart from './Chart'

class Test extends Component {
    render() {
        return (
            <Row>
                <Col sm="12" className="bg-white">
                    <div className="tip tip-info">
                        <i className="icon-user icons font-2xl mt-4 d-inline"></i>
                        <span> <strong>Note:</strong> Previously 'CLOSED' 204 can only be re-opened at least one (1) hour after closing and only until 20 minutes before your lesson slot time. <br />
                            <br />
                            <strong>Example:</strong><br />
                            <br />
                            &emsp; <strong>i.</strong>If you cancel your 2:00PM lesson slot at 10:00AM, you will be able to re-open the 2:00PM lesson slot at 11:00AM until 1:40PM.<br />
                            &emsp; <strong>ii.</strong>If you cancel your 2:00PM lesson slot at 1:00PM, you will no longer be able to re-open the 2:00PM lesson slot.<br />
                        </span>
                    </div>
                </Col>
                <Chart />
            </Row>
        )
    }
}

export default Test;