'use client'
import Image from "next/image"
import { Appbar } from "@repo/ui"
import { signIn, signOut, useSession } from "next-auth/react";


export default function UserAppbar({dashboard}:{dashboard?:string}){
  const session=useSession();
  return (
    <div>
      <Appbar logo={<Image src='/favicon.png' alt='App Logo' width={50} height={50}></Image>} 
        user={session.data?.user} onSignIn={signIn} onSignOut={signOut} {...(dashboard ? { dashboard } : {})}>
      </Appbar>
    </div>
  )
}