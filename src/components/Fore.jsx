import React, {useRef} from 'react'
import Crds from './Crds'
import { useState } from 'react'
import { motion } from "motion/react"


function Fore() {

    const ref = useRef(null)

   const data = [
  {
    desc: "Grocery shopping list for the week – includes fruits, vegetables, and household essentials.",
    filesize: "120KB",
    close: true,
    tag: {
      isOpen: true,
      tagTitle: "Open List",
      tagColor: "green",
    },
  },
  {
    desc: "Wedding invitation PDF for printing and distribution to family and friends.",
    filesize: "2.4MB",
    close: false,
    tag: {
      isOpen: true,
      tagTitle: "Download",
      tagColor: "pink",
    },
  },
  {
    desc: "Daily workout plan - full body routine with timing and reps.",
    filesize: "500KB",
    close: true,
    tag: {
      isOpen: false,
      tagTitle: "Start Workout",
      tagColor: "orange",
    },
  },
  {
    desc: "Monthly electricity bill - needs to be paid before 10th.",
    filesize: "300KB",
    close: false,
    tag: {
      isOpen: true,
      tagTitle: "Pay Now",
      tagColor: "red",
    },
  },
  {
    desc: "Kids' school project - solar system poster in progress.",
    filesize: "1.5MB",
    close: true,
    tag: {
      isOpen: true,
      tagTitle: "View Work",
      tagColor: "blue",
    },
  },
];


  return (
    <div ref={ref} className='fixed z-[3] left-0 top-0 w-full h-full flex gap-8 flex-wrap p-7 '>
        {data.map((item,index) => (
            <Crds data={item} reference={ref}/>
        ))}
    </div>
  )
}


export default Fore
