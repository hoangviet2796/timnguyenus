import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import {Icons} from '@/components/icons'
import footer from './footer.module.css'
export default function Footer() {
  return (
    <footer  className={`${footer.footer}`}>
        <div className='min-w-2 h-20 ml-auto mr-auto flex justify-between max-w-screen-xl items-center'>
          <Link href="/" className="h-full">
            <Image className="h-full" src= '/images/logoTimtron1.png' width= {100} height = {100} alt="logo"></Image>
          </Link>
          <p className='m-auto '>©2024 TimNguyenUS. All rights reserved.</p>
          <div className='h-full flex mr-8 items-center'>
            <Link href="https://www.facebook.com/LyThanhDuy11388" target='_blank' className="pl-1">
              <Icons.facebook/>
            </Link>
            <Link href="https://web.telegram.org/" target='_blank' className="pl-1">
              <Icons.telegram/>
            </Link>
            </div>
        </div>
    </footer>
  )
}
