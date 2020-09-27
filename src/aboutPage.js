import React,{ Component } from 'react';
import About from './Sections/About';
import Header from './Sections/Header';
import Footer from './Sections/Footer';

class aboutPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <About/>
                <Footer/>
            </div>
        );
    }
}

export default aboutPage;