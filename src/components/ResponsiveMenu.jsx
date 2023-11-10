"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'
import ResponsiveBtn from './ResponsiveBtn';


const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

const ResponsiveMenu = () => {
    const [open, setOpen] = useState(false);


  return (
    <motion.div animate={open ? "open" : "closed"}
      className='flex flex-col items-center justify-center text-black'>
      <motion.div variants={variants}
        className='border border-slate-500 bg-slate-500 top-[50px] z-[999]  absolute w-[400px] h-[100px] '>
        <motion.div className='absolute top-[120%] w-[100%] h-[100%] flex flex-col items-center justify-center gap-4'>
            Tets</motion.div>
      </motion.div>
      <ResponsiveBtn setOpen={setOpen} />
     
    </motion.div>
  )
}

export default ResponsiveMenu