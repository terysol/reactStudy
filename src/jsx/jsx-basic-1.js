import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Josh Perez'
// 변수 내용 삽입 가능
// const element = <h1>Hello, {name}</h1>  // jsx에서 표현식 지원

const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

const JSXwithExpressions = (
    <h1>
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)} {/* jsx에서도 js 메서드 사용가능 */}
    </h1>)
const element = <div tabIndex="0"></div>

const ele=(<div>
    {true}
    {false}
    {undefined}
    {null}
</div>)   // 아무것도 나오지 않음

let unreadMessages=["Hello","World"]
const div2=(// 조건부 렌더링
    <div>
        <h1>Hello!</h1>
        {/* 만약 읽지 않은 메시지가 있다면 경고문 출력 */}
        {unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2> //리엑트 요서 반환
        }
    </div>
)

// JSX 표현식을 사용하여 조건부 렌더링을 할 경우에는 if, else 구문 사용 불가능
// (따라서 삼항 연산자를 사용하여 조건부 렌더링 수행)
const age = 20
const conditionalElement = (
    <>{age >= 20 ? <div>성인</div> : <div>미성년자</div>}</>
)

const h1=<h1 style={{color: "red",backgroundColor: "lightblue"}}>Hello Style!</h1>
ReactDOM.render(h1, document.getElementById("root"))
