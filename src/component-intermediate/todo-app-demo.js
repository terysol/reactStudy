import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class TodoItem extends Component {
    render() {
        const { completed, text } = this.props.todo

        return (
            <div>
                <div>
                    <span
                        style={completed ? { textDecoration: 'line-through' } : null}   // 취소선 긋기
                        onClick={() => this.props.handleTodoStatusToggle(this.props.idx)}>
                        {text}
                    </span>&nbsp;
                    <button onClick={() => this.props.handleTodoRemove(this.props.idx)}>X</button>
                </div>
            </div>
        )
    }
}

class TodoList extends Component {
    render() {
        return (
            <ol>
                {
                    this.props.todos.map((todo, idx) => {
                        return (
                            <li key={idx}>
                                <TodoItem
                                    idx={idx}
                                    todo={todo}
                                    handleTodoStatusToggle={this.props.handleTodoStatusToggle}
                                    handleTodoRemove={this.props.handleTodoRemove}/>
                            </li>
                        )
                    })
                }
            </ol>
        )
    }
}

class TodoAdder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {          // this는  TodoAdder이다.
        this.setState({ input: e.target.value })   // 눌려서 변화는 값을 input에 대입하는 중
    }

    render() {     // render()는 바인드 해준다. 우리가 만들어준 것은 화살표함수를 사용해야함.
        return (
            <div>
                <input type='text' onChange={this.handleChange} value={this.state.input} />
                <button onClick={() => {
                    this.props.handleTodoAdd({ completed: false, text: this.state.input })
                    this.setState({ input: '' })
                }}>Add</button>
            </div>
        )
    }
}

class TodoApp extends Component {       // 최상위
    constructor(props) {
        super(props)

        this.state = {          // 상태가 최상위 컴포넌트에 있음
            todos: [
                { completed: false, text: '리액트 공부하기' },
                { completed: true, text: 'ES6 문법 공부하기' },
            ]
        }
    }

    handleTodoAdd = (newTodo) => {
        this.setState((state) => ({
            todos: state.todos.concat(newTodo)
        }))
    }

    handleTodoStatusToggle = (todoIndex) => {
        this.setState((state) => ({
            todos: state.todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        }))
    }

    handleTodoRemove = (todoIndex) => {
        this.setState((state) => ({
            todos: state.todos.filter((_, idx) => {         // _ (나는 이 변수에 관심이 없다), 인덱스 정보만 관심
                return idx !== todoIndex
            })
        }))
    }

    render() {
        return (
            <div>
                <TodoList
                    todos={this.state.todos}
                    handleTodoStatusToggle={this.handleTodoStatusToggle}
                    handleTodoRemove={this.handleTodoRemove}/>
                <TodoAdder handleTodoAdd={this.handleTodoAdd} />
            </div>
        );
    }
}
// 하위 컴포넌트인 TodoList, TodoAdder가 todos에 관심이 있기 때문에 상위 컴포넌트인 TodoApp에 상태가 존재한다.

const rootElement = document.getElementById("root")
ReactDOM.render(<TodoApp />, rootElement)