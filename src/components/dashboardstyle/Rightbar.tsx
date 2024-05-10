import Link from 'next/link'
import React from 'react'

const ItemBox = [
  {title:'صفحه اصلی',row:1,url:"/dashboard"},
  {title:'اضافه کردن محصول',row:2,url:"/dashboard/newproduct"},
  {title:'لیست محصولات',row:3,url:"/dashboard/list"},
  {title:'امار مالی',row:4,url:"/dashboard/economi"},
  {title:'مطلب جدید',row:5,url:"/dashboard/newblog"},
]
const Rightbar = () => {

  return (
    <div className='p-1 flex flex-col' dir='rtl'>
      {ItemBox.map(item=>{
        return(

          <Link href={item.url} className="box-row bg-green-200 my-1 p-2 rounded-md"key={item.row}>{item.title}</Link>
        )
      })}
    
    </div>
  )
}

export default Rightbar
