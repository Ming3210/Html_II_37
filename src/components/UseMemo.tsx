import React, { useMemo } from 'react'
interface Product{
    name: string
    id:number
    price:number
    quantity:number
}
let cart:Product[] = [
    {
        id: 1,
        name: "Iphone",
        price: 10000000,
        quantity: 3
    },
    {
        id: 2,
        name: "Iphone2",
        price: 7000000,
        quantity: 5
    },
    {
        id: 3,
        name: "Iphone3",
        price: 90000,
        quantity: 6
    },
   ]
   // Thêm sp vào cart
 
export default function UseMemo() {
    const [count,setCount] = React.useState<number>(0)
    const [myCart,setMyCart] = React.useState<Product[]>(cart)
    /*
    Ở đây có logic tính toán như sau
    */
  
   let price =  useMemo(()=>{
    let payment = cart.reduce((accummulator,currentValue)=>{
        return accummulator+ currentValue.price*currentValue.quantity
       },0)
       return payment;
   },[myCart])
   const addToCart = ()=>{
    let newProduct:Product = {
        id:11,
        name: "Iphone4",
        price: 5000,
        quantity: 3,
    }
    // thêm
    myCart.push(newProduct);
    
    setMyCart([...myCart]); 
}

  return (
    <div>UseMemo
        {/* 
        memory :ghi nhớ
        sinh r giải quyết vđ gì
        Đây là hook trong reactjs
        sinh ra giúp ghi nhớ những tính toán phức tapjvaf chỉ định tính toán lại khi cần thiết
        */}
        <p>Giá p trả : {price}</p>
    <button onClick={()=>setCount(count+1)}>changeCount</button>
    <button onClick={addToCart}>addCart</button>
    </div>
  )
}
