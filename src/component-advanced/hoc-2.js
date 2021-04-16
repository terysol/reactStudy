import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const data = {
    'http://api.server.com/users/1': {
        'name': 'John',
        'age': 20
    },
    'http://api.server.com/favorites/2': [
        'Game', 'Movie'
    ],
    'http://api.server.com/todos': [
        '자바스크립트 공부', '리액트 공부'
    ]
}

// 특정 prefix 주소가 있고 id를 이용해서 데이터를 가져오는 컴포넌트로 기능을 확장해주는 HoC 정의
function withFetchedData(WrappedComponent, prefix) {
    return class extends React.Component {
        constructor(props) {
            super(props)

            // state 내부에 data에 요청한 데이터를 저장한다고 가정
            this.state = {
                data: null
            }
        }

        componentDidMount() {
            const url = `${prefix}${        // id 붙여주는 
                this.props.id === undefined ? '' : '/' + this.props.id }`

            // 여기서 네트워크 요청을 보낸다고 가정
            setTimeout(() => {
                this.setState({
                    data: data[url]
                })
            }, 1000)
        }

        render() {
            // https://stackoverflow.com/questions/54824123/can-i-pass-component-state-to-hoc
            // state를 직접 건드린다기 보다는 props을 통해서 state 값을 전달해야 함
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}

const UserInfo = withFetchedData(class extends Component {
    render() {
        const data = this.props.data
        if(data === null) return <div>Loading User Info...</div>

        return (
            <div>
                name : {data.name} age : {data.age}
            </div>
        )
    }
}, "http://api.server.com/users")

const FavoritesInfo = withFetchedData(class extends Component {
    render() {
        const data = this.props.data
        if(data === null) return <div>Loading Favorites Info...</div>

        return (
            <ul>
                {
                    data.map((f, idx) => {
                        return (<li key={idx}>
                            {f}
                        </li>)
                    })
                }
            </ul>
        )
    }
}, "http://api.server.com/favorites")

const TodoInfo = withFetchedData(class extends Component {
    render() {
        const data = this.props.data
        if(data === null) return <div>Loading Todo Info...</div>

        return (
            <ul>
                {
                    data.map((todo, idx) => {
                        return (<li key={idx}>
                            {todo}
                        </li>)
                    })
                }
            </ul>
        )
    }
}, "http://api.server.com/todos")

const App = () => {
    return (
        <div>
            <UserInfo id="1" />   {/* props로 받아오는 중 */}
            <FavoritesInfo id="2" />
            <TodoInfo />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))