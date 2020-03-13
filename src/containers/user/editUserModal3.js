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

class EditUserForm3 extends Component {
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
        const { addModal } = this.props;
        const { details } = this.state;
        return (
            <React.Fragment>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.thirdModalClose(true, details)
                        addModal ? this.props.requestAdd(this.state.details) : this.props.requestEdit(this.state.details);
                    }}>
                    <ModalBody>
                        <Row>                            
                            <Col md={6}>
                                <FormGroup>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={details.phoneNumber}
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        maxlength="10"
                                        onChange={(e) => this.onChange(e)}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={() => this.props.toggle3(false)} type="button" >
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

export default connect(mapStateToProps)(EditUserForm3);