

import React, { Component } from 'react';

const Profile = ({}) => (
    <div>
        <img src="img/profile.jpg" width="200" className="profile-pic img-responsive center-block"/>
        <h1>Erick House</h1>
        <h2>Adventurer, Learner</h2>
        <h3>Software Engineer</h3>

        <div className="text-center" style={{margin:"20px"}}>
            <a href="https://docs.google.com/document/d/1ItK5MIzlAs0VCVT2j4uFsHMr53WyjiCkxRVW9UnnCqk/edit?usp=sharing" className="cta-icon"><i className="fa fa-file-word-o"></i></a>
            <a href="https://github.com/erickhouse" className="cta-icon"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/erickhouse/" className="cta-icon"><i className="fa fa-linkedin-square"></i></a>
            <a href="mailto:erickhouse01@gmail.com.com?Subject=Hello" className="cta-icon"><i className="fa fa-reply"></i></a>            
        </div>
    </div>
)

const SidePanel = ({}) => (
    <div>
        <div className="col-sm-3 about-me about-side text-center hidden-xs">
            <Profile/>
        </div>

        <div className="text-center about-me hidden-sm hidden-md hidden-lg">
            <Profile/>
        </div>
    </div>
);

export default SidePanel;