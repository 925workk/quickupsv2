import React from 'react';

const Pagenotfound = () => {
    return (
        <div className='errorcontainer'>
            <div className='errormessage'>
                <div className='container text-center'>
                    <div className='row'>
                        <h1 className='fourohfour col-md-12' data-shadow="404">404</h1>
                        <div id="smoke">
                            <span class="s0"></span>
                            <span class="s1"></span>
                            <span class="s2"></span>
                            <span class="s3"></span>
                            <span class="s4"></span>
                            <span class="s5"></span>
                            <span class="s6"></span>
                            <span class="s7"></span>
                            <span class="s8"></span>
                            <span class="s9"></span>
                        </div>
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