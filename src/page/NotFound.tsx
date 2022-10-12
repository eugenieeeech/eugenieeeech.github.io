import React from 'react';
import './NotFound.css'

const NotFound = (): JSX.Element => {

    return (
        <div style={{textAlign: "center"}}>
            <h2 className="glitch">
                <span aria-hidden="true">NOT FOUND</span>
                NOT FOUND
                <span aria-hidden="true">NOT FOUND</span>
            </h2>
        </div>
    );
};
export default NotFound;