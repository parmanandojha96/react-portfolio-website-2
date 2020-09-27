import React,{ Component } from 'react';
import Project from './Sections/Project';
import Header from './Sections/Header';
import Footer from './Sections/Footer';

class Work extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Project/>
                <Footer/>
            </div>
        );
    }
}

export default Work;