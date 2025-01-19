'use client'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "./ui/button";
import { LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { AppbarReveal } from "./appbarReveal";


interface User{
  id: string;
  email: string;
  name: string;
  image?: string;
}
interface AppbarProps{
  logo:JSX.Element,
  user?:User,
  onSignIn:any,
  onSignOut:any,
  dashboard?:string
}
export function Appbar({logo,user,onSignIn,onSignOut,dashboard}:AppbarProps){

  return (
    <AppbarReveal>
      <div className="container mx-auto flex justify-between items-center pt-6">
        <div className="flex items-center">
          <div>
            {logo}
          </div>
          <div className="text-green-400 font-bold text-2xl pl-2" >Graph Hive</div>
        </div>
        {dashboard?(
          <div className="flex mt-4 mr-14">
          <a href='#Section 2' className="text-green-400 font-medium mr-5 hover:text-green-600 hover:cursor-pointer">
            Charts
          </a>
          <a href='#Section 3' className="text-green-400 font-medium hover:text-green-600 hover:cursor-pointer">
            FAQs
          </a>
        </div>
        ):<div/>}
        {user?(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="">
            <Avatar>
              <AvatarImage src={user.image} className="h-10 w-10" alt="User-Image" />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" style={{width:'170px'}} className=" py-2 flex flex-col justify-center">
            <DropdownMenuLabel className="px-4 font-bold">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="">
              <Button variant={"ghost"} className="w-full justify-start hover:bg-zinc-800 hover:text-zinc-50" >
                <LogOut />
                <span onClick={onSignOut}>Log out</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        ):(
        <div>
          <Button onClick={onSignIn} className="bg-green-400 hover:bg-green-500">
            Signup
          </Button>
        </div>
        )}
      </div>
    </AppbarReveal>
  )
}