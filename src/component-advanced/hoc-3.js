import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// a higher-order component is a function that takes a component and returns a new component.
function withCounter(WrappedComponent, ms) {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        componentDidMount() {
            const intervalId = setInterval(() => {
                this.setState((state) => {
                    return { count: state.count + 1 }
                })
            }, ms)
            this.setState({ intervalId: intervalId });
        }

        componentWillUnmount() {
            clearInterval(this.state.intervalId)
        }

        stop = () => {
            clearInterval(this.state.intervalId)
        }

        resume = () => {
            const intervalId = setInterval(() => {
                this.setState((state) => {
                    return { count: state.count + 1 }
                })
            }, ms)
            this.setState({ intervalId: intervalId });
        }

        render() {
            /*
                모든 필요한 정보는 prop 의 형태로 제공함을 유의!
                (HoC 대상이 될 컴포넌트의 state를 바꾸지 않음!)
            */
            return <WrappedComponent
                count={this.state.count}
                stop={this.stop}
                resume={this.resume}
                {...this.props} />
        }
    }

    return WithCounter
}

const ProgressBar = withCounter(class extends Component {
    render() {
        const progress = (this.props.count % 100)

        return (
            <div style={{
                width: `${progress}%`,
                background: "red",
                height: "10px"
            }}>
            </div>
        )
    }
}, 16)

const App = withCounter(class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div style={{ margin: "0 auto", width: "50%"}}>
            <ProgressBar />
            <h1>{this.props.count}</h1>
            <button onClick={() => {
                this.props.resume()
            }}>resume</button>
            <button onClick={() => {
                this.props.stop()
            }}>stop</button>
        </div>
    }
}, 1000)

ReactDOM.render(<App />, document.getElementById("root"))




