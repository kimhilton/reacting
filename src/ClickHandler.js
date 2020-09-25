import React from 'react';

function ClickHandler({ onClick, count = 0}) {
return <h1 onClick={() => onClick()}>I was clicked {count} times.</h1>
}

export default ClickHandler;