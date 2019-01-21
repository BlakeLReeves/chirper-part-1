import React from 'react';

const Timeline = (props) => {
    return (
        <div className="row">
            {props.chirps.map((chirp, index) => {
                return (
                    <div key={index} className="col-md-12 m-2">
                        <div className="card ml-5 mt-3 p-2 border-primary">
                            <h1 className="p-2 border border-dark border-top-0 border-left-0 border-right-0">Chirp</h1>
                            <p className="p-2">{chirp.chirp}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;