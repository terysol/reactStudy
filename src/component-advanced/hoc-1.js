import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// a higher-order component is a function that takes a component and returns a new component.
function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps)
            console.log('new props:', this.props)
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return LogProps
}

class Counter extends Component {
    render() {
        return <div>{this.props.count}</div>
    }
}

const EnhancedComponent = logProps(Counter)

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.state.intervalId = setInterval(() => {
            this.setState((state) => {
                return { count: state.count + 1}
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.state.intervalId)
    }

    render() {
        // return <Counter count={this.state.count} />
        return <EnhancedComponent count={this.state.count} />
    }    // LogProps의 componentDidMount() 실행된다.
}

ReactDOM.render(<App />, document.getElementById("root"))




