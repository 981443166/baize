// day1 1.0: 学习React的基础知识
// function App() {
//   const name = 'React';
//   const age = 18;
//   const test = (
//     <div>
//       <p>Hello: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   )
//   const getName = () => {
//     return 'baize'
//   }
//   return (
//     <div className="App">
//      {test}
//      {/* 函数调用 */}
//      {getName()}
//      {/* 方法调用 */}
//      {new Date().getDate()}
//      {/* 使用JS对象 */}
//      <div><p style={{color: 'red'}}>HelloJS</p></div>
//     </div>
//   );
// }

// day1 1.1: 实现列表渲染
// const list = [
//   { id: 1, name: "vue" },
//   { id: 2, name: "react" },
//   { id: 3, name: "angulara" },
// ];
// function App() {
//   return (
//     <div className="App">
//       <p>Hello React</p>
//       <ul>
//         {/* 列表渲染 */}
//         {list.map(item => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </div>
//   );
// }

// day1 1.2: 实现基础条件渲染
// const isLogin = true;

// function App(){
//   return(
//     <div>
//       {/* {逻辑与运算} */}
//       {/* 仅当isLogin为true时，渲染<p>已登录</p> */}
//       <p>逻辑与运算</p>
//       {isLogin && <p>已登录</p>}
//       {/* {三元运算符} */}
//       {isLogin ? <p>已登录</p> : <p>未登录</p>}
//     </div>
//   )
// }

// day1 1.3: 实现复杂条件渲染
// const getNameType = 0;

// function getName(){
//   if(getNameType === 0){
//     return <div>周杰伦</div>
//   }else if(getNameType === 1){
//     return <div>谢霆锋</div>
//   }else{
//     return <div>黎明</div>
//   }
// }

// function App(){
//   return(
//     <div className="App">
//       {getName()}
//     </div>
//   )
// }

// day1 1.4: 事件绑定
// 基础事件绑定
// function handleClick(){
//   console.log('点击了按钮')
// }
// 事件参数e
// function handleClick(e){
//   console.log('点击了按钮', e)
// }
//  自定义参数
// function handleClick(name){
//   console.log('点击了按钮', name)
// }
//  同时传递事件参数e和自定义参数
// function handleClick(e, name){
//   console.log('点击了按钮', e, name)
// }

// function App(){
//   return(
//     // 基础事件绑定
//     // <div className="App">
//     //   <button onClick={handleClick}>点击我</button>
//     // </div>
//     // 事件参数e
//     <div className="App">
//       <button onClick={(e) => handleClick(e, 'baize')}>点击我</button>
//     </div>
//   )
// }
// day1 1.5: useState状态管理
// 引入useState组件
import { useState } from 'react'

function App(){
  // 调用useState组件，定义状态变量count和状态更新函数setCount
  // 定义状态更新函数setCount
  const [count, setCount] = useState(0)
  // 点击事件回调函数
  function handleClick(){
    setCount(count + 1)
  }
  return(
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App;
