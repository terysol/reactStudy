import React, { Component } from 'react'
import ReactDOM from "react-dom"

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = { prop1: 'prop1', prop2: 1, mount: true }
    }

    updateProp = () => {
        this.setState((state) => ({
            prop1: 'prop' + (state.prop2 + 1),
            prop2: state.prop2 + 1
        }))
    }

    render() {
        return (<div>
            <hr />
            {this.state.mount && <LifecycleMethodsDemo prop1={this.state.prop1} prop2={this.state.prop2} />}
            <hr />
            <button onClick={this.updateProp}>update prop</button>
            <button onClick={() => this.setState({ mount : true })}>mount</button>
            <button onClick={() => this.setState({ mount : false })}>unmount</button>
        </div>)
    }
}

class LifecycleMethodsDemo extends Component {
    // 컴포넌트가 생성되는 시점에 단 한 번 호출
    constructor(props) {
        super(props)

        console.log('constructor')

        this.state = { value: 0 }
    }

    // 컴포넌트의 첫 번째 render 호출으로 인한 mount 작업 이후 단 한 번 호출
    componentDidMount() {
        console.log('componentDidMount')
    }

    // props, state 변경시마다 render 함수 호출 이후 호출
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState)
    }

    // unmount 시점에 호출
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // props, state 값 변경에 의해서 호출
    render() {
        console.log('render')
        return (
            <div>
                <p>state : {this.state.value}</p>
                <p>props : prop1 : {this.props.prop1} prop2 : {this.props.prop2}</p>
                <button onClick={() => this.setState((state) => {
                    return { value: state.value + 1 }
                })}>update</button>
            </div>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById("root"))