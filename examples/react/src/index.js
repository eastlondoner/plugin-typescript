"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var calculator_1 = require("./calculator");
var component;
function __reload(m) {
    if (m.component.state)
        component.setState(m.component.state);
}
exports.__reload = __reload;
component = ReactDOM.render(React.createElement(calculator_1.Calculator, null), document.getElementById('body'));
//# sourceMappingURL=index.js.map