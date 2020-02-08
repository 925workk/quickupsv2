import React, {useEffect, useState} from 'react';
import Footer from '../../components/Footer';
import Navbar from "../../components/NavBar";
import axios from "axios";
const Availablejobs = () => {
  const [quickUps, setQuickUps] = useState([])
  useEffect (()=>{
    axios.get("/api/postQuickup").then(res => {
      console.log('res', res.data)
      setQuickUps(res.data)
    }).catch(err => console.log(err))
  }, [])
   console.log(quickUps)
    return (
        <div id='jobs'>
          <div className="emptydiv"></div>
          <div className='horizontalline'></div>
          <Navbar />
          <div className="availablejobscontainer">
            <div className='container'>
            <h1 className="display-4" className="text-center mt-5 mb-4">CLAIM A JOB</h1>
              {quickUps.map((item)=> {
                return(
                <div className="card availablejobcard">
                  <div className="card-header darkcardheader">
                   Users phone number: {item.phoneNumber}
                  </div>
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <p className="card-text col-md-12"><small className="text-muted">{item.merchandise}</small></p>
                        <ul className="list-group col-md-5 d-inline mb-3">
                        <li className="list-group-item">Pick up address: {item.pickUpAddress}</li>
                          <li className="list-group-item">Pick up zip: {item.pickUpZip}</li>
                          <li className="list-group-item">Flights of stairs: {item.pickUpFloor}</li>
                        </ul>
                        <ul className="list-group col-md-5 d-inline mb-3">
                        <li className="list-group-item">Delivery address: {item.dropOffAddress}</li>
                        <li className="list-group-item">Pick up zip{item.dropOffZip}</li>
                        <li className="list-group-item">Flights of stairs: {item.dropOffFloor}</li>
                      </ul>
                      <div className='col-md-2'>
                <h3>Payout: <span className="badge badge-secondary payoutbadge">${item.payOut}</span></h3>
                        <br />
                        <button type="button" className="btn btn-primary btn-lg claimbutton">CLAIM JOB</button>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>
                )}
              )}
            </div>
          </div>
          <Footer />  
        </div>
    )
}
export default Availablejobs;