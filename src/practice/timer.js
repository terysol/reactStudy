import React, {Component, createRef} from 'react'
import ReactDOM from 'react-dom'

// Q) stop, resume 버튼 추가하기
class Timer extends Component {
    constructor(props) {
        super(props)

        this.intervalId = createRef()

        this.intervalId.current=null
        this.state = {
            time: this.props.time,
            timeout: false,
            isStart:false,
            stop:false
        }
    }

    componentDidMount() {
        // 타이머 설정 (틀린 코드, 대입하면 안됨.)
        this.intervalId.current= setInterval(() => {         // 정수
            this.setState((state) => {
                    //if(!state.stop) {
                    if (state.time === 1) {
                        clearTimeout(this.state.intervalId)
                        return {timeout: true, time: state.time - 1}
                    } else {
                        return {time: state.time - 1}
                    }
                }
                //
            )
        }, 1000)
    }

    componentWillUnmount() {        // 만들 필요가 없다. -> 돔이 삭제되지 않음
        // 타이머 해제
        clearTimeout(this.intervalId.current)
    }

    handleStop=()=>{


    }

    render() {
        return (
            <div>
                {this.state.timeout ? <h2>timeout</h2> : <h2>{this.state.time}</h2>}
            </div>
        );
    }
}

class TimeView extends Component{
    render() {
        return(
            <div>
                <Timer time={10} /><button onClick={()=> clearInterval(this.intervalId.current)} >stop</button>
                <button onClick={() => {
                    this.intervalId.current = setInterval(() => {         // 정수
                        this.setState((state) => {
                            if( state.time === 1 ) {
                                clearTimeout(this.intervalId.current)
                                return { timeout: true, time: state.time - 1}
                            } else {
                                return { time: state.time - 1 }
                            }
                        })
                    }, 1000)
                }
                }>resume</button>

                <Timer time={30} />
                <Timer time={60} />

            </div>
        )
    }
}

ReactDOM.render(<TimeView/>, document.getElementById("root"))