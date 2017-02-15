import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Calculator} from './calculator';


export var component;

export function __reload(m) {
    console.log(m);
    if (m && m.component && m.component.state)
        component.setState(m.component.state);
}

component = ReactDOM.render(<Calculator />, document.getElementById('body'));

