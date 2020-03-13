
import { MDBDataTable } from 'mdbreact';
import '../../assets/scss/views/users/userTable.scss';
import React, { Component } from "react";
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditUserForm1 from "../../containers/user/editUserModal1";
import EditUserForm2 from "../../containers/user/editUserModal2";
import EditUserForm3 from "../../containers/user/editUserModal3";
import * as Icon from "react-feather";
import { Edit, Trash2 } from 'react-feather';
import Spinner from "../../components/spinner/spinner";
import { toastr } from 'react-redux-toastr';

class Records extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      tableData: [],
      modal: false,
      firstModalOpen: false,
      showModal: false,
      loader:true
    };
    this.toggle = this.toggle.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal (item) {
    console.log("ITEM On DELETE", item)
    this.setState({
      showModal: true,
      dataRes: item
     });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }
  toggleAdd = () => {
    this.setState({
      itemdata: {},
      firstModalOpen: !this.state.modal,
      addModal: true
    });
  }
  toggle(item) {
    console.log("In Method Edit USER", JSON.stringify(item));
    this.setState({
      itemdata: item,
      firstModalOpen: !this.state.firstModalOpen,
      addModal: false
    });
  }
  toggleOnClose1 = (value) => {
    this.setState({
      firstModalOpen: value,
    });
  }
  toggleOnClose2 = (value) => {
    this.setState({
      secondModalOpen: value,
    });
  }
  toggleOnClose3 = (value) => {
    this.setState({
      thirdtModalOpen: value,
    });
  }
  delete(userId) {
    this.setState({
      loader:true
  })
    axios.delete(`https://peaceful-reaches-75254.herokuapp.com/user/users/${userId}`)
      .then((res) => {
        this.setState({ modal: false })
        this.getData();
        this.handleCloseModal();
        toastr.success('Success', 'User deleted Successfully', { position: 'top-right' })
      })
      .catch(err => {
        console.log(err);
        toastr.error('Error', 'Something went wrong ', { position: 'top-right' })
      })
  }


  getData() {
    axios.get(`http://peaceful-reaches-75254.herokuapp.com/user/users`)
      .then(res => {
        console.log("RESULT OF GET ALL user", JSON.stringify(res))
        if(res.data.users) {
          this.setState({loader:false})
        }
        if(!res.data.users) {
          this.setState({loader:false})
        }
        res.data.users.map((item) => {
          item["button"] =  <span> <Edit size={18} className="mr-2" style={{cursor: "pointer"}} onClick={() => this.toggle(item)} title={'Edit'} /> &nbsp;
          <Trash2 size={18} color="#FF586B" className="mr-2" style={{cursor: "pointer"}} title={'Delete'} onClick={() => this.handleOpenModal(item)} /></span>
        })
        if (res && res.data) {
          this.setState({
            tableData: res && res.data && res.data.users,
          })
        }
      })
      .catch(err => {
        toastr.error('Error', 'Something went wrong ', { position: 'top-right' })
      })
  }

  componentWillMount() {
    this.getData();
  }
  requestEdit(response) {
    this.setState({
      loader:true
  })

  const data = {
    userName: this.state.userName,
    email: this.state.email,
    phoneNumber: response.phoneNumber
  }
    console.log("EDIT",data)

    axios.put(`https://peaceful-reaches-75254.herokuapp.com/user/users/${response._id}`, data)
      .then(res => {
        this.setState({ modal: false,thirdModalOpen:false  })
        this.getData()
        toastr.success('Success', 'User edited Successfully', { position: 'top-right' })
      })
      .catch(err => {
        toastr.error('Error', 'Something went wrong ', { position: 'top-right' })
      })
  };
  requestAdd(response) {
    this.setState({
      loader:true
  })

  const data = {
    userName: this.state.userName,
    email: this.state.email,
    phoneNumber: response.phoneNumber
  }
    console.log("ADD",data)

    axios.post(`https://peaceful-reaches-75254.herokuapp.com/user/create`, data)
      .then(res => {
        this.setState({ firstModalOpen: false, modal: false })
        this.getData()
        console.log("RES", JSON.stringify(res));
        toastr.success('Success', 'User added Successfully', { position: 'top-right' })
      })
      .catch(err => {
        toastr.error('Error', 'Something went wrong ', { position: 'top-right' })
      })
  };

  firstModalClose = (value, details) => {
    console.log('1st modal', details);
    this.setState({
      secondModalOpen: value,
      firstModalOpen: false,
      userName: details.userName
    });
  };

  secondModalClose = (value, details) => {
    console.log('2nd modal', details);
    this.setState({
      thirdModalOpen: value,
      secondModalOpen: false,
      email: details.email
    });
  };

  thirdModalClose = (value, details) => {
    console.log('3rd modal', details);
    this.setState({
      forthModalOpen: value,
      thirdModalOpen: false,
      phoneNumber: details.phoneNumber
    });
  };

  render() {

    const data = {
      columns: [
        {
          label: 'Name',
          field: 'userName',
          sort: 'asc',
          width: 150
        },
        {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 150
          },
        {
          label: 'Phone',
          field: 'phoneNumber',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Action',
          field: 'button',
          sort: 'asc',
          width: 150,
        }
      ],
      rows: this.state.tableData
    }

    return (
      <div>
        <div className="form-group form-group-compose ">
          <button
            type="button"
            className="btn btn-raised btn-danger my-2 shadow-z-2"
            onClick={() => this.toggleAdd()}
          >
            <Icon.UserPlus size={18} className="mr-1" /> Add record
                        </button>
        </div>

        <div>
          <MDBDataTable
            striped
            bordered
            small
            data={data}
          />
          {this.state.loader && <span className="spinner_text">Loading... <Spinner /> </span>}
        </div>
        {/* {this.state.loader ? <Spinner /> :
        <Modal isOpen={this.state.firstModalOpen} className={this.props.className} size="md">
              <ModalHeader>Name</ModalHeader>
              <EditUserForm1 
              firstModalClose = {this.firstModalClose}
              toggle1={this.toggleOnClose1} 
              values={this.state.itemdata} />
            </Modal>
        }
        {this.state.loader ? <Spinner /> :
        <Modal isOpen={this.state.secondModalOpen} className={this.props.className} size="md">
              <ModalHeader>Email</ModalHeader>
              <EditUserForm2 
              secondModalClose = {this.secondModalClose}
              toggle2={this.toggleOnClose2} 
              values={this.state.itemdata} />
            </Modal>
        }
        {this.state.loader ? <Spinner /> :
        <Modal isOpen={this.state.thirdModalOpen} className={this.props.className} size="md">
              <ModalHeader>Phone Number</ModalHeader>
              <EditUserForm3
              thirdModalClose = {this.thirdModalClose}
              addModal={true} 
              requestAdd={this.requestAdd.bind(this)} 
              toggle3={this.toggleOnClose3} 
              values={this.state.itemdata} />
            </Modal>
        } */}
        {this.state.loader ? <Spinner /> :
        <Modal isOpen={this.state.firstModalOpen} className={this.props.className} size="md">
          <ModalHeader>Add/Edit Name</ModalHeader>
          <EditUserForm1 
          firstModalClose = {this.firstModalClose}
          toggle1={this.toggleOnClose1} 
          values={this.state.itemdata} />
        </Modal>
        }
        {this.state.loader ? <Spinner /> :
        <Modal isOpen={this.state.secondModalOpen} className={this.props.className} size="md">
          <ModalHeader>Add/Edit Email</ModalHeader>
          <EditUserForm2
          secondModalClose = {this.secondModalClose}
          toggle2={this.toggleOnClose2} 
          values={this.state.itemdata} />
        </Modal>
        }
        {this.state.loader ? <Spinner /> :
        <Modal isOpen={this.state.thirdModalOpen} className={this.props.className} size="md">
          <ModalHeader>Add/Edit phone</ModalHeader>
          <EditUserForm3
          thirdModalClose = {this.thirdModalClose}
          addModal={this.state.addModal}
          requestAdd={this.requestAdd.bind(this)}
          requestEdit={this.requestEdit.bind(this)} 
          toggle3={this.toggleOnClose3} 
          values={this.state.itemdata} />
        </Modal>
        }
        {this.state.loader ? <Spinner /> :
        <Modal isOpen={this.state.showModal} className={this.props.className} size="md">
          <ModalHeader>Delete User</ModalHeader>
          <ModalBody>Sure you want to Delete User?</ModalBody>
          <ModalFooter>
          <button onClick={() => this.handleCloseModal()}>Cancel</button>
          <button onClick={() => this.delete(this.state.dataRes._id)}>Delete</button>
          </ModalFooter>
        </Modal>
        }
      </div>


    );
  }
}
export default Records;
