
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import notifications from "@/data/notifications.content"
import { BellDotIcon , Search} from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
export default function Navbar() {
 
  return (
    <div className="bg-white   flex justify-between  py-6 px-8 rounded-sm mb-4">
    <div className="relative max-w-[200px]">
      <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pb-[2px]" />
      <Input
        className="pl-10 bg-[#fafafaed] rounded-[10px]"
        type="text"
        placeholder="Search"
      />
    </div>        <div className="flex gap-6 items-center">
        <Popover>
      <PopoverTrigger asChild>
        <BellDotIcon className="relative flex h-8 w-8 align-middle shrink-0 overflow-hidden" />
      </PopoverTrigger>
      <PopoverContent className="w-80 z-50 bg-[#FAFAFB]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold leading-none text-2xl mb-4">Notifications</h4>
            {notifications.map((notif, key)=>{
                return (
                    <div key={key} className="shadow-sm bg-white px-4 py-2 rounded-sm">
                    <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#E83038] rounded-full"></div>
          <h4>{notif.title}</h4>

        </div>
                    <p className="text-gray-400">{notif.description}</p>
                    </div>
                )
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </div>
    </div>
  )
}
