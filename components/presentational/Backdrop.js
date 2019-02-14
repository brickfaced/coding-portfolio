import React from 'react';

const backdrop = props => (props.show ? <div onClick={props.clicked} /> : null);

export default backdrop;
