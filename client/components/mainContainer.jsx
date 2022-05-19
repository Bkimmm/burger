import * as React from 'react';
import Demo from './Demo.jsx';


function mainContainer () {
    // const [query, setQuery] = useState('');
    return(
        <div>
            <h2>Demo</h2>
            {/* <Demo query = {query}/> */}
            <input>
            </input>
            <button onClick={runQuery}>
                Submit
                </button>
        </div>
    )
}

export default mainContainer;


