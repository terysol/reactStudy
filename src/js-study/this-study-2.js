// 왜 게속 화살표 함수만 쓴 이유    ==> this의 값을 보존시켜준다.
class MyClass {
    handleSomething() { console.log('this :', this) }
    someArrowFunc = () => { console.log('this :', this) }
}

const c = new MyClass()
console.log('c.handleSomething()')
// 호출하는 주체가 c 이므로 this는 c
c.handleSomething()


function func(handler) {
    console.log('handler()')
    handler()
}
// 이 경우 func 내부에서 함수를 호출하고 따로 주체가 없으므로 this는 undefined
func(c.handleSomething)

console.log('bind 작업 진행')
const binded = c.handleSomething.bind(c)
// func 내부에서 함수를 호출하고 따로 주체는 없지만, 명시적으로 this를 c로 바인딩 했으므로 this는 c
func(binded)

// ----------------------------------------------------------------
console.log('화살 함수 전달')
// 화살표 함수 전달했으므로 this는 c
// Node 12버전부터 실험적인 문법 기능 제공 (https://github.com/tc39/proposal-class-fields)
func(c.someArrowFunc)   // this를 기억한다.