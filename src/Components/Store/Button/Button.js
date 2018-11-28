import React from 'react';

const Button = (props) => {
    return (
        <div className="btn-group" role="group">
            <button type="button" id="stars" className="btn btn-primary" href={`#${props.buttonItem.tabName}`} data-toggle="tab">
                <div className="hidden-xs">{props.buttonItem.showName}</div>
            </button>
        </div>
    );
};

export default Button;