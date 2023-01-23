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
            <div className="textBox">
            <h1>Andrew Tocchi</h1>
            {
                job == 'home' ?
                <Fragment>
                    <h2>{jobs[job].title}</h2>
                    <h2>{jobs[job].location}</h2>
                    <br></br>
                    <h1>Education</h1>
                    <br></br>
                    {
                        jobs[job].education.map((item, i) => {
                            return(
                                <div key={i + 'r'} className='row'>
                                    <h3 key={i + 'n'}>{item.name}</h3>
                                    <div key={i + 'd'}>
                                        <h3 key={i + 's'}>{item.school}</h3>
                                        <h3 key={i + 't'}>{item.date}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <br></br>
                    <p>{jobs[job].about}</p>
                </Fragment>
                    :
                job === 'cal' ?
                <Fragment>
                    <br></br>
                    <h1>Education</h1>
                    <h2>{jobs[job].location}</h2>
                    <br></br>
                    {
                        jobs[job].education.map((item, i) => {
                            return(
                                <div key={i + 'r'} className='row'>
                                    <h3 key={i + 'n'}>{item.name}</h3>
                                    <div key={i + 'd'}>
                                        <h3 key={i + 's'}>{item.school}</h3>
                                        <h3 key={i + 't'}>{item.date}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Fragment>
                    :
                <Fragment>
                        <h2>{jobs[job].company}</h2>
                        <h2>{jobs[job].title}</h2>
                        <h2>{jobs[job].location}</h2>
                        <h2>{jobs[job].start + '-'  + jobs[job].stop}</h2>
                        <br></br>
                        <p>{jobs[job].p1}</p>
                        <p>{jobs[job].p2}</p>
                        
                </Fragment>
            }
            </div>
            <Chart />
        </div>
    )
}

export default Resume;