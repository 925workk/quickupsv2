import React from 'react';

const Reviews = () => {
    return (
        <div className="reviewscontainer">
            <div className='container'>
                <div className='row'>
                    <h2 className='trucktitle col-md-12'>
                        What people say about <h2 className='benefits d-inline'>Quick Ups</h2>
                    </h2>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card reviewcard">
                        <div className="card-body">
                            <i className="fa fa-comments-o fa-4x d-inline commenticon" aria-hidden="true"></i>
                            <h5 className="card-title d-inline name">John A.</h5>
                            <div className='starscontainer d-inline'>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                            </div>
                            <p className="card-text">My Quick Ups driver did a great job moving my furniture! Very friendly, professional, and resourceful. They moved my furniture without any problems!</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card reviewcard">
                        <div className="card-body">
                            <i className="fa fa-comments-o fa-4x d-inline commenticon" aria-hidden="true"></i>
                            <h5 className="card-title d-inline name">Tiffany N.</h5>
                            <div className='starscontainer d-inline'>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star-o d-inline" aria-hidden="true"></i>
                            </div>
                            <p className="card-text">It was good. I saved money. Driver was nice, so I still tipped him well.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card reviewcard">
                        <div className="card-body">
                            <i className="fa fa-comments-o fa-4x d-inline commenticon" aria-hidden="true"></i>
                            <h5 className="card-title d-inline name">Karen Smith</h5>
                            <div className='starscontainer d-inline'>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star-o d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star-o d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star-o d-inline" aria-hidden="true"></i>
                            </div>
                            <p className="card-text">I never rate anything over 1 star! Quick Ups was so great that I am going to actually give them a two star.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card reviewcard">
                        <div className="card-body">
                            <i className="fa fa-comments-o fa-4x d-inline commenticon" aria-hidden="true"></i>
                            <h5 className="card-title d-inline name">Real Mike</h5>
                            <div className='starscontainer d-inline'>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                                <i className="fa fa-star d-inline" aria-hidden="true"></i>
                            </div>
                            <p className="card-text">SUPER easy to use. I would definitely recommend to a friend. I bought a fridge from RC Willey and they were able to get it to me that day.</p>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="card-deck mt-4 drivercardgroup">
                            <div className="card drivercard">
                                <img className="card-img-top driverimage" src="https://i.pinimg.com/736x/02/4b/c6/024bc6921cf802ea89285d38c8b8a667.jpg" alt="truckdriver"/>
                                <div className="card-body">
                                <h5 className="card-title">Jeremy (Driver)</h5>
                                <p className="card-text">Great extra money. I love being able to get some extra money whenever I want. </p>
                                </div>
                            </div>
                            <div className="card drivercard">
                                <img className="card-img-top driverimage" src="https://di2ponv0v5otw.cloudfront.net/posts/2018/12/19/5c1b215d72769b2f1481108f/s_5c1b215fe944bae719d86ed3.jpeg" alt="truckdriver1"/>
                                <div className="card-body">
                                <h5 className="card-title">Dan (Driver)</h5>
                                <p className="card-text">Bought a truck I couldn't afford. This helps me make my monthly payments! Super easy to use.</p>
                                </div>
                            </div>
                            <div className="card drivercard">
                                <img className="card-img-top driverimage" src="https://atozhairstyles.com/wp-content/uploads/2017/07/15-Golden-Locks.jpg" alt="truckdriver2"/>
                                <div className="card-body">
                                <h5 className="card-title">Zachary (Driver)</h5>
                                <p className="card-text">Very fun way to make cash. I have met some really cool peopleon my routes as well.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default Reviews;