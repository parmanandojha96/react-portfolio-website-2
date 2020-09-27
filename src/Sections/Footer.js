import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Footer =() =>{
    return(
        <div>
            <div className="footer">
                  <div className="container">
                        <br/><br/>

                        <div className="collab">
                              <div className="row">
                                    <div className="col-lg-12">
                                          <p className="wow fadeInUp">Got an interesting project? I can help you.</p>
                                    </div>
                              </div>
                        </div>

                        <br/>

                        <div className="hr">
                              <div className="row"></div>
                        </div>

                        <br/><br/>

                        <div className="info">
                              <div className="row">
                                    <div className="col-lg-4" id="personal">
                                          <p className="wow fadeInUp">connect with me</p>
                                          <h4 className="wow fadeInUp" data-wow-delay="0.2s">ig @i_am_parmanand</h4>
                                          <br/><br/>
                                    </div>

                                    <div className="col-lg-4">
                                          
                                          <br/><br/>
                                    </div>

                                    <div className="col-lg-4" id="address">
                                          <p className="wow fadeInUp" data-wow-delay="0s">say hello</p>
                                          <h4 className="wow fadeInUp" data-wow-delay="0.2s">ojha96p@gmail.com</h4>
                                          <br/>
                                          <h4 className="wow fadeInUp" data-wow-delay="0.2s">+91 87000 707 46</h4>
                                          <br/><br/>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
           
            <br/><br/><br/><br/>

        </div>
    );
}

export default Footer;