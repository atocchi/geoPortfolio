function Modal({bool, setBool}){
    function clickHandler(){    
        setBool(false);
    }
    if(!bool) return null;
    return(
        <div className="glass" onClick={() => clickHandler()}>
            <div className="modal">
                <h1>Hello World!</h1>
                <br></br>
                <h3>Welcome to my interactive resume, please click anywhere to disable this modal.</h3>
                <h3>To Navigate through my resume, click any on fthe icons in the upper left to traverse through my job history.</h3>
                <h3>Clicking on a icon will show you a quick blurb about the job, and some of the skills used by that job.</h3>
                <h3>The Map defaults to me, and some general knowledge about me, and my skills.</h3>
            </div>
        </div>
    )
}

export default Modal;