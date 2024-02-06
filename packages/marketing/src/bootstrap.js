import React from 'react';
import ReactDOM  from 'react-dom';

import App from './App';

//mount
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

//check for dev or isloation
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-marketing');

    if(el) {
        mount(el);
    }
}

export {mount};