import { Icons } from '@/components/icons'
import React from 'react'

const menuItem = [
    {
        icon: "",
        label: "Trang chủ",
        href:'/dashboard'
    },
    {
        icon: "",
        label: "Trang chủ",
        href:'/dashboard'
    },
    {
        icon: "",
        label: "Trang chủ",
        href:'/dashboard'
    }
]

const Sider = () => {
  return (
    <div className='p-3'>
    {menuItem.map(item =>(
        <div className=' px-2 flex items-center justify-start gap-5 rounded-sm cursor-pointer hover:bg-gray-400 h-10'>
           <div><Icons.tiktok width={"20"}/></div>
           <div>
            {item.label} 
           </div>
        </div>
    ))}
    </div>
  )
}

export default Sider