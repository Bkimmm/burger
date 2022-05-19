import React from 'react';


function Demo (props) {
    return(
        <div 
        className="scroll-view" 
        style={{
            overflow: 'scroll', 
            height: "20vh", 
            backgroundColor: 'white', 
            width: '40rem', 
            borderRadius: '5px', 
            border: 'solid 1px black'
        }}>
            {/* <div>{props.input}</div> */}
            {/* <input>code</input> */}
        </div>

    )
}


export default Demo; 