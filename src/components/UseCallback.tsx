import React from 'react'

export default function UseCallback() {
  return (
    <div>UseCallback
      {/* Đây là 1 hook trong react 
      Cách dùng
      import {useCallback} from React
      useCallback() nhận vào 2 đối số
      1. callback là arrow function ==> đi xử lí logic
      2. [] || [dêpndency]
      ==> Khi nào dependency này thay đổi thì useCallback đc gọi cx tương tụ useEffect
      */}
    </div>
  )
}
