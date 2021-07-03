import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ImageSlider extends Component {
    constructor(props) {
        super(props)

        // 기능 구현에 필요한 값을 state에 추가 가능
        this.state = {
            images : [
                'https://via.placeholder.com/100x100?text=Image+1',
                'https://via.placeholder.com/100x100?text=Image+2',
                'https://via.placeholder.com/100x100?text=Image+3',
                'https://via.placeholder.com/100x100?text=Image+4'
            ],
            num:0
        }
    }

    handlerPrev=()=>{
        this.setState((state)=>({
            num:state.num-1
        }))
    }

    handlerNext=()=>{
        this.setState((state)=>({
            num:this.state.num+1
        }))
    }

    render() {
        return (
            <div>
                <img src={this.state.images[this.state.num]}/><br/>
               {/*  <button onClick={this.handlerPrev}>prev</button>*/}
               {/*<button onClick={this.handlerNext}>next</button>*/}
                {this.state.num !==0 ? <button onClick={this.handlerPrev}>prev</button> : null }

                {this.state.num !==3 ?<button onClick={this.handlerNext}>next</button> : null}

            </div>
        )
    }
}

ReactDOM.render(<ImageSlider />, document.getElementById("root"))