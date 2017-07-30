import React, { Component } from 'react';
import {
  Card,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui';
import axios from 'axios';

class Funds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fundList: [],
    };
  }

  componentDidMount() {
    axios.get('/fundlist')
    .then((res) => {
      this.setState({ fundList: res.data });
    })
    .catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <Card>
          <Table multiSelectable>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Current NAV</TableHeaderColumn>
                <TableHeaderColumn>Purchase NAV</TableHeaderColumn>
                <TableHeaderColumn>Allocation</TableHeaderColumn>
                <TableHeaderColumn>Order Size</TableHeaderColumn>
                <TableHeaderColumn>Details</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.fundList.map((fund) => {
                let link = '/funddetails/' + fund.id;
                return (
                  <TableRow>
                    <TableRowColumn>{fund.name}</TableRowColumn>
                    <TableRowColumn>{fund.currentNAV}</TableRowColumn>
                    <TableRowColumn>{fund.purchaseNAV}</TableRowColumn>
                    <TableRowColumn>{fund.allocation}</TableRowColumn>
                    <TableRowColumn>{fund.order_size}</TableRowColumn>
                    <TableRowColumn><a href={link}> Learn More </a></TableRowColumn>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default Funds;
