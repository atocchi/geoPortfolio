
import React, {useRef} from 'react';

function Legend() {
    const legRef = useRef(['near','vms', 'vsce', 'home', 'cal']);
    return(
        <div class="legend">
            <div ref ='near' className='marker-near'></div>
            <div ref ='vms' className="marker-vms"></div>
            <div ref ='vsce' className="marker-vsce"></div>
            <div ref ='home' className="marker"></div>
            <div ref ='cal' className="marker-cal"></div>
        </div>
    )
}

export default Legend;