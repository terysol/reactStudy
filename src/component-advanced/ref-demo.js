import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom'

class RefDemo extends Component {
    constructor(props) {
        super(props)

        // 주로 직접 접근이 필요한 DOM 노드를 저장하기 위한 용도로 Ref 사용 (저장소 만들어짐)
        this.inputEl = createRef()          // ~El는 요소 저장
        this.canvasEl = createRef()

        // 그냥 일반적인 값을 저장하기 위해서도 사용 가능 (보통 state 객체를 통해 상태를 저장하므로, 딱히 권장되는 방법은 아님)
        this.value = createRef()

        // 값 자체에는 Ref 객체의 current 속성을 통해서 접근
        this.value.current = 1          // current에 실제 저장한 값을 넣어준다.

        this.state = { trigger: true }
    }

    render() {
        console.log('render')

        return (
            <>
                {/* ref 속성에 앞서 생성한 ref 객체를 전달하는 방식으로 DOM 요소를 저장 */}
                <input type='text' ref={this.inputEl} />        {/* ref={this.inputEl} 저장한것  */}
                <br />
                <button onClick={() => {
                    this.setState((state) => ({ trigger: !state.trigger}) )
                }}>Trigger re-render {`(${this.state.trigger})`}</button>
                <br />

                <button onClick={() => {
                    // ref 값은 변경해도 re-render 하지 않음을 유의!
                    this.value.current++
                    console.log(this.value.current)
                }}>Update ref {`(${this.value.current})`}</button>
                <br />

                <button onClick={() => {
                    // 값 자체에는 current를 이용하여 접근
                    // ref에 저장된 값은 DOM 노드
                    this.inputEl.current.focus()
                }}>Focus input</button>
                <hr />
                <canvas width="200" height="200" ref={this.canvasEl} />
                <br />

                <button onClick={() => {
                    const c = this.canvasEl.current
                    // 리액트를 통해서 특정 요소만 가지고 있는 고유 속성 및 메소드에는 접근하지 못하므로 ref 값을 통해 직접 DOM 요소 접근
                    const ctx = c.getContext("2d")

                    const grd = ctx.createLinearGradient(0, 0, 200, 0)
                    grd.addColorStop(0, this.state.trigger ? "red" : "white")
                    grd.addColorStop(1, this.state.trigger ? "white" : "red")

                    ctx.fillStyle = grd
                    ctx.fillRect(0, 0, 200, 200)
                }}>Draw gradient</button>
            </>
        )
    }
}

ReactDOM.render(<RefDemo />, document.getElementById("root"))