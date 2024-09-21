"use client"
import Image from "next/image"
import logo from "@/assets/logo.svg"
import { usePathname } from 'next/navigation';
import sideBarContent from "@/data/sidebar.content"
import Link from "next/link"
import path from "path";
export default function Sidebar(){
    const pathName = usePathname();
        return (
        
    <div className="min-w-[368px] py-12 bg-white h-screen ">
<div className="w-full  flex justify-center mb-8 text-3xl">
    <Link href={"/"}><Image src={logo} alt="logo" width={90} height={90}/></Link>
    </div>
    <div className="w-full flex flex-col gap-2 py-2.5 text-foreground">
        {
            sideBarContent.map((item, key)=>{
                return (

                        <Link href={item.route} key={key} className={`py-4 duration-100 ease-out ${pathName === item.route ? "bg-gradient-to-r from-[#E83038]/40 to-transparent w-14   text-[#E83038]" : ''}`}>

                            <div className="w-full flex gap-5 ml-7  text-[22px]  text-left">
                                <div className={pathName === item.route ? "text-[#E83038]" : "text-[#ccc]"}>{item.icon}</div>
                            {item.title}
                            </div>
                            
                            </Link>
                )
            })
        }
        </div> 
    </div>
    )
}