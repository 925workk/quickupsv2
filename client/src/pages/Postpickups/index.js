import React, { Component } from "react";
import Navbar from "../../components/NavBar";
import axios from "axios";
import Footer from "../../components/Footer";
const form_template = {
    storeName: "",
    pickUpAddress: "",
    pickUpCity: "",
    pickUpState: "",
    pickUpZip: "",
    pickUpFloor: "",
    userName: "",
    dropOffAddress: "",
    dropOffCity: "",
    dropOffState: "",
    dropOffZip: "",
    dropOffFloor: "",
    payOut: "",
    phoneNumber: "",
    merchandise: ""
}
class Postpickups extends Component {
    state = {
        results: { ...form_template }
    };
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.results);
        axios('/api/postQuickup', {
            method: 'POST',
            data: {tempData: this.state.results}
        })
            .then(function (response) {
                return response
            }).then(function (body) {
                console.log(body);
            });
        this.setState({
            results: { ...form_template }
        })
    };
    handleInputChange = event => {
        const {results} = this.state;
        const name = event.target.name;
        const value = event.target.value;
        results[name] = value;
        this.setState({
            results
        });
    };
    render() {
        return (
            <div className="postpickupscontainer">
                <div className="emptydiv"></div>
                <div className='horizontalline'></div>
                <Navbar />
                <form className="formscontainer">
                    <div className="container allforms">
                        <h1 className="display-4" className="text-center mt-2 mb-4">POST A PICK UP</h1>
                        <div className="form-group">
                            <label for="formGroupExampleInput">Pick up address</label>
                            <input
                                onChange={this.handleInputChange}
                                type="text" name="storeName"
                                className="form-control"
                                id="storeName"
                                placeholder="Store Name"
                                required value={this.state.results.storeName}
                                 />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.handleInputChange} 
                                type="text" name="pickUpAddress" 
                                className="form-control" 
                                id="pickUpAddress" 
                                placeholder="Street Address" 
                                required value={this.state.results.pickUpAddress} />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="pickUpCity" className="form-control" id="pickUpCity" placeholder="City" required value={this.state.results.pickUpCity} />
                            </div>
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="pickUpState" className="form-control" id="pickUpState" placeholder="State" required value={this.state.results.pickUpState} />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="pickUpZip" className="form-control" id="pickUpZip" placeholder="Zip Code" required value={this.state.results.pickUpZip} />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="pickUpFloor" className="form-control" id="pickUpFloor" placeholder="Floor" required value={this.state.results.pickUpFloor} />
                            </div>
                        </div>
                        <br />
                        <hr></hr>
                        <br />
                        <div className="form-group">
                            <label for="formGroupExampleInput">Drop off address</label>
                            <input onChange={this.handleInputChange} type="text" name="userName" className="form-control" id="userName" placeholder="Your Name" required value={this.state.results.userName} />
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleInputChange} type="text" name="dropOffAddress" className="form-control" id="dropOffAddress" placeholder="Street Address" required value={this.state.results.dropOffAddress} />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="dropOffCity" className="form-control" id="dropOffCity" placeholder="City" required value={this.state.results.dropOffCity} />
                            </div>
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="dropOffState" className="form-control" id="dropOffState" placeholder="State" required value={this.state.results.dropOffState} />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="dropOffZip" className="form-control" id="dropOffZip" placeholder="Zip Code" required value={this.state.results.dropOffZip} />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="dropOffFloor" className="form-control" id="dropOffFloor" placeholder="Floor" required value={this.state.results.dropOffFloor} />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="payOut" className="form-control" id="payOut" placeholder="Pay Out (Minimum $15)" required value={this.state.results.payOut} />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="phoneNumber" className="form-control" id="phoneNumber" placeholder="Phone Number" required value={this.state.results.phoneNumber} />
                            </div>
                        </div>
                        <br />
                        <hr></hr>
                        <br />
                        <div className="form-group">
                            <label for="formGroupExampleInput">List of merchandise</label>
                            <input onChange={this.handleInputChange} type="text" name="merchandise" className="form-control" id="merchandise" placeholder="Refrigerator, Stove, Freezer" required value={this.state.results.merchandise} />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <button onClick={this.handleFormSubmit} type="submit" className="mb-2 postpickupsubmitbutton">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}
export default Postpickups;