import React from 'react';

const NoMatch = () => {
    const noMatchStyle={
         textAlign:'center',
         marginTop:'100px'
    }
    return (
        <div style={noMatchStyle}>
            <h5>Sorry...page not Found</h5>
            <h1 className="text-danger">404 Error!!!</h1>
        </div>
    );
};

export default NoMatch;