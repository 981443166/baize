//受控绑定表单
// import { useState } from "react";

import { createContext, useState } from "react";

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
// 核心:就是在子组件里面调用父组件的函数

// 子组件
// 3.将父传子的数据  作为props传递给子组件
// function Son({onGetSonMsg}) {
//   const sonMsg = "this is son msg";
//   return (
//     <div>
//       <p>this is son</p>
//       {/* 4. 点击事件调用父组件的函数，把子组件sonMsg的值传递给父组件 */}
//       <button onClick={() => onGetSonMsg(sonMsg)}>send</button>
//     </div>
//   )
// }
//父组件
// function App() {
//   // 5. 因为要修改页面状态，所以定义一个状态变量  用于存储子组件传递过来的数据
//   const [msg, setMsg] = useState('');
//   // 1.先声明一个函数
//   const getMsg = (msg) => {
//     console.log(msg);
//     setMsg(msg);
//   }
//   return (
//     <div>
//       {/* 6. 显示子组件传递过来的数据 */}
//       this is parent,{msg}
//       {/* 2. onGetSonMsg父传子数据 */}
//       <Son onGetSonMsg={getMsg} />
//     </div>
//   );
// }

//使用 状态提升 机制，通过父组件进行兄弟组件之间的数据传递
// import './App.scss'
// function A({onGetAName}) {
//   const name = "this is A component";
//   return (
//     <div className="Acomponent">
//       this is A component
//       <button onClick={() => onGetAName(name)}>send</button>
//     </div>
//   )
// }
// function B({name}) {
//   return (
//     <div className="Bcomponent">
//       this is B component,{name}
//     </div>
//   )
// }

// function App() {
//   const [aName, setAName] = useState('');
//   const getAName = (name) => {
//     console.log(name);
//     setAName(name);
//   }
//   return (
//     <div className="App">
//       this is app component
//       <A onGetAName={getAName} />
//       <B name={aName} />
//     </div>
//   );
// }

// 使用context机制跨层级组件数据传递
import "./App.scss";
import { useContext } from 'react'
// 1. 先声明一个context对象
const MsgContext = createContext();
function A() {
  return (
    <div className="Acomponent">
      this is A component
       <B />
    </div>
  );
}
function B() {
  // // 3. 从context对象  获取数据
  const msg = useContext(MsgContext);
  return <div className="Bcomponent">this is B component,{msg}</div>;
}

function App() {
  const msg = "this is app msg";
  return (
    <div className="App">
      {/* // 2. 通过context对象  提供数据 */}
      <MsgContext.Provider value={msg}>
        this is app component
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
