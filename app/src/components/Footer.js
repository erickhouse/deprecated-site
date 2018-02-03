
import React, { Component } from 'react';

const Footer = ({data}) => (
    <div>
        <div className="row row-tools row-grey">
                <div className="col-sm-12 text-center">

                    <h3>Tools I Use</h3>

                    <img src="img/tool-logos/sketch.png" className="techlogo" width="150"/>
                    <img src="img/tool-logos/git.png" className="techlogo" width="150"/>
                    <img src="img/tool-logos/sublime.png" className="techlogo" width="150"/>

                </div>
        </div>

        <div className="row row-footer text-center">
            <div className="col">
                <div style={{margin:"50px"}}>
                    <h3 style={{margin:"50px 0 15px"}}>I'm available for work, get in touch</h3>
                    <div> erickhouse01@gmail.com </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;