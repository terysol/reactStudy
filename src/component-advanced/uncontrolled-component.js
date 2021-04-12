import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom'

class FormUncontrolledComponent extends React.Component {
    constructor(props) {
        super(props);

        // ref 생성
        this.input = React.createRef();
        // input type="file"의 경우 읽기 전용 요소이므로 비제어 요소로 취급해야 함
        this.fileInput = React.createRef();
    }
    handleSubmit = (e) => {
        // this.input.current => input 요소
        const v = this.input.current.value;
        const file = this.fileInput.current.value; // 파일 경로 및 파일명
        alert(v + " " + file);
        e.preventDefault();
    }
    render() {
        return (
            <form>
                {/* input 요소와 ref 연결 */}
                <input type="text" ref={this.input} /><br />
                <input type="file" ref={this.fileInput} /><br />
                <input type="submit" onClick={this.handleSubmit} />
            </form>
        );
    }
}

ReactDOM.render(<FormUncontrolledComponent />, document.getElementById("root"))