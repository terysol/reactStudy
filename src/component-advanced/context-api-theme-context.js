import React, { Component, createContext } from 'react'
import ReactDOM from 'react-dom'

const ThemeContext = createContext({        // 디폴트값
    theme: 'light',
    // 저장할 수 있는 값에 제한이 없으므로, Context에 함수도 저장 가능
    // 여기서는 아무 작업도 하지 않는 함수를 디폴트값으로 전달
    toggleTheme: () => {}
});

// 이 컴포넌트는 theme값과 상태를 바꾸는 함수(toggleTheme)도 필요로 함
class ThemeUsingButton extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {/* theme 값, toggleTheme 함수 모두 전달 받기 */}
                {({ theme, toggleTheme }) => {
                    const buttonStyle = { width: '100px', height: '100px', fontSize: '50px' }
                    if(theme === 'light') buttonStyle['background'] = '#000'
                    if(theme === 'dark') buttonStyle['background'] = '#fff'

                    return (
                        <button onClick={toggleTheme} style={buttonStyle}>
                            {theme === 'light' ? '🌙' : '☀️' }
                        </button>
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}

// 이 컴포넌트는 오직 theme 값만 필요로 함
class ThemeUsingContainer extends Component {
    render() {
        const lightTheme = { background: '#fff' }
        const darkTheme = { background: '#000' }
        /* theme 값만 전달 받기 (자바스크립트에서는 함수에서 일부 파라미터값만 전달받아도 무방) */

        return (

        <ThemeContext.Consumer>
            {({ theme }) => {   // 비구조 할당으로 객체를 분해해서 가져오기 toggleTheme를 가지고 오지 않고 theme만 비구조할당으로 가져오고 있다.
                return (
                    <div style={theme === 'light' ? lightTheme : darkTheme}>
                        <ThemeUsingButton>Toggle theme</ThemeUsingButton>       {/* 값을 Consumer로 준다. props 값을 계속 전달할 필요가 없다.*/}
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    );
    }
}

class ThemeApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: 'light'
        }
    }

    toggleTheme = () => {
        this.setState(state => ({
            theme : state.theme === 'light' ? 'dark' : 'light'
        }));
    };

    render() {
        return (
            <div>
                {/* 컴포넌트 내부의 theme 상태값과 토글 메소드를 Consumer로부터 전달받을 수 있도록 Provider 컴포넌트에 value 값을 설정 */}
                <ThemeContext.Provider value={{         // Provider안에 있는 컴포넌트들은 여기에 접근 가능
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme
                }}>
                    <ThemeUsingContainer />
                </ThemeContext.Provider>
            </div>
        );
    }
}

ReactDOM.render(<ThemeApp />, document.getElementById("root"))