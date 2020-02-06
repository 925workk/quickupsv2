import React from 'react';

const Pagenotfound = () => {
    return (
        <div className='errorcontainer'>
            <div className='errormessage'>
                <div className='container text-center'>
                    <div className='row'>
                        <h1 className='fourohfour col-md-12'>404</h1>
                        <img src='./images/truck.png' alt='logo' className='errorimage' />
                        <a href='/' type="button" className="col-md-12 btn sorry sorrybutton btn-dark">  -  -  -  -  -  -  -  - Home -  -  -  -  -  -  -  - </a>
                        <h2 className='col-md-12 sorry'>Sorry, something went wrong. This page does not exist.</h2>
                        <h4 className='col-md-12 sorry'>Click the road above to return back to the home page</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pagenotfound;