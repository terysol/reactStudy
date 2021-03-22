import React, {Component,Fragment} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ComponentWithProps extends Component {
    constructor(props) {  // 속성값이 props로 전달
        super(props)

        console.log(props)  // {v// alue:"Hello"}  --> 객체 형태

        //this.props.obj.name="Sally"   // 객체는 수정이 가능은 하지만 수정이 안된다고 생각

        // this.props.value="Modify"  --> 하면 안됨됨
    } // 무조건 해야 함.

    render() {
        return (
            <>
                <p>{this.props.obj.name}</p>
                <p>{this.props.value.toString()}</p>  
            </>
        )
    }// 표현식
}
// ReactDOM.render(<ComponentWithProps value="Hello" obj={{name:"Jahn"}}/>, document.getElementById("root"))

class ComponentWithMultipleProps extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        // 객체 비구조 할당 사용 idiom
        const { value1, value2, whatever } = this.props


        /*
        return (
            <>
                <p>{this.props.value1}</p>
                <p>{this.props.value2}</p>
                <p>{this.props.whatever}</p>
            </>
        )
        */
        return (
            <>
                <p>{value1} {value2} {whatever}</p>
            </>
        )
    }
}

/* --------------------------------------------------------------- */
class PersonProfile extends Component {
    render() {
        const { name, age, gender, profile } = this.props
    return (
        <div
        className='person'
        style={this.props.highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p> <p>gender : {gender}</p>
        </div>
        )
    }
}
// PersonProfile.defaultProps = {
//     name: "Unknown",
//     gender: "Unknown",
//     age: 0,
//     profile: 'https://via.placeholder.com/150'
// }

// 기본 props 값도 당연히 적용 가능
PersonProfile.defaultProps = {
    name: "Unknown",
    profile: 'https://via.placeholder.com/150'
}
// 클래스에 propTypes 속성 설정하여 타입 지정 가능
PersonProfile.propTypes = {
// 속성이름 : PropTypes.자료형[.isRequired]
// age => 숫자 타입(number)의 값이어야 하며 필수적(isRequired)으로 전달해야 할 속성
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
// name => 문자열 타입(string)의 값이어야 하며 반드시 필요한 속성은 아님
    name: PropTypes.string,
    profile: PropTypes.string
}


ReactDOM.render(
    <div>
        <PersonProfile
            name='John'
            age={35}
            gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg' />

    </div>,
    document.getElementById("root"))

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

ReactDOM.render(
    <div>
        <PersonProfile
            name='John'
            age={35}
            gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg'
            highlight
        />
        <PersonProfile {...anotherPerson} />
        <PersonProfile name='Ken' gender='male' age={32} />
        <PersonProfile/>
        <PersonProfile gender='남성' age={1234}/>
    </div>,
    document.getElementById("root"))

