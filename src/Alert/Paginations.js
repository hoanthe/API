import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink, Card} from 'reactstrap';

class Paginations extends Component {
  render() {
    return (
      <Card className="w-auto">
          <Pagination className="m-auto " style = {{marginBottom: "0"}}>
            <PaginationItem disabled>
              <PaginationLink previous tag="button" />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">
                1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">
                2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">
                3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">
                4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">
                5
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next tag="button" />
            </PaginationItem>
          </Pagination>
      </Card>
    )
  }
}
export default Paginations;