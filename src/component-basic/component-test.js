// 다음 모듈 불러오기 구문은 매 예제마다 삽입
import React, {Component,Fragment} from 'react'
import ReactDOM from 'react-dom'

// 클래스 기반 컴포넌트 정의
class MyComponent extends Component {
    // 렌더 함수 정의
    render() {  // render : 그리다.
        // JSX를 이용하여 컴포넌트에서 보여줄 내용을 정의
        return (
            <>   
                <h1>Title</h1>
                <div>My Component</div>
            </>

        )// <> 가능
    }
}
ReactDOM.render(<MyComponent />, document.getElementById("root"))
// <MyComponent /> --> 클래스 이름 작성. render()함수에 있는 것을 리턴해줌