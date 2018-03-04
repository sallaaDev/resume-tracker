import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';

import './dashboard.css';

const styles= {
  location: {
  }
}


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Tracking</TableHeaderColumn>
              <TableHeaderColumn>Company</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Last updated</TableHeaderColumn>
              <TableHeaderColumn>Next scheduled</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>Apple</TableRowColumn>
              <TableRowColumn>Application submitted</TableRowColumn>
              <TableRowColumn>Sep 23, 2017</TableRowColumn>
              <TableRowColumn>None</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Google</TableRowColumn>
              <TableRowColumn>Phone Screen</TableRowColumn>
              <TableRowColumn>Dec 5, 2017</TableRowColumn>
              <TableRowColumn>Dec 15, 2017</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Airbnb</TableRowColumn>
              <TableRowColumn>Application submitted</TableRowColumn>
              <TableRowColumn>Jan 1, 2018</TableRowColumn>
              <TableRowColumn>None</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Uber</TableRowColumn>
              <TableRowColumn>Interview</TableRowColumn>
              <TableRowColumn>Sep 23, 2017</TableRowColumn>
              <TableRowColumn>Apr, 25 2018</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Linkedin</TableRowColumn>
              <TableRowColumn>Offer</TableRowColumn>
              <TableRowColumn>Mar, 5 2018</TableRowColumn>
              <TableRowColumn>Apr, 25 2018</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Dashboard;
