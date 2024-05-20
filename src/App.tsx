import React, { useCallback, useState } from 'react'
import Memo from './components/Memo'
import UseCallback from './components/UseCallback'
import UseMemo from './components/UseMemo'
import B1 from './components/B1'
import B2 from './components/B2'
import B3 from './components/B3'
import B4 from './components/B4'


export default function App() {
  const [count,setCount] = useState<number>(0)
  const [name,setName] = useState<string>("")
 
  const handleIncrease = useCallback(()=>{
    const increase =() => {

    }
    return increase()
  },[])
  /* 
  Khi mỗi lần function app re-render thì lại tạo ra 1 biến handleIncrease và gán giá trị là 1 function
  function là 1 kiểu dữ liệu tham chiếu reference-type
  cứ mỗi lần sẽ tạo biến mới là gán địa chỉ mới
  */
  return (
    
    <div>
      {/* Trong component App, khi re-render hoặc ms render lần đầu thì các components con sẽ render*/}

      {/* <p>Giá trị của count : {count}</p> */}
      {/* <button onClick={()=>setCount(count+1)}>Click memo</button> */}
      {/* <Memo increase={handleIncrease} name={name} ></Memo> */}
      {/* <UseCallback></UseCallback> */}
      {/* <UseMemo></UseMemo> */}
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
    </div>
  )
}
