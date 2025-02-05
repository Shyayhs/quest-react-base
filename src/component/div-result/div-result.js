import "./div-result.css"
import React, { Component } from "react"

class DivResult extends Component {
    render() {
        return (
            <div className="div-result">
            <p style={{color: this.props.color}}>
                {this.props.text}
            </p>
        </div>
        )
    }
}

export default DivResult;