import React from 'react';

const Meettheteam = () => {
    return (
        <div>
            <h1 className="text-center mt-5 mb-4 theteam display-4">The Team Behind Quick Ups</h1>
            <h1 className="text-center mt-5 mb-4 nicetomeet display-4">Nice to meet you</h1>
                <div className='container'>
                    <div className="card teamcard pt-4">
                        <div className="card-body">
                            <div className='container'>
                                <div className='row'>
                                    <div className="col-md-6 mb-3 leftofcard">
                                        <img className="teamimage alex float-right" src="./images/alexc.png" alt="alex"/>
                                        <a className="teamatag" href='https://www.linkedin.com/in/alexanderpham626/' target="_blank">
                                            <p className='d-inline teamlink mr-3'>LINKEDIN</p><i className="fab fa-linkedin fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <a className="teamatag" href='https://github.com/925work' target="_blank">
                                            <p className='d-inline teamlink mr-3'>GITHUB</p><i className="fab fa-github fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <a className="teamatag" href='https://925work.github.io/polished-portfolio/' target="_blank">
                                            <p className='d-inline teamlink mr-3'>PORTFOLIO</p><i className="fa fa-suitcase fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-md-5 d-inline mb-3">
                                        <div className="biocontainer">
                                            <h3>Alexander Pham</h3>
                                            <h4>Team Lead + Front End</h4>
                                            <a  className="bioemail" href="mailto:alexanderpham626@gmail.com">Alexanderpham626@gmail.com</a>
                                            <hr className="lightgreyline"></hr>
                                            <p>A full-stack developer who learned web development through the University of Utah. I have a passion for learning and building new projects that are creative, intuitive, and aesthetically pleasing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card teamcard pt-4">
                        <div className="card-body">
                            <div className='container'>
                                <div className='row'>
                                    <div className="col-md-6 mb-3 leftofcard">
                                        <img className="teamimage charissa float-right" src="./images/charissac.png" alt="charissa"/>
                                        <a className="teamatag" href='https://www.linkedin.com/in/charissa-beaty-61b99997/' target="_blank">
                                            <p className='d-inline teamlink mr-3'>LINKEDIN</p><i className="fab fa-linkedin fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <a className="teamatag" href='https://github.com/charbeaty' target="_blank">
                                            <p className='d-inline teamlink mr-3'>GITHUB</p><i className="fab fa-github fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        {/* <a className="teamatag" href='#' target="_blank">
                                            <p className='d-inline teamlink mr-3'>PORTFOLIO</p><i className="fa fa-suitcase fa-2x"></i>
                                        </a> */}
                                    </div>
                                    <div className="col-md-5 d-inline mb-3">
                                        <div className="biocontainer">
                                            <h3>Charissa Beaty</h3>
                                            <h4>User Authentication + Front End + Routing</h4>
                                            <a  className="bioemail" href="mailto:char.beaty11@gmail.com">Char.beaty11@gmail.com</a>
                                            <hr className="lightgreyline"></hr>
                                            <p>Created user authentication and tested website to assure quality of application. Mother of 2 and 
                                                graduate of the University of Utah Coding Bootcamp program.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card teamcard pt-4">
                        <div className="card-body">
                            <div className='container'>
                                <div className='row'>
                                    <div className="col-md-6 mb-3 leftofcard">
                                        <img className="teamimage myles float-right" src="./images/mylesc.png" alt="myles"/>
                                        <a className="teamatag" href='https://www.linkedin.com/in/myles-dewaal-40982b189/' target="_blank">
                                            <p className='d-inline teamlink mr-3'>LINKEDIN</p><i className="fab fa-linkedin fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <a className="teamatag" href='https://github.com/myles-dewaal' target="_blank">
                                            <p className='d-inline teamlink mr-3'>GITHUB</p><i className="fab fa-github fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        {/* <a className="teamatag" href='#' target="_blank">
                                            <p className='d-inline teamlink mr-3'>PORTFOLIO</p><i className="fa fa-suitcase fa-2x"></i>
                                        </a> */}
                                    </div>
                                    <div className="col-md-5 d-inline mb-3">
                                        <div className="biocontainer">
                                            <h3>Myles Dewaal</h3>
                                            <h4>Forms + Back End</h4>
                                            <a  className="bioemail" href="mailto:mylesdewaal@hotmail.com">mylesdewaal@hotmail.com</a>
                                            <hr className="lightgreyline"></hr>
                                            <p>Created the form pages that collects information from user input and stores it onto the back end for later use. Father of 1 and currently working as an analyst at Progressive Leasing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card teamcardlast pt-4">
                        <div className="card-body">
                            <div className='container'>
                                <div className='row'>
                                    <div className="col-md-6 mb-3 leftofcard">
                                        <img className="teamimage nelson float-right" src="./images/nelsonc.png" alt="nelson"/>
                                        <a className="teamatag" href='https://www.linkedin.com/in/nelson-knight-40202b189/' target="_blank">
                                            <p className='d-inline teamlink mr-3'>LINKEDIN</p><i className="fab fa-linkedin fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <a className="teamatag" href='https://github.com/nelsontknight' target="_blank">
                                            <p className='d-inline teamlink mr-3'>GITHUB</p><i className="fab fa-github fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        {/* <a className="teamatag" href='https://925work.github.io/polished-portfolio/' target="_blank">
                                            <p className='d-inline teamlink mr-3'>PORTFOLIO</p><i className="fa fa-suitcase fa-2x"></i>
                                        </a> */}
                                    </div>
                                    <div className="col-md-5 d-inline pb-3">
                                        <div className="biocontainer">
                                            <h3>Nelson Knight</h3>
                                            <h4>Back End + DOM Render</h4>
                                            <a  className="bioemail" href="mailto:nelson.knight92@gmail.com">nelson.knight92@gmail.com</a>
                                            <hr className="lightgreyline"></hr>
                                            <p>Used data from the back end to generate postings onto the DOM that users are able to claim. Graduate of the Univserity of Utah Coding Bootcamp program.</p>
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
export default Meettheteam;