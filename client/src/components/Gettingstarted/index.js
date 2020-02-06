import React from 'react';

const Gettingstarted = () => {
    return (
        <div className="gettingstarted">
            <div className="container">
                <div className="row">
                    <h1 className="display-6 mt-4 text-center col-md-12 why">What is Quick Ups?</h1>
                    <p className="whatis col-md-6 mb-5">Quick Ups matches delivery drivers with people who request big deliveries through our web app. Big deliveries includes things such as fridges, washers, dryers, furniture, TVs, etc.</p>
                    <p className="whatis col-md-6 mb-5">Have a truck? Then start making money with Quick Ups now! Whether you’re trying to offset costs of your truck, cover this month’s bills, or fund your dreams, Quick Ups will get you there. Be your own boss.</p>
                </div>
            </div>    
            <div className="container">
                <h1 className="GStitle display-4">HOW IT WORKS</h1>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <i className="fa fa-id-card-o fa-5x d-inline signupicon"></i>
                        <div className="d-inline">
                            <h2>Sign up</h2>
                            <p>Quick, free, and secure.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <i className="fa fa-archive fa-5x d-inline boxicon"></i>
                        <div className="d-inline">
                            <h2>Post a job</h2>
                            <p>Post items to be picked up and delivered.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <i className="fa fa-truck fa-5x d-inline truckicon"></i>
                        <div className="d-inline">
                            <h2>Delivery!</h2>
                            <p>It's that easy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-outline-dark btn-lg mt-2 mb-4 truckbutton"><a href="#truckcontainer" className="truckbutton">Have a truck?</a></button>
            </div>
        </div>
    )
}
export default Gettingstarted;