import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Q) stop, resume 버튼 추가하기
class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: this.props.time,
            timeout: false,
            intervalId: null,
            stop: false
        }
    }

    componentDidMount() {
        // 타이머 설정
        this.state.intervalId = setInterval(() => {
            this.setState((state) => {
                // if( !state.stop ) {
                    if( state.time === 1 ) {
                        clearTimeout(this.state.intervalId)
                        return { timeout: true, time: state.time - 1}
                    } else {
                        return { time: state.time - 1 }
                    }
                // }
            })
        }, 1000)
    }

    componentWillUnmount() {
        // 타이머 해제
        clearTimeout(this.state.intervalId)
    }

    render() {
        return (
            <div>
                {this.state.timeout ? <h2>timeout</h2> : <h2>{this.state.time}</h2>}
                <button onClick={() => {
                    /*
                    this.setState({
                        stop: true
                    })
                    */
                    clearTimeout(this.state.intervalId)
                }}>stop</button><br />
                <button onClick={() => {
                    this.state.intervalId = setInterval(() => {
                        this.setState((state) => {
                                if( state.time === 1 ) {
                                clearTimeout(this.state.intervalId)
                                return { timeout: true, time: state.time - 1}
                            } else {
                                return { time: state.time - 1 }
                            }
                        })
                    }, 1000)
                }}>resume</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Timer time={10} />
        <Timer time={30} />
        <Timer time={60} />
    </div>,
    document.getElementById("root"))