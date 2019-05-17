import React from 'react';

const Button = (props) => {
    return (
        <div className="btn-group" role="group">
            <a type="button" id="stars" className="btn btn-primary" href={`#${props.buttonItem.tabName}`} data-toggle="tab">
                <div className="hidden-xs">{props.buttonItem.showName}</div>
            </a>
        </div>
    );
};

export default Button;