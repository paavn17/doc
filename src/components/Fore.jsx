import React, {useRef} from 'react'
import Crds from './Crds'
import { useState } from 'react'
import { motion } from "motion/react"


function Fore() {

    const ref = useRef(null)

    const data = [
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dignissimos.",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true, tagTitle:"Download Now", tagColor:"green",
            }
        },
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro perferendis nemo commodi atque quis, repudiandae reiciendis blanditiis consequuntur in illum.",
            filesize: ".7mb",
            close: true,
            tag: {
                isOpen: false, tagTitle:"Download Now", tagColor:"green",
            }
        },
        {
            desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime explicabo commodi quisquam alias reprehenderit repudiandae.",
            filesize: "1.2mb",
            close: false,
            tag: {
                isOpen: true, tagTitle:"Download Now", tagColor:"green",
            }
        },
    ]

  return (
    <div ref={ref} className='fixed z-[3] left-0 top-0 w-full h-full flex gap-8 flex-wrap p-7 '>
        {data.map((item,index) => (
            <Crds data={item} reference={ref}/>
        ))}
    </div>
  )
}


export default Fore