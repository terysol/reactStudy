"use strict"                // use strict : 엄격모드 (동작이 바뀜)

const user = {
    func() { console.log('this :', this) }
}
const another = { name: 'another' }

// 함수 호출 시점에 메소드를 호출하는 주체에 따라서 this 값 바인딩(this값이 바뀔 수 있음)
// 여기서는 user 객체가 this 값으로 바인딩 됨
user.func() // this : user 객체

const f = user.func             // .연산자의 왼쪽이 this가 된다.
// 이 시점에서는 호출하는 주체가 없으므로 this는 undefined (엄격 모드가 아니라면 글로벌 객체)
f() // this : undefined (값이 할당되지 않았다)
// △ 주체가 없다.

another.f = user.func
// 호출하는 주체가 another 객체로 바뀌었으므로 여기서는 another 객체가 this 값으로 바인딩 됨
another.f() // this : another 객체

// bind 메소드 바인딩을 통해 명시적으로 user 객체가 this 값으로 바인딩되도록 설정
const binded = user.func.bind(user)
// 비록 호출하는 주체는 없지만 앞서 명시적으로 this 바인딩을 수행했으므로 this는 user
// const ff=binded.bind(another);    ==> another로 절대로 바뀌지 않음
binded() // this : user 객체