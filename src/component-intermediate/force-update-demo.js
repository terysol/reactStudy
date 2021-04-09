import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ForceUpdateDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { intervalId: null }
    }

    componentDidMount() {           // render()를 실행할 일이 없음.
        this.state.intervalId = setInterval(() => {
            // forceUpdate 메소드 호출하여 강제로 render 호출
            console.log("forceUpdate")
            this.forceUpdate();         // 내부적으로 render()호출
        }, 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.state.intervalId)
    }

    render() {
        console.log("render")
        return <div>{ (new Date()).toISOString() }</div>
    }
}

ReactDOM.render(<ForceUpdateDemo />, document.getElementById('root'))