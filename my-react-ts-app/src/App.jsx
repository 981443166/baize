import { useState } from "react";
import "./App.css";

function App() {
  // 1.计数器
  // const [count, setCount] = useState(0)

  // const handleCut = () => {
  //   setCount(count - 1)
  // }

  // const handleAdd = () => {
  //   setCount(count + 1)
  // }

  // const handleReset = () => {
  //   setCount(0)
  // }

  // return (
  //  <div className="container1">
  //   <button onClick={handleCut}>-</button>
  //   <p>{count}</p>
  //   <button onClick={handleAdd}>+</button>
  //   <button onClick={handleReset}>Reset</button>
  //  </div>
  // )
  // 2.实时文字镜像
  // const [text, setText] = useState('')

  // const handleChange = (e) => {
  //   setText(e.target.value)
  // }
  // const handleReset = () => {
  //   setText('')
  // }

  // return(
  //   <div className="container2">
  //     <input type="text" value={text} onChange={handleChange} />
  //     <p>{text}</p>
  //     <button onClick={handleReset}>Reset</button>
  //   </div>
  // )

  // 3.开关切换
  // const [isOn, setIsOn] = useState(false)
  // const handleToggle = () => {
  //   setIsOn(!isOn)
  // }
  // const handleOff = () => {
  //   setIsOn(false)
  // }
  // return(
  //   <div className='container3'>
  //     <p>{isOn ? '日' : '夜'}</p>
  //     <button onClick={handleToggle}>切换</button>
  //     <button onClick={handleOff}>默认</button>
  //   </div>
  // )

  // 4.用户信息卡片（对象状态）
  // 定义一个初始用户对象
  const initialUser = { name: "", age: "", city: "" };
  // 临时状态
  const [user, setUser] = useState({
    name: "张三",
    age: "18",
    city: "北京",
  });
  // 真正的更新状态
  const [updatedUser, setUpdatedUser] = useState({
    name: "张三",
    age: "18",
    city: "北京",
  });

  //只更改临时状态
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setUpdatedUser(user);
    console.log(user);
  };

  const handleReset = () => {
    setUser(initialUser);
    setUpdatedUser(initialUser);
  };

  return (
    <div className="container4">
      <input
        type="text"
        onChange={handleChange}
        placeholder="姓名"
        name="name"
        value={user.name}
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="年龄"
        name="age"
        value={user.age}
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="城市"
        name="city"
        value={user.city}
      />
      <div className="buttonBox">
        <button onClick={handleSubmit}>提交</button>
        <button onClick={handleReset}>重置</button>
      </div>
      <div className="pBox">
        <p>姓名：{updatedUser.name}</p>
        <p>年龄：{updatedUser.age}</p>
        <p>城市：{updatedUser.city}</p>
      </div>
    </div>
  );
}

export default App;
