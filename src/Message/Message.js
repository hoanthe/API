import React, { Component } from 'react'
import { Card, CardHeader, Button } from 'reactstrap';
import Content from './Content'
import Paginations from './Paginations'


class Message extends Component {

    render() {
        return (
            <React.Fragment>
            <Card>
                <CardHeader>
                    <h2 className="d-inline">Message</h2>
                    <div className="card-header-actions d-inline">
                        <Button block color="ghost-primary"><i className="icon-refresh icons font-2xl d-block mt-1"></i></Button>
                    </div>
                </CardHeader>

                <Content number={0} />
                <Content number={1} />
                <Content number={2} />
                <Content number={3} />

            </Card>

            <Paginations />
            </React.Fragment>
        )
    }
}

export default Message;