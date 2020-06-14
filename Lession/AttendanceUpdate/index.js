import React, { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import '../Lession.scss'
import Chart from './Chart'
import { Link } from 'react-router-dom';

class AttendanceUpdate extends Component {
    render() {
        return (
            <Row>
                <Col sm="12" className="bg-white">
                    <div className="tip tip-info">
                        <i className="icon-user icons font-2xl mt-4 d-inline"></i>
                        <span> <strong>Note:</strong> If there were interruptions during your lesson, it is recommended to try to contact the student and finish the lesson first before responding to trouble reports. You may contact VietESL Tutor Support (Skype: rarejob.tutor.support) for additional guidelines on submitting trouble reports. <br />
                            <br />
                            <span>You may monitor any pending trouble reports here:</span><Link to='/lesson/site/pending_trouble_reports'>/lesson/site/pending_trouble_reports</Link>
                            &emsp; 
                            &emsp; 
                        </span>
                    </div>
                </Col>
                <Chart />
            </Row>
        )
    }
}

export default AttendanceUpdate;