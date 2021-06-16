import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { v4 } from 'uuid'

class ListItem extends Component{
    render() {
        const {onRemove, onUpdate}= this.props
        const {id, value}=this.props.item
        return (
            <div style={{border:'1px solid black', margin:'20px',padding:'20px'}}>
                <span>id : {id}</span><br/>
                <span> value:{value}</span>
            </div>
        );
    }
}

ReactDOM.render(<ListItem/>,document.getElementById("root"))

