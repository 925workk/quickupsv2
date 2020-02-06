import React from 'react';
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Profile = () => {
    return (
        <div>
            <div className="emptydiv"></div>
            <div className='horizontalline'></div>
            <Navbar />
            <div className='currentjobscontainer'>
                <div className='container'>
                    <h1 className="text-center mt-5 mb-4 display-4">YOUR CURRENT JOBS</h1>
                    <div className="card availablejobcard">
                        <div className="card-header darkcardheader">
                        OwnersEmailAddress@example.com
                        </div>
                        <div className="card-body">
                        <div className='container'>
                            <div className='row'>
                            <h4 className='d-inline col-md-4'>Payout: <span class="badge badge-secondary payoutbadge d-inline \">$15</span></h4>
                            <p class="card-text col-md-12"><small class="text-muted">Items list: Fridge, couch, washer, dryer.</small></p>
                            <ul className="list-group col-md-6 d-inline mb-3">
                                <li className="list-group-item">Recipient name: Michael Kelso</li>
                                <li className="list-group-item">Pick up address: 9000s 5400w, West Jordan, Utah, 84088</li>
                                <li className="list-group-item">Pick up flights of stairs: 1</li>
                            </ul>
                            <ul className="list-group col-md-6 d-inline mb-3">
                                <li className="list-group-item">Recipient phone number: 801-324-1359</li>
                                <li className="list-group-item">Delivery address: 11059s Enchanted Lane, South Jordan, Utah, 84095</li>
                                <li className="list-group-item">Delivery flights of stairs: 0</li>
                            </ul>
                            <div className='container text-center'>
                                <button type="button" className="btn btn-primary btn cancelbutton d-inline col-md-4 mb-1 mr-2 ml-2"><i class="fa fa-ban" aria-hidden="true"></i> Cancel Job</button>
                                <button type="button" className="btn btn-primary btn completedbutton d-inline col-md-4 mb-1 mr-2 ml-2"><i class="fa fa-check-square-o" aria-hidden="true"></i> Mark as completed</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card availablejobcard">
                        <div className="card-header darkcardheader">
                        OwnersEmailAddress@example.com
                        </div>
                        <div className="card-body">
                        <div className='container'>
                            <div className='row'>
                            <h4 className='d-inline col-md-4'>Payout: <span class="badge badge-secondary payoutbadge d-inline \">$15</span></h4>
                            <p class="card-text col-md-12"><small class="text-muted">Items list: Fridge, couch, washer, dryer.</small></p>
                            <ul className="list-group col-md-6 d-inline mb-3">
                                <li className="list-group-item">Recipient name: Michael Kelso</li>
                                <li className="list-group-item">Pick up address: 9000s 5400w, West Jordan, Utah, 84088</li>
                                <li className="list-group-item">Pick up flights of stairs: 1</li>
                            </ul>
                            <ul className="list-group col-md-6 d-inline mb-3">
                                <li className="list-group-item">Recipient phone number: 801-324-1359</li>
                                <li className="list-group-item">Delivery address: 11059s Enchanted Lane, South Jordan, Utah, 84095</li>
                                <li className="list-group-item">Delivery flights of stairs: 0</li>
                            </ul>
                            <div className='container text-center'>
                                <button type="button" className="btn btn-primary btn cancelbutton d-inline col-md-4 mb-1 mr-2 ml-2"><i class="fa fa-ban" aria-hidden="true"></i> Cancel Job</button>
                                <button type="button" className="btn btn-primary btn completedbutton d-inline col-md-4 mb-1 mr-2 ml-2"><i class="fa fa-check-square-o" aria-hidden="true"></i> Mark as completed</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Profile;