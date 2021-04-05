import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Q) stop, resume 버튼 추가하기
class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: this.props.time,
            timeout: false,
            intervalId: null
        }
    }

    componentDidMount() {
        // 타이머 설정 (틀린 코드, 대입하면 안됨.)
        this.state.intervalId = setInterval(() => {         // 정수
            this.setState((state) => {
                if( state.time === 1 ) {
                    clearTimeout(this.state.intervalId)
                    return { timeout: true, time: state.time - 1}
                } else {
                    return { time: state.time - 1 }         
                }
            })
        }, 1000)
    }

    handlerStop(){

    }

    handlerResume(){

    }
    componentWillUnmount() {        // 만들 필요가 없다. -> 돔이 삭제되지 않음
        // 타이머 해제
        clearTimeout(this.state.intervalId)
    }

    render() {
        return (
            <div>
                {this.state.timeout ? <h2>timeout</h2> : <h2>{this.state.time}</h2>}
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Timer time={10} /><button onclick={()=> this.props.handlerStop}>stop</button>
        <button onClick={() => this.props.handlerResume}>resume</button>

        <Timer time={30} />
        <Timer time={60} />

    </div>,
    document.getElementById("root"))