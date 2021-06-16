import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class FunctionalSetStateDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    brokenInc = () => {
    // 반복문을 이용하므로 10이 증가되어야 하지만, 실제로 확인해보면 1만 증가
        for(let i=0;i<10;i++) {
            this.setState({ count: this.state.count + 1 })  // 답 1
        }
    }

    brokenLog = () => {
        console.log(this.state.count)
    // setState는 순차적으로 실행되지 않고 비동기적으로 작동함
        this.setState({ count: this.state.count + 1 })
    // 따라서 바로 변화가 반영되지 않을 수 있음
        console.log(this.state.count)
    }

    normalInc = () => {
        for(let i=0;i<10;i++) {
            // 만약 이전 상태에 기반하여 업데이트를 할 경우에는 반드시 콜백 함수를 전달하는 형태로 setState 호출
            // 해당 함수로 이전 상태값이 전달됨
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }
    }
    normalLog = () => {
        // Q) 정상적으로 작동하도록 brokenLog 코드 참조하여 재작성하기
        console.log(this.state.count)
        this.setState(state=>{
            console.log(this.state.count+1)
            return {count:state.count+1}
            
            /*  두번째 방법
            const next=this.state.count+1
            console.log(next)
            return {count:next} 
            */
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.brokenLog}>brokenLog</button>
                <button onClick={this.brokenInc}>brokenInc</button>
                <button onClick={this.normalInc}>normalInc</button>
                <button onClick={this.normalLog}>normalLog</button>
            </div>
        );
    }
}
ReactDOM.render(<FunctionalSetStateDemo difficulty={1} />,
    document.getElementById("root"))

// 만약 이전 상태에 기반하여 업데이트를 할 경우에는 반드시 콜백 함수를 전달하는 형태로 setState 호출