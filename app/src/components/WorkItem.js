
import React, { Component } from 'react';
import dateFormat from 'human-date';

const WorkItem = ({data}) => (
    <div className="row work-item-row">
            <div className="col-sm-8 col-sm-offset-2 project">

                <div>{`Last updated ${dateFormat.relativeTime(data.updated)}`}</div>
                <img src={data.imgUrl} className="img-responsive center-block" style={{maxWidth:"50%"}}/>

                <h2 className="text-center"><a href={data.url} target="blank">{data.name}</a></h2>
                <p>{data.description}</p>

                <div className="row text-center" style={{marginTop:"20px"}}>
                    <div className="col-xs-12">
                        {Object.keys(data.languages).map((tag, i) => {
                            return <span key={i} className ="cta-icon label label-default"> { tag } </span>
                        })}
                    </div>
                </div>
            </div>
    </div>
);

export default WorkItem;