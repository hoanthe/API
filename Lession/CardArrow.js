import React, { PureComponent } from "react"
import { Card, CardBody } from "reactstrap"

export default class CardArrow extends PureComponent {

    render() {
        const { className = '', typeArrow = 'arrow-down' } = this.props
        let element = typeArrow === 'two-arrows'||'three-arrows' ? 'p-0' : ''
        return (
            <Card className={"text-center " + typeArrow + ' ' + className}>
                <CardBody className={element}>
                    {this.props.children}
                </CardBody>
                {typeArrow === 'two-arrows' && <div className="two-arrow-items">
                    <table class="arrow-table">
                    </table>
                </div>}
                {typeArrow === 'three-arrows' && <div className="three-arrow-items">
                    <table class="arrow-three-table">
                    </table>
                </div>}
            </Card>
        )
    }
} 