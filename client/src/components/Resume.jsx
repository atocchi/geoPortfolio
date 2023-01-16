import jobs from '../Assets/jobs.json';
import React, { useState } from 'react';
import Chart from './Chart'

function Resume() {
    const [job, setJob] = useState('near')
    return(
        <div className="resume">
            <h1>Andrew Tocchi</h1>
            <h2>{jobs[job].company}</h2>
            <h2>{jobs[job].title}</h2>
            <h2>{jobs[job].location}</h2>
            <h2>{jobs[job].start + '-'  + jobs[job].stop}</h2>
            <br></br>
            <p>{jobs[job].p1}</p>
            <p>{jobs[job].p2}</p>
            <Chart />
        </div>
    )
}

export default Resume;