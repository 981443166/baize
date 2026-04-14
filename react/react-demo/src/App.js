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
const isLogin = true;

function App(){
  return(
    <div>
      {/* {逻辑与运算} */}
      {/* 仅当isLogin为true时，渲染<p>已登录</p> */}
      <p>逻辑与运算</p>
      {isLogin && <p>已登录</p>}
      {/* {三元运算符} */}
      {isLogin ? <p>已登录</p> : <p>未登录</p>}
    </div>
  )
}

export default App;
