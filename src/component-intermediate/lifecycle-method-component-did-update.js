import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 색상 save 할때마다 save한 색상 보여주기
class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showColorBox: true,
            save:[]
        }
    }
    saveColor=(newColor)=>{
        this.setState(state =>{
            return{
                save: state.save.concat(newColor)
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.save.map((color)=>{
                    return <div style={{ width: '50px', height: '50px', background: color,display:'inline' }}>{color}</div>
                })}
                <br/>
                <button onClick={() => this.setState(state => ({ showColorBox: !state.showColorBox }))}>toggle color box</button>
                { this.state.showColorBox ? <RandomColorBoxWithTimer time={5} saveColor={this.saveColor}/> : null }
            </div>
        )       // showColorBox가 false가 될 때  willUnmount가 실행된다.
    }
}


class RandomColorBoxWithTimer extends Component {
    generateRandomColor = () => "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})

    showNewColor = () => {
        this.setState({ color: this.generateRandomColor() })
    }

    // 타이머
    resetTimerWithNewColor = () => {
        clearInterval(this.state.intervalId)
        this.state.intervalId = setInterval(() => {
            console.log('from setInterval')

            this.setState(state => {
                return { time: state.time - 1 }
            })
        }, 1000)

        this.showNewColor()
        this.setState(state => {
            return { time: this.props.time }
        })
    }

    constructor(props) {
        super(props)

        this.state = {
            color: this.generateRandomColor(),
            time: this.props.time,
            intervalId: null
        }
    }

    componentDidMount() {
        console.log('componentDidMount')

        this.state.intervalId = setInterval(() => {
            console.log('from setInterval')

            this.setState(state => {
                return { time: state.time - 1 }
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {      // 타이머 재가동할 때는 componentDidUpdate 해준다.
        console.log('componentDidUpdate')

        // 지금 props, state 정보가 필요한 경우 this.props, this.state 값 접근
        if(this.state.time === 0) {
            this.resetTimerWithNewColor()
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')

        clearInterval(this.state.intervalId)
    }

    render() {
        console.log("render")

        return (
            <div>
                <p>남은 시간 : {this.state.time}</p>
                <p>색상 : {this.state.color}</p>
                <div style={{ width: '100px', height: '100px', background: `${this.state.color}` }}>
                </div>
                <button onClick={ this.resetTimerWithNewColor }>next color</button>
                <button onClick={()=>{
                    this.props.saveColor(this.state.color)
                } }>save color</button><br/>
            </div>
        )
    }
}

ReactDOM.render(<Container />, document.getElementById("root"))