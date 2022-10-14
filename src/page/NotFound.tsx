import React from 'react';
import './NotFound.css'
import {FormattedMessage} from "react-intl";

const NotFound = (): JSX.Element => {

    return (
        <div style={{textAlign: "center"}}>
            <h2 className="glitch">
                <span aria-hidden="true"><FormattedMessage id={"NOTFOUND"} /></span>
                <FormattedMessage id={"NOTFOUND"} />
                <span aria-hidden="true"><FormattedMessage id={"NOTFOUND"} /></span>
            </h2>
        </div>
    );
};
export default NotFound;