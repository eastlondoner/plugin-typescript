import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Calculator} from './calculator';
var component;

export function __reload(m) {
    if (m.component.state)
        component.setState(m.component.state);
}

component = ReactDOM.render(<Calculator />, document.getElementById('body'));

