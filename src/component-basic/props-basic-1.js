import React, {Component,Fragment} from 'react'
import ReactDOM from 'react-dom'

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


ReactDOM.render(<ComponentWithMultipleProps value1="Hello" value2="World" whatever={1234} />, document.getElementById("root"))

