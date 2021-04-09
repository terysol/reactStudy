import React from 'react'
import ReactDOM from 'react-dom'

class FormControlledComponent extends React.Component {
    constructor(props) {
        super(props);

        // 입력을 받는 태그의 내용과 동기화 할 값을 저장할 수 있도록 state 객체 구성
        this.state = {
            text: '',
            textareaText: '',
            checked: false,
            selected: 'default'
        }
    }

    // 입력을 받는 태그(input, textarea, select 등)의 변화에 반응할 이벤트 핸들러들 정의
    // e는 이벤트 객체 => targe : 이벤트가 발생할 dom 요소
    handleTextChange = e => {
        this.setState( {
            text: e.target.value
        });
    }

    handleTextareaTextChange = e => {
        this.setState( {
            textareaText: e.target.value
        });
    }

    handleCheckChange = e => {
        this.setState({
            checked: e.target.checked
        });
    }

    handleSelectChange = e => {
        this.setState({
            selected: e.target.value
        });
    }

    render() {
        return (
            <form>
                <p>text : {this.state.text}</p>
                {/*
                    1. 컴포넌트 상태와 input 입력값을 동기화하기 위해서 value 속성으로 현재 state 값 전달
                    2. 내용이 변경될 때 호출될 메소드를 onChange 속성으로 전달

                    동기화 setState() 해줘야 함.
                */}
                <input type="text" value={this.state.text} onChange={this.handleTextChange} /><br />
                <p>textarea text : {this.state.textareaText}</p>
                <textarea value={this.state.textareaText} onChange={this.handleTextareaTextChange} /><br />
                <p>checked : {this.state.checked + ""}</p>
                <input type="checkbox" onChange={this.handleCheckChange} checked={this.state.checked} /><br />
                <p>selected : {this.state.selected + ""}</p>
                <select value={this.state.selected} onChange={this.handleSelectChange}>
                    <option value="default">Default</option>
                    <option value="item1">Item 1</option>
                    <option value="item2">Item 2</option>
                    <option value="item3">Item 3</option>
                </select>
                <br />
            </form>
        );
    }
}

ReactDOM.render(<FormControlledComponent />, document.getElementById("root"))