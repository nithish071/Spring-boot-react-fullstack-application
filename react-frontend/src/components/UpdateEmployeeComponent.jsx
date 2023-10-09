import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
import { withRouter } from './withRouter';

class UpdateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeebyId(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName,lastName: employee.lastName,
            emailId: employee.emailId
        })
        });
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName,emailId: this.state.emailId};
        // console.log('employee => '+ JSON.stringify(employee));

        EmployeeService.updateEmployee(employee,this.state.id).then( res => {
            this.props.navigate('/employees');
        });
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-centre'>Update Employee</h3>
                            <div className='card-body'>
                                <form action="">
                                    <div className='form-group'>
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name='firstName'  className= 'form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name='lastName'  className= 'form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email ID: </label>
                                        <input placeholder="Email ID" name='emailId'  className= 'form-control' value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    {/* <button className='btn btn-success' onClick={this.saveEmployee}>Save</button> */}
                                    <Link to='/employees' onClick={this.updateEmployee} className='btn btn-success'>Save</Link>
                                    <Link to='/employees' className='btn btn-danger'  style={{marginLeft: '10px'}}>Cancel</Link>
                                    {/* <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Cancel</button> */}
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(UpdateEmployeeComponent);