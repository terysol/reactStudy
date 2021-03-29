// NodeJS에서 실행
// 리스트 데이터

// concat(). filter(), map()   --> 원본에 영향을 미치지 않음. 새로운 배열 생성
let lst = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Paul" },
]

// lst.push({ id: 4, name: "Ken" })
// console.log(lst)

// concat을 사용하여 기존 리스트 객체는 그대로 두고(불변) 새 리스트를 전달할 수 있도록 하기
let newLst = lst.concat({ id: 4, name: "Ken" })
console.log("concat =====")
console.log(lst) // 원본에 영향 X
console.log(newLst) // 새로운 객체
console.log(lst === newLst) // 서로 다른 객체이므로 false 반환
// ===  :  참조비교

/* 객체의 한 속성이 바뀔 때 불변일 경우 , 새로운 참조가 생기고 참조 비교를 통해서 리엑트가 변경을 인지 한다.
*  불변이 아닐 경우, for문으로 속성을 다 돌면서 비교해줘야 하기 때문 효율 ↓*/


/* ------------ map --------------*/     // 값은 불변
// 요소 내용 변경은 map 메소드를 이용하여 처리
let updatedId = 2
let updatedName = "Smith"
let updatedLst = lst.map(item => {
    if(item.id === updatedId) {
        // 다음과 같이 객체를 직접 변경하지 않고 (원본 리스트는 불변!)
        // item.name = updatedName
        // 전개 연산자를 이용하여 값 복사 후 덮어쓰기 전략으로 새 객체를 생성하여 대입하기
        item = { ...item, name: updatedName }
    }
    return item
})
console.log("map =====")
console.log(lst) // 원본에 영향 X
console.log(updatedLst) // 새로운 객체
console.log(lst === updatedLst) // false


/* ----------- filter ------------*/
// 요소 삭제는 filter 메소드를 이용하여 처리  (삭제)
let removedId = 1
let removedLst = lst.filter(item => {
    return item.id !== removedId
})
console.log("filter =====")
console.log(lst) // 원본에 영향 X
console.log(removedLst) // 새로운 객체
console.log(lst === removedLst) // false

