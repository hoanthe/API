import React, { Component } from 'react';
import { Button, Tooltip } from 'reactstrap';

class TooltipsA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    let showItem ;
    if (this.props.item  === "bbb") {
      showItem = <i className="cui-check icons font-2xl d-block mt-4"></i>
    }else{
    if (this.props.item  === "ccc") {
      showItem = <i className="fa fa-warning fa-lg mt-4"></i>
    }else{
      showItem = this.props.item
    }}
    
    return (
      <span>
        <Button color={this.props.colors} className="mr-1" id={'Tooltip-' + this.props.id}>
          {showItem}  
        </Button>
        <Tooltip placement={'bottom'} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          {this.props.content}
        </Tooltip>
      </span>
    );
  }
}

export default TooltipsA;
