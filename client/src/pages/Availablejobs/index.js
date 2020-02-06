import React from 'react';
import Footer from '../../components/Footer';
import Navbar from "../../components/NavBar";


const Availablejobs = () => {
    return (
        <div id='jobs'>
          <div className="emptydiv"></div>
          <div className='horizontalline'></div>
          <Navbar />
          <div className="availablejobscontainer">
            <div className='container'>
            <h1 className="text-center mt-5 mb-4 display-4">CLAIM A JOB</h1>
              <div className="card availablejobcard">
                <div className="card-header darkcardheader">
                  OwnersEmailAddress@example.com
                </div>
                <div className="card-body">
                  <div className='container'>
                    <div className='row'>
                      <p className="card-text col-md-12"><small className="text-muted">Items list: Fridge, couch, washer, dryer.</small></p>
                      <ul className="list-group col-md-5 d-inline mb-3">
                        <li className="list-group-item">Pick up address city: Taylorsville</li>
                        <li className="list-group-item">Pick up address zipcode: 84129</li>
                        <li className="list-group-item">Pick up flights of stairs: 2</li>
                      </ul>
                      <ul className="list-group col-md-5 d-inline mb-3">
                        <li className="list-group-item">Delivery address city: West Jordan</li>
                        <li className="list-group-item">Delivery address zip code: 84088</li>
                        <li className="list-group-item">Delivery flights of stairs: 0</li>
                      </ul>
                      <div className='col-md-2'>
                        <h3>Payout: <span className="badge badge-secondary payoutbadge">$15</span></h3>
                        <br />
                        <button type="button" className="btn btn-primary btn-lg claimbutton">CLAIM JOB</button>
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
                      <p className="card-text col-md-12"><small className="text-muted">Items list: Fridge, couch, washer, dryer.</small></p>
                      <ul className="list-group col-md-5 d-inline mb-3">
                        <li className="list-group-item">Pick up address city: Taylorsville</li>
                        <li className="list-group-item">Pick up address zipcode: 84129</li>
                        <li className="list-group-item">Pick up flights of stairs: 2</li>
                      </ul>
                      <ul className="list-group col-md-5 d-inline mb-3">
                        <li className="list-group-item">Delivery address city: West Jordan</li>
                        <li className="list-group-item">Delivery address zip code: 84088</li>
                        <li className="list-group-item">Delivery flights of stairs: 0</li>
                      </ul>
                      <div className='col-md-2'>
                        <h3>Payout: <span className="badge badge-secondary payoutbadge">$15</span></h3>
                        <br />
                        <button type="button" className="btn btn-primary btn-lg claimbutton">CLAIM JOB</button>
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
export default Availablejobs;