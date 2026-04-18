//受控绑定表单
// import { useState } from "react";

// function App() {
//   //1 首先声明一个useState状态
//   const [value, setValue] = useState("");
//   return (
//     <div>
//       <input
//         //2 核心绑定流程
//         //  1 通过value属性绑定raact状态
//         value={value}
//         //  2 通过onChange事件 通过参数e获取到用户输入的内容 再反向修改到react状态
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//         type="text"
//       />
//     </div>
//   );
// }

// react 获取 DOM
// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);
//   const showDown = () => {
//     console.dir(inputRef.current);
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         id="myInput"
//         ref={inputRef}
//       />
//       <button onClick={showDown}>获取DOM</button>
//     </div>
//   );
// }

// 父传子数据
// import './App.scss'
// //props可以传递任意数据，但是在子组件里面只能读取，不能修改父组件的状态
// function Son(props){
//   console.log(props.name);
//   return <div className="son">this is son component,{props.name},{props.children}</div>
// }

// function App() {
//   const name = "this is parent component";
//   return (
//     // <div>
//     //   <Son name={name} />
//     // </div>

//     //特殊的props  children  在子组件为标签嵌套一个标签
//     <Son name={name}>
//       <p>这是一个段落</p>
//     </Son>
//   );
// }

// 子传父
// 就是在子组件里面调用父组件的函数
// 子组件
function Son() {
  const sonMsg = "this is son component";
  return (
    <div>
      <p>this is son</p>
      <button>send</button>
    </div>
  )
}
//父组件
function App() {
  return (
    <div>
      <p>this is parent</p>
      <Son />
    </div>
  );
}
export default App;
