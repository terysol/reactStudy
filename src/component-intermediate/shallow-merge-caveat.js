import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ShallowMergeDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "John",
            age: 20,
            address: {
                city: "New York",
                street: "20 W 34th St"
            },
            inner: {
                data1: 1000,
                data2: 2000,
                nestedInner: {
                    data3: 2000,
                    data4: 3000,
                    text: "Hello"
                }
            }
        }
    }

    brokenUpdate = () => {
        // 중첩 객체의 내용을 변경할 경우, setState 메소드는 얕은 병합(shallow merge)을 수행하므로 한 단계 더 들어간 중첩 객체 내용은 대체(replace)되어 버리는 현상이 발생함
        this.setState({
            address: { street: "new street info" }
        })
    }

    normalUpdate = () => {
        // 이전 상태를 전달받도록 콜백 함수 전달 후,
        this.setState( state => {
            // 중첩 객체의 상태를 전개 문법(spread syntax)를 이용해서 복사한 후, 새 값을 대입하는 식으로 수동 merge 작업 수행이 필요
            return {
                address: {
                    ...state.address,
                    street: "new street info"
                }
            }
        })
    }

    normalUpdateInner = () => {
        // Q) nestedInner 객체의 text를 "World"로 변경하되, inner 내부의 데이터를 모두 온전히 보존할 수 있도록 수정하게 코드 작성
        this.setState(state=>{
            return {
                inner:{
                    ...state.inner,
                    nestedInner:{
                        ...state.inner.nestedInner,
                        text:"World"
                    }
                }
            }
        })

    }

    render() {
        return (
            <div>
                <p>{JSON.stringify(this.state)}</p>
                <button onClick={this.brokenUpdate}>broken update</button><br />
                <button onClick={this.normalUpdate}>normal update</button><br />
                <button onClick={this.normalUpdateInner}>normal update inner</button>
            </div>
        );
    }
}
//  stringify() -> 객체를 json형식의 문자열로 바꿔준다

ReactDOM.render(<ShallowMergeDemo />, document.getElementById("root"))