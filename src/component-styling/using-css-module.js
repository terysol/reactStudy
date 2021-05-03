import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import buttonStyle from './MyButton.module.css'
import cn from 'classnames'

class MyButton extends Component {
    render() {
        // 고유한 클래스 이름이 부여된 것을 확인 가능
        // {font: "MyButton_font__2DthZ", color: "MyButton_color__1R2rw", size: "MyButton_size__1uFe0", border: "MyButton_border__34FhX"}
        // 이름을 겹치지 않게 하기 위해서
        // console.log(buttonStyle)

        // 객체의 font, color, size, border 속성에 클래스 이름이 저장됨
        // return <button className={`${buttonStyle.font} ${buttonStyle.color} ${buttonStyle.size} ${buttonStyle.border}`}>{this.props.label}</button>

        console.log( cn('foo', 'bar') ) // => 'foo bar'
        console.log( cn('foo', { bar: true }) ) // => 'foo bar'
        console.log( cn({ 'foo-bar': true }) ) // => 'foo-bar'
        console.log( cn({ 'foo-bar': false }) ) // => ''
        console.log( cn({ foo: true }, { bar: true }) ) // => 'foo bar'
        console.log( cn({ foo: true, bar: true }) ) // // => 'foo bar'
        // falsy 값은 모두 무시 (null, false, undefined, 0, 빈 문자열(''))
        console.log( cn(null, false, 'bar', undefined, 0, 1, { baz: null }, '') ) // => 'bar 1'

        const { font, color, size, border } = buttonStyle;
        return <button className={cn(font, color, size, border)}>{this.props.label}</button>
    }
}

ReactDOM.render(<MyButton label="Click Me" />, document.getElementById("root"))