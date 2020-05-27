import React, { Component } from "react"
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';


class Content extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.toggleCustom = this.toggleCustom.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: false,
            accordion: [true, false, false, false],
            custom: [true, false],
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
        };
    }

    onEntering() {
        this.setState({ status: 'Opening...' });
    }

    onEntered() {
        this.setState({ status: 'Opened' });
    }

    onExiting() {
        this.setState({ status: 'Closing...' });
    }

    onExited() {
        this.setState({ status: 'Closed' });
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleAccordion(tab) {

        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            accordion: state,
        });
    }

    toggleCustom(tab) {

        const prevState = this.state.custom;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            custom: state,
        });
    }

    toggleFade() {
        this.setState({ fadeIn: !this.state.fadeIn });
    }
    render() {
        let number = this.props.number

        return (
            <Card className="mb-0">
                <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(number)} aria-expanded={this.state.accordion[number]} aria-controls="collapseOne">
                        <i className="icon-envelope icons font-2xl mt-2 mr-4 d-inline"></i>
                        <h5 className="m-0 p-0 d-inline">Collapsible Group Item #{number + 1}</h5>
                        <p className="ml-5" style = {{marginBottom: "0"}}>Wed, May 6, 1:00 PM</p>
                    </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[number]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                    <CardBody >
                        1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default Content;