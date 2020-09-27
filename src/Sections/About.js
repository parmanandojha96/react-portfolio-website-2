import React,{Component} from 'react';
import WOW from 'wowjs';

class About extends Component {
  
      render()
      {
    return(
        <div>
               <div className="container">
                  <div className="row">
                        <div className="col-lg-12 about image wow fadeInUp" data-wow-delay="1s"></div>
                  </div>
            </div>
    
            <div className="container">
                  <div className="hero-content">
                        <br/><br/>

                        <div className="row">
                              <div className="col-lg-12">
                                    <h3 className="wow fadeInUp" data-wow-delay="1.2s">about me.</h3><br/>

                                    <p className="wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <p className="wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                              </div>
                        </div>
                  </div>
            </div>
         </div>
    );
}
}
export default About;