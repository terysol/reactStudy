import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom'

// ref는 dom요소를 참조함.
const FancyButtonFunc = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={props.onClick}>
        {props.children}
    </button>
));

class FancyButtonClass extends Component {
    render() {
        return (
            <button ref={this.props.forwardRef} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}

// ForwardedFancyButtonClass  ref를 받을 수 있음
const ForwardedFancyButtonClass = React.forwardRef(
    (props, ref) => <FancyButtonClass {...props}
                                      forwardRef={ref}
                                      onClick={props.onClick}/>)

class UsingFancyButtonComponent extends Component {
    constructor(props) {
        super(props)

        // 기존 방식과 동일하게 ref 객체 생성
        this.fancyButtonRef1 = React.createRef()
        this.fancyButtonRef2 = React.createRef()
    }

    render() {
        return (
            <div>
                {/* 부모 컴포넌트에서 ref 객체 생성 후 자식 컴포넌트로 전달하기(forwarding) */}
                <FancyButtonFunc ref={this.fancyButtonRef1} onClick={()=>{
                    /*
                        이후에는 ref 객체를 통해 컴포넌트 내부의 DOM에 직접 접근 가능
                        (단, 여기서 참조하는 current 값은 FancyButton 컴포넌트가 아니라 FancyButton 내부의 button 요소임을 유의!)
                    */
                    this.fancyButtonRef2.current.disabled = true
                    setTimeout(() => {
                        this.fancyButtonRef2.current.disabled = false
                    }, 1000)
                }}>
                    Disable Button 2
                </FancyButtonFunc>
                <br />
                <ForwardedFancyButtonClass ref={this.fancyButtonRef2} onClick={()=>{
                    this.fancyButtonRef1.current.disabled = true
                    setTimeout(() => {
                        this.fancyButtonRef1.current.disabled = false
                    }, 1000)
                }}>
                    Disable Button 1
                </ForwardedFancyButtonClass>
            </div>
        )
    }
}

ReactDOM.render(<UsingFancyButtonComponent/>,document.getElementById("root"))