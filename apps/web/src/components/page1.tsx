'use client'
import { Button } from "@repo/ui";
import { Reveal } from '@repo/ui'
export default function Page1(){
  return (
    <div className="flex flex-col h-screen">
      <div className="mt-36 ml-56 mr-72 ">
        <Reveal>
          <div className="text-white font-bold text-5xl mb-4">
            Unlock Insights with <span className="text-green-400">Graph Hive</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="text-white font-bold text-2xl mb-4">
            Where data meets interactive storytelling<span className="text-green-400">.</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="text-white mb-4" >
            Turn complex data into meaningful visuals 📊 with our intuitive and powerful tools 🛠️. Designed for 
            professionals, students, and enthusiasts to uncover trends, patterns, and insights effortlessly ✨.
          </div>
        </Reveal>
        <Reveal>
          <div className="flex mb-4"> 
            <Button className="bg-green-400 hover:bg-green-500" >Get Started</Button>
            <Button className="bg-green-400 ml-6 hover:bg-green-500">Explore</Button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}