'use client'
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface RevealProps{
  children:JSX.Element,
  width?:'fit-content'|'100%'
}
export function Reveal({children,width='fit-content'}:RevealProps){

  const ref=useRef(null);
  const inView=useInView(ref,{once:true})
  const mainControls=useAnimation()
  const slideControls=useAnimation()

  useEffect(()=>{
    if(inView){
      mainControls.start('visible')
      slideControls.start('visible')
    }
  },[inView])

  return (
    <div ref={ref} style={{width:{width},position:'relative',overflow:'hidden'}}>
      <motion.div
        variants={{
          hidden:{opacity:0,y:75},
          visible:{opacity:1,y:0},
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.5,delay:0.25}}
      >{children}</motion.div>
      <motion.div
        variants={{
          hidden:{x:0},
          visible:{x:'100%'},
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn"}}
        className="absolute top-4 bottom-4 left-0 right-0 bg-green-400 z-20 "
      >
      </motion.div>
    </div>
  )
}