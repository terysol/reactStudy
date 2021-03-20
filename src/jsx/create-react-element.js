import React from 'react'
import ReactDOM from 'react-dom'  // react를 사용하기 위한 import

const element=<h1>HelloWorld!!</h1>
// const img = React.createElement('img', { src: 'https://picsum.photos/id/237/200/300', title: 'img title' })

const img = React.createElement(
    'img',
    {
        src: 'https://picsum.photos/id/237/200/300',
        title: 'img title'
    }
)
// 리액트 요소 객체 내용 확인

const paragraph = React.createElement(
    'p',
    null,
    'Hello, React'
)

/*const lst = ['Chocolate', 'Vanilla', 'Banana'].map(flavor => {
    return React.createElement('li', null, flavor)
})  // 리엑트 요소가 포함됨 배열*/

const lst = ['Chocolate', 'Vanilla', 'Banana'].map(flavor => {
    return <h1>{flavor}</h1>
})  // 리엑트 요소가 포함됨 배열

const title = 'My favorite ice cream flavors'

/*const favorites = React.createElement('div', null,
    React.createElement('h1', null, `Title : ${title}`),
    React.createElement('ul', null, lst)
)*/

const favorites = <div>
    <h1>{`Titile: ${title}`}</h1>
    <ul>{lst}</ul>
</div>

/*const rootDiv = React.createElement('div', { id: 'mydiv' }, [img, paragraph,
    favorites])*/

const rootDiv = <div id="mydiv">
    {img}
    {paragraph}
    {favorites}
</div>  // 바꾼게 jsx

const rootElement = document.getElementById("root") // public.index.html에 있는 div id ="root"를 가져옴
ReactDOM.render(rootDiv, rootElement)
// img태그를 rootElement에 붙이라
