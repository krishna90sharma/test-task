import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import UserTable from "../../components/user/userTable";

class Email extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col sm="12">
            <UserTable />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Email;
