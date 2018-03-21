import React from 'react';
export default class WM extends React.Component {
    constructor () {
        super ()
        this.types = {
            "reg": "reg",
            "alert": "alert",
            "modal": "modal"
        }
    }
    render () {
        return (<div className="web_wm {this.state.className}"></div>)
    }
}
