import jobs from '../Assets/jobs.json';
import React, { useState, Fragment } from 'react';
import Chart from './Chart'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from '../store/Slice'

function Resume() {
    const job = useSelector((state) => state.counter.value)
    console.log(job)
    const dispatch = useDispatch()
    
    return(
        <div className="resume">
            {
                job == 'home' ?
                <Fragment>
                    <div>
                        "Hello World"
                    </div>
                </Fragment>
                    :
                <Fragment>
                    <h1>Andrew Tocchi</h1>
                    <h2>{jobs[job].company}</h2>
                    <h2>{jobs[job].title}</h2>
                    <h2>{jobs[job].location}</h2>
                    <h2>{jobs[job].start + '-'  + jobs[job].stop}</h2>
                    <br></br>
                    <p>{jobs[job].p1}</p>
                    <p>{jobs[job].p2}</p>
                    <Chart />
                </Fragment>
            }
        </div>
    )
}

export default Resume;