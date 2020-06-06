import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import OpenSchedule from './OpenSchedule'


class LessonProcedureGuide extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: new Array(5).fill('1'),
        };
    }

    lorem() {
        return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    }

    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    }

    tabPane() {
        return (
            <>
                <TabPane tabId="1">
                    <OpenSchedule />
                </TabPane>
                <TabPane tabId="2">
                    {`2. ${this.lorem()}`}
                </TabPane>
                <TabPane tabId="3">
                    {`3. ${this.lorem()}`}
                </TabPane>
                <TabPane tabId="4">
                    {`4. ${this.lorem()}`}
                </TabPane>
                <TabPane tabId="5">
                    {`5. ${this.lorem()}`}
                </TabPane>
            </>
        );
    }
    render() {
        return (
            <Row>
                <Col className="mb-4">
                    <Nav tabs>
                        <NavItem >
                            <NavLink 
                                active={this.state.activeTab[0] === '1'}
                                onClick={() => { this.toggle(0, '1'); }}
                                children = "Open Schedule"
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.activeTab[0] === '2'}
                                onClick={() => { this.toggle(0, '2'); }}
                                children = "Close Schedule"
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.activeTab[0] === '3'}
                                onClick={() => { this.toggle(0, '3'); }}
                                children = "Attendance Update"
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.activeTab[0] === '4'}
                                onClick={() => { this.toggle(0, '4'); }}
                                children = "Call Student"
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.activeTab[0] === '5'}
                                onClick={() => { this.toggle(0, '5'); }}
                                children = "Lesson Trouble Report"
                            />
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab[0]}>
                        {this.tabPane()}
                    </TabContent>
                </Col>
            </Row>
        )
    }
}

export default LessonProcedureGuide;