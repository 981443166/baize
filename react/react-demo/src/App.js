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
const list = [
  { id: 1, name: "vue" },
  { id: 2, name: "react" },
  { id: 3, name: "angulara" },
];
function App() {
  return (
    <div className="App">
      <p>Hello React</p>
      <ul>
        {/* 列表渲染 */}
        {list.map(item => <li>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
