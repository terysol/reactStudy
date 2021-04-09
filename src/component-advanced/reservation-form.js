import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom'

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            date: '',
            isForeigner: false,
            roomNumber: 'one'
        };
    }
    handleInputChange = (event) => {            // 값이 바뀌는 것
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; // checked에 true/false 들어가 잇음.
        const name = target.name;

        // ES6에서 도입된 computed property names 문법 활용
        // https://eloquentcode.com/computed-property-names-in-javascript
        this.setState({
            // 태그의 name 속성값을 속성키로 사용
            [name]: value       // name이 계산이 있어서 변수에 있는 값을 가져와서 value
        });
    }
    handleSubmit = (e) => {
        alert("submit!");
        // 필요한 네트워크 요청(ex: ajax) 보내기
        // (입력 요소와 상태가 동기화되어 있으므로, 필요한 내용은 전부 state 객체에서 참조 가능)
        e.preventDefault();     // 다른 페이지로 넘어가기 싫을 때 사용
    }
    render() {
        return (
            <form>
                <p>{JSON.stringify(this.state)}</p>  {/* 객체의 내용을 보여준다. (json 객체로)*/}
                <hr />
                {/* name의 이름이 state 속성 값과 같음*/}
                <label>이름 <input value={this.state.name} name="name" type="text" onChange={this.handleInputChange} /></label><br />
                <label>날짜 <input value={this.state.date} name="date" type="date" onChange={this.handleInputChange} /></label><br />
                <label>외국인 여부 <input checked={this.state.isForeigner} name="isForeigner" type="checkbox" onChange={this.handleInputChange} /></label><br />
                <select name="roomNumber" value={this.state.roomNumber} onChange={this.handleInputChange}>
                    <option value="one">1개</option>
                    <option value="two">2개</option>
                    <option value="three">3개</option>
                </select>
                <br />
                <input type="submit" value="제출" onClick={this.handleSubmit} />
            </form>
        );
    }
}

ReactDOM.render(<ReservationForm />, document.getElementById("root"))