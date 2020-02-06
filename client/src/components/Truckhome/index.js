import React from 'react';

const Truckhome = () => {
    return (
        <div id='truckcontainer'>
            <div className="makemoney">
                <div className='container'>
                    <div className='row'>
                    <i className="fa fa-usd fa-3x d-inline dollaricon"></i>
                    <h3 className="d-inline sevenfifty ml-2">Make $750 Guaranteed</h3>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h2 className='trucktitle col-md-12'>
                        Have a pickup truck? BIG time <h2 className='benefits d-inline'>benefits</h2>
                        <div className='v1'></div>
                    </h2>
                    <div className='col-md-6'>
                        <img src="./images/green.png" className="greenappliances rounded mx-auto d-block mt-5 mb-5" alt="Green Appliances" />
                    </div>
                    <div className='col-md-6 joincontainer mt-5'>
                        <h2 className='join'>Join our team.</h2>
                        <h2 className='join'>Be your own <h2 className='joing d-inline'>boss.</h2></h2>
                        <p className='driverinfo mb-4'>Become a driver with us and start claiming jobs now. With Quick Ups, you can claim any job you want, any time you want. You won't have a boss breathing down your neck the entire time. Build your own clientele  and keep all of the profits. Quick Ups takes NOTHING.</p>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-md-4 perks">
                                    <i className="fa fa-money fa-3x d-inline lighticons"></i>
                                    <div className="d-inline">
                                        <h5>KEEP TIPS</h5>
                                        <h6>YOU keep all money/tips.</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 perks">
                                    <i className="fa fa-clock-o fa-3x d-inline lighticons"></i>
                                    <div className="d-inline">
                                        <h5>YOUR TIME</h5>
                                        <h6>Claim jobs when YOU want.</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 perks">
                                    <i className="fa fa-user-o fa-3x d-inline lighticons"></i>
                                    <div className="d-inline">
                                        <h5>NO BOSS</h5>
                                        <h6>Work how YOU want!</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Truckhome;