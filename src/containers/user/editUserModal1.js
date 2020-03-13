import React, { Component } from "react";
import {
    Col,
    Row,
    Form,
    FormGroup,
    Button,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    id: state.contactApp.contacts.length,
    showModal: ''
});

class EditUserForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: props.values || {}
        }
    }
    onChange(e) {
        const { details } = this.state;
        this.setState({
            details: {
                ...details,
                [e.target.name]: e.target.value
            }
        })
        
    }
    render() {
        // const { addModal } = this.props;
        const { details } = this.state;
        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.firstModalClose(true, details)
                        // this.props.request(this.state.details);
                    }}>
                    <ModalBody>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={details.userName}
                                        name="userName"
                                        id="userName"
                                        onChange={(e) => this.onChange(e)}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={() => this.props.toggle1(false)} type="button" >
                            Cancel
                    </Button>
                    <Button color="primary" type="submit">
                            Next
                    </Button>
                    </ModalFooter>
                </Form>
            </React.Fragment>
        );
    }

}

export default connect(mapStateToProps)(EditUserForm1);