import './App.scss'
import { useEffect, useState } from 'react';



const URL = 'https://geek.itheima.net/v1_0/channels'

function App() {
    const [list, setList] = useState([])
    useEffect(() => {
        //做渲染前额外的操作
        async function getList(){
          const res = await fetch(URL)
          const data = await res.json()
          console.log(data);
          setList(data.data.channels)
        }
        getList()
    }, [])
  return (
    <div className="App">
      <h1>Hello React</h1>
      <ul>
        {list.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
