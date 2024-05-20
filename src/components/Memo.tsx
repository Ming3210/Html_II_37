import React, { memo } from 'react'
interface Props{
    // count: number
    name: string
    increase: Function
}

 function Memo(props: Props) {
    console.log("Component memo đc gọi");
    
  return (
    <div>Memo
        {/* Memo là gì 
        HOC : higher order components : hàm bậc cao trong js
        Kiểm tra xem có props nào thay đổi hay không
         - Nếu props (Giá trị truyền vào) thay đổi thì components sẽ re-render 
         - Nếu props ko thay đổi thì components sẽ ko re-render
         - Chỉ cần 1 props thay đổi thì sẽ đc re-render theo chứ ko phải tất cả
        */}
        
    </div>
  )
}

export default memo(Memo)