import React, { PureComponent } from "react"
import { Card, CardText, Button, CardBody } from "reactstrap"

export default class CardArrow extends PureComponent {
    
        render() {
            const {className = '', typeArrow = 'arrow-down'} = this.props
            return (
                <Card className={"text-center " + typeArrow + ' ' + className}>
                    <CardBody>
                        {this.props.children}
                    </CardBody>
                    {typeArrow === 'two-arrows' && <div className="two-arrow-items">
                        <span></span></div>}
                </Card>
            )
        }
}